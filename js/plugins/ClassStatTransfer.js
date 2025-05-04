/*:
 * @target MZ
 * @plugindesc (v1.3) On class change ≥Lv 5, add 10% of base+item traits (no equip). Fixes init error.
 * @author You
 *
 * @help
 * When an actor ≥ level 5 changes class, 10% of their
 * current “base + non-equip trait” stats is stored permanently
 * and stacks each time you change classes.
 */

(() => {
    //–– 1) Ensure new games get the bonus array
    const _GA_init = Game_Actor.prototype.initMembers;
    Game_Actor.prototype.initMembers = function() {
        _GA_init.call(this);
        this._classBonuses = new Array(8).fill(0);
    };

    //–– 2) Ensure loaded saves also have the array
    const _DM_extract = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        _DM_extract.call(this, contents);
        $gameActors._data.forEach(actor => {
            if (actor && actor.isActor && !actor._classBonuses) {
                actor._classBonuses = new Array(8).fill(0);
            }
        });
    };

    //–– 3) Compute “base + item-trait” for each param
    Game_Actor.prototype._basePlusItemTraits = function(paramId) {
        const base = this.paramBase(paramId);
        // traitObjects includes equips—filter those out
        const sources = this.traitObjects().filter(obj => !this.equips().includes(obj));
        return sources.reduce((sum, obj) => {
            return obj.traits.reduce((s, t) => {
                return (t.code === Game_BattlerBase.TRAIT_PARAM && t.dataId === paramId)
                    ? s + t.value
                    : s;
            }, sum);
        }, base);
    };

    //–– 4) On changeClass, snapshot & store 10% if level ≥ 5
    const _GA_changeClass = Game_Actor.prototype.changeClass;
    Game_Actor.prototype.changeClass = function(newClassId, keepExp) {
        // guard in case plugin loaded mid-game
        if (!this._classBonuses) this._classBonuses = new Array(8).fill(0);

        const lvl = this.level;
        const doBonus = lvl >= 5;
        let snap = [];

        if (doBonus) {
            snap = Array.from({ length: 8 }, (_, i) => this._basePlusItemTraits(i));
        }

        _GA_changeClass.call(this, newClassId, keepExp);

        if (doBonus) {
            snap.forEach((oldVal, i) => {
                const bonus = Math.floor(oldVal * 0.10);
                this._classBonuses[i] += bonus;
            });
        }
    };

    //–– 5) Merge those bonuses into the final paramPlus
    const _GBB_paramPlus = Game_BattlerBase.prototype.paramPlus;
    Game_BattlerBase.prototype.paramPlus = function(paramId) {
        let plus = _GBB_paramPlus.call(this, paramId);
        if (this.isActor() && this._classBonuses) {
            plus += this._classBonuses[paramId];
        }
        return plus;
    };
})();
