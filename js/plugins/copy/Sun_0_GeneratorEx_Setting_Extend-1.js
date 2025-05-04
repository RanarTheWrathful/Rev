//=============================================================================
// RPG Maker MZ - Sun_0_GeneratorEx_Setting_Extend.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc SunMZ Character Generator Expansion(setting extension plugin)。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @orderBefore Sun_0_GeneratorEx.js
 * @help Sun_0_GeneratorEx_Setting_Extend.js [version 1.1.0]
 * This plugin requires the official plugin [PluginCommonBase.js].
 *
 * This is a setting extension built for setting more content.
 *
 *=============================================================================
 *
 * @param ActorDataList
 * @text Actor Data Ex List
 * @desc Actor Parameter Settings。
 * @default []
 * @type struct<ActorDataExItem>[]
 *
 * @param WeaponDataList
 * @text Weapon Data Ex List
 * @desc Weapon Parameter Settings。
 * @default []
 * @type struct<WeaponDataExItem>[]
 *
 * @param ArmorDataList
 * @text Armor Data Ex List
 * @desc Armor Parameter Settings。
 * @default []
 * @type struct<ArmorDataExItem>[]
 *
 * @param VarDataList
 * @text Variable Data Ex List
 * @desc Variable Parameter Settings。
 * @default []
 * @type struct<VariableDataExItem>[]
 *
 */

/*:ja_JP
 * @target MZ
 * @plugindesc SunMZ キャラジェネ拡張プラグイン(設定拡張プラグイン)。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @orderBefore Sun_0_GeneratorEx.js
 * @help Sun_0_GeneratorEx_Setting_Extend.js [version 1.1.0]
 * このプラグインは公式プラグインを必要とします PluginCommonBase.js
 *
 * これは、より多くのコンテンツを設定するために作成された拡張設定です。
 *=============================================================================
 *
 * @param ActorDataList
 * @text アクターデータの拡張リスト
 * @desc キャラクター配列に追加したい拡張パラメータを選択して追加します。
 * @default []
 * @type struct<ActorDataExItem>[]
 *
 * @param WeaponDataList
 * @text 武器の配列
 * @desc キャラクターのパーツを武器で置き換える。
 * @default []
 * @type struct<WeaponDataExItem>[]
 *
 * @param ArmorDataList
 * @text 防具の配列
 * @desc キャラクターのパーツを防具で置き換える。
 * @default []
 * @type struct<ArmorDataExItem>[]
 *
 * @param VarDataList
 * @text 変数の配列
 * @desc 変数によるヌード（裸）状態の設定。
 * @default []
 * @type struct<VariableDataExItem>[]
 *
 */

/*:zh_TW
 * @target MZ
 * @plugindesc SunMZ 角色生成器延伸應用差件(設定延伸插件)。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @orderBefore Sun_0_GeneratorEx.js
 * @help Sun_0_GeneratorEx_Setting_Extend.js [version 1.1.0]
 * 該插件需要官方插件 PluginCommonBase.js
 *
 * 這是為了可以設定更多內容而建置的設定擴充插件
 *=============================================================================
 *
 * @param ActorDataList
 * @text 角色陣列
 * @desc 點選角色陣列添加想要擴充的參數。
 * @default []
 * @type struct<ActorDataExItem>[]
 *
 * @param WeaponDataList
 * @text 武器陣列
 * @desc 會針對武器置換角色身上的部件。
 * @default []
 * @type struct<WeaponDataExItem>[]
 *
 * @param ArmorDataList
 * @text 防具陣列
 * @desc 會針對防具置換角色身上的部件。
 * @default []
 * @type struct<ArmorDataExItem>[]
 *
 * @param VarDataList
 * @text 變數陣列
 * @desc 會針對變數配置裸裝的狀態。
 * @default []
 * @type struct<VariableDataExItem>[]
 *
 */

/*:zh_CN
 * @target MZ
 * @plugindesc SunMZ 角色生成器延伸应用差件(设定延伸插件)。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @orderBefore Sun_0_GeneratorEx.js
 * @help Sun_0_GeneratorEx_Setting_Extend.js [version 1.1.0]
 * 该插件需要官方插件 PluginCommonBase.js
 *
 * 这是为了可以设定更多内容而建置的设定扩充插件
 *=============================================================================
 *
 * @param ActorDataList
 * @text 角色数组
 * @desc 点选角色数组添加想要扩充的参数。
 * @default []
 * @type struct<ActorDataExItem>[]
 *
 * @param WeaponDataList
 * @text 武器数组
 * @desc 会针对武器置换角色身上的部件。
 * @default []
 * @type struct<WeaponDataExItem>[]
 *
 * @param ArmorDataList
 * @text 防具数组
 * @desc 会针对防具置换角色身上的部件。
 * @default []
 * @type struct<ArmorDataExItem>[]
 *
 * @param VarDataList
 * @text 变量数组
 * @desc 会针对变量配置裸装的状态。
 * @default []
 * @type struct<VariableDataExItem>[]
 *
 */

/*~struct~VariableDataExItem:
 *
 * @param id
 * @text Variable ID
 * @desc Variable ID
 * @type variable
 * @default 0
 *  
 * @param varCodeDataList
 * @text Variable Code Data List
 * @desc Variable Parameter Differential Configuration。
 * @default []
 * @type struct<VariableCodeDataExItem>[]
 *
 */

/*~struct~VariableDataExItem:ja_JP
 *
 * @param id
 * @text 変数のID
 * @desc 変数のID
 * @type variable
 * @default 0
 *  
 * @param varCodeDataList
 * @text 変数パラメータの差異を配置する配列。
 * @desc 変数パラメータの差異を配置する配列。
 * @default []
 * @type struct<VariableCodeDataExItem>[]
 *
 */

/*~struct~VariableDataExItem:zh_TW
 *
 * @param id
 * @text 變數ID
 * @desc 變數ID
 * @type variable
 * @default 0
 *  
 * @param varCodeDataList
 * @text 變數參數差異配置陣列
 * @desc 變數參數差異配置陣列。
 * @default []
 * @type struct<VariableCodeDataExItem>[]
 *
 */
 
/*~struct~VariableDataExItem:zh_CN
 *
 * @param id
 * @text 变数ID
 * @desc 变数ID
 * @type variable
 * @default 0
 *  
 * @param varCodeDataList
 * @text 变量参数差异配置数组
 * @desc 变量参数差异配置数组。
 * @default []
 * @type struct<VariableCodeDataExItem>[]
 *
 */

/*~struct~VariableCodeDataExItem:
 *
 * @param code
 * @text Variable Value
 * @desc Variable Value
 * @type number
 * @default 0
 *
 * @param actorListVarDataList
 * @text Actor List Variable Data List
 * @desc actor Pattern Configuration。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorVarDataList
 * @text Actor Variable Data List
 * @desc actor Pattern Configuration。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~VariableCodeDataExItem:ja_JP
 *
 * @param code
 * @text 変数の値
 * @desc 変数の値
 * @type number
 * @default 0
 *
 * @param actorListVarDataList
 * @text 多役キャラクターパーツパターン配列
 * @desc 多役キャラクターパーツパターン配列
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorVarDataList
 * @text キャラクターパーツのアイコン配置の配列。
 * @desc キャラクターパーツのアイコン配置の配列。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */
 
/*~struct~VariableCodeDataExItem:zh_TW
 *
 * @param code
 * @text 變數值
 * @desc 變數值
 * @type number
 * @default 0
 *
 * @param actorListVarDataList
 * @text 多位角色部件圖案配置陣列
 * @desc 多位角色部件圖案配置陣列。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorVarDataList
 * @text 角色部件圖案配置陣列
 * @desc 角色部件圖案配置陣列。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */
 
/*~struct~VariableCodeDataExItem:zh_CN
 *
 * @param code
 * @text 变数值
 * @desc 变数值
 * @type number
 * @default 0
 *
 * @param actorListVarDataList
 * @text 多位角色部件图案配置阵列
 * @desc 多位角色部件图案配置阵列。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorVarDataList
 * @text 角色部件图案配置数组
 * @desc 角色部件图案配置数组。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~WeaponDataExItem:
 *
 * @param id
 * @text Weapon ID
 * @desc Weapon ID
 * @type weapon
 * @default 0
 *  
 * @param actorListWeaponDataList
 * @text Actor List Weapon Data List
 * @desc Actor List Equipment Image Configuration for the Weapon。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorWeaponDataList
 * @text Actor Weapon DataList
 * @desc Actor Equipment Image Configuration for the Weapon。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~WeaponDataExItem:ja_JP
 *
 * @param id
 * @text 武器のID
 * @desc 武器のID
 * @type weapon
 * @default 0
 *  
 * @paramactorListWeaponDataList
 * @text 複数のキャラクターの武器構成配列
 * @desc この武器を装備した複数のキャラクターの画像構成。
 * @デフォルト []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorWeaponDataList
 * @text キャラクターの武器配置の配列。
 * @desc キャラクターがその武器を装備した際の画像配置。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~WeaponDataExItem:zh_TW
 *
 * @param id
 * @text 武器ID
 * @desc 武器ID
 * @type weapon
 * @default 0
 *  
 * @param actorListWeaponDataList
 * @text 多位角色武器配置陣列
 * @desc 多位角色裝備該武器的圖片配置。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorWeaponDataList
 * @text 角色武器配置陣列
 * @desc 角色裝備該武器的圖片配置。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~WeaponDataExItem:zh_CN
 *
 * @param id
 * @text 武器ID
 * @desc 武器ID
 * @type weapon
 * @default 0
 *  
 * @param actorListWeaponDataList
 * @text 多位角色武器配置阵列
 * @desc 多位角色装备该武器的图片配置。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorWeaponDataList
 * @text 角色武器配置数组
 * @desc 角色装备该武器的图片配置。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~ArmorDataExItem:
 *
 * @param id
 * @text Armor ID
 * @desc Armor ID
 * @type armor
 * @default 0
 *
 * @param actorListArmorDataList
 * @text Actor List Armor Data List
 * @desc Actor List Equipment Image Configuration for the Armor。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorArmorDataList
 * @text Actor Armor Data List
 * @desc Actor Equipment Image Configuration for the Armor。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */
 
/*~struct~ArmorDataExItem:ja_JP
 *
 * @param id
 * @text 装備のID
 * @desc 装備のID
 * @type armor
 * @default 0
 *
 * @param actorListArmorDataList
 * @text 複数キャラの装備構成配列
 * @desc この防具を装備した複数のキャラクターの画像構成。
 * @default []
 * @type struct<ActorListEquipDataItem>[] 
 *
 * @param actorArmorDataList
 * @text キャラクターの装備配置の配列。
 * @desc キャラクターがその防具を装備した際の画像配置。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */
 
/*~struct~ArmorDataExItem:zh_TW
 *
 * @param id
 * @text 裝備ID
 * @desc 裝備ID
 * @type armor
 * @default 0
 *  
 * @param actorListArmorDataList
 * @text 多位角色裝備配置陣列
 * @desc 多位角色裝備該防具的圖片配置。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *  
 * @param actorArmorDataList
 * @text 角色裝備配置陣列
 * @desc 角色裝備該防具的圖片配置。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */
 
/*~struct~ArmorDataExItem:zh_CN
 *
 * @param id
 * @text 装备ID
 * @desc 装备ID
 * @type armor
 * @default 0
 *  
 * @param actorListArmorDataList
 * @text 多位角色装备配置数组
 * @desc 多位角色装备该防具的图片配置。
 * @default []
 * @type struct<ActorListEquipDataItem>[]
 *
 * @param actorArmorDataList
 * @text 角色装备配置数组
 * @desc 角色装备该防具的图片配置。
 * @default []
 * @type struct<ActorEquipDataItem>[]
 *
 */

/*~struct~ActorEquipDataItem:
 *
 * @param id
 * @text Actor ID
 * @desc Actor ID
 * @type actor
 * @default 0
 *
 * @param genPicList
 * @text Generator Pic List
 * @desc generator PIC Configuration。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text Generator Fg List
 * @desc generator Face Configuration。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text Generator Tv List
 * @desc generator TV Configuration。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text Generator Tvd List
 * @desc generator TVD Configuration。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text Generator Sv List
 * @desc generator SV Configuration。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */
 
/*~struct~ActorListEquipDataItem:
 *
 * @param actorIdList
 * @text Actor ID List
 * @desc Actor ID List
 * @type actor[]
 * @default []
 *
 * @param genPicList
 * @text Generator Pic List
 * @desc generator PIC Configuration。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text Generator Fg List
 * @desc generator Face Configuration。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text Generator Tv List
 * @desc generator TV Configuration。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text Generator Tvd List
 * @desc generator TVD Configuration。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text Generator Sv List
 * @desc generator SV Configuration。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */

/*~struct~ActorEquipDataItem:ja_JP
 *
 * @param id
 * @text キャラクターのIDです。
 * @desc キャラクターのIDです。
 * @type actor
 * @default 0
 *
 * @param genPicList
 * @text キャラクター生成器のPICリスト
 * @desc キャラクター生成器のPICリスト。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text キャラクター生成器のFGリスト
 * @desc キャラクター生成器のFGリスト。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text キャラクター生成器のTVリスト
 * @desc キャラクター生成器のTVリスト。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text キャラクター生成器のTVDリスト
 * @desc キャラクター生成器のTVDリスト。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text キャラクター生成器のSVリスト
 * @desc キャラクター生成器のTVDリスト。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */

/*~struct~ActorListEquipDataItem:ja_JP
 *
 * @param actorIdList
 * @text アクターIDリスト
 * @desc アクターIDリスト
 * @type actor[]
 * @default []
 *
 * @param genPicList
 * @text キャラクター生成器のPICリスト
 * @desc キャラクター生成器のPICリスト。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text キャラクター生成器のFGリスト
 * @desc キャラクター生成器のFGリスト。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text キャラクター生成器のTVリスト
 * @desc キャラクター生成器のTVリスト。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text キャラクター生成器のTVDリスト
 * @desc キャラクター生成器のTVDリスト。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text キャラクター生成器のSVリスト
 * @desc キャラクター生成器のTVDリスト。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */

/*~struct~ActorEquipDataItem:zh_TW
 *
 * @param id
 * @text 角色ID
 * @desc 角色ID
 * @type actor
 * @default 0
 *
 * @param genPicList
 * @text PIC紙娃娃設定
 * @desc 針對角色裝備設定PIC紙娃娃。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text FG紙娃娃設定
 * @desc 針對角色裝備設定FG紙娃娃。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text TV紙娃娃設定
 * @desc 針對角色裝備設定TV紙娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text TVD紙娃娃設定
 * @desc 針對角色裝備設定TVD紙娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text SV紙娃娃設定
 * @desc 針對角色裝備設定SV紙娃娃。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */
 
/*~struct~ActorListEquipDataItem:zh_TW
 *
 * @param actorIdList
 * @text 角色ID陣列
 * @desc 角色ID陣列
 * @type actor[]
 * @default []
 *
 * @param genPicList
 * @text PIC紙娃娃設定
 * @desc 針對角色裝備設定PIC紙娃娃。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text FG紙娃娃設定
 * @desc 針對角色裝備設定FG紙娃娃。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text TV紙娃娃設定
 * @desc 針對角色裝備設定TV紙娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text TVD紙娃娃設定
 * @desc 針對角色裝備設定TVD紙娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text SV紙娃娃設定
 * @desc 針對角色裝備設定SV紙娃娃。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */

/*~struct~ActorEquipDataItem:zh_CN
 *
 * @param id
 * @text 角色ID
 * @desc 角色ID
 * @type actor
 * @default 0
 *
 * @param genPicList
 * @text PIC纸娃娃设定
 * @desc 针对角色装备设定PIC纸娃娃。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text FG纸娃娃设定
 * @desc 针对角色装备设定FG纸娃娃。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text TV纸娃娃设定
 * @desc 针对角色装备设定TV纸娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text TVD纸娃娃设定
 * @desc 针对角色装备设定TVD纸娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text SV纸娃娃设定
 * @desc 针对角色装备设定SV纸娃娃。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */
 
/*~struct~ActorListEquipDataItem:zh_CN
 *
 * @param actorIdList
 * @text 角色ID陣列
 * @desc 角色ID陣列
 * @type actor[]
 * @default []
 *
 * @param genPicList
 * @text PIC纸娃娃设定
 * @desc 针对角色装备设定PIC纸娃娃。
 * @default []
 * @type struct<ActorGenPicDataItemPlus>[]
 *
 * @param genFgList
 * @text FG纸娃娃设定
 * @desc 针对角色装备设定FG纸娃娃。
 * @default []
 * @type struct<ActorGenFgDataItemPlus>[]
 *
 * @param genTvList
 * @text TV纸娃娃设定
 * @desc 针对角色装备设定TV纸娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text TVD纸娃娃设定
 * @desc 针对角色装备设定TVD纸娃娃。
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genSvList
 * @text SV纸娃娃设定
 * @desc 针对角色装备设定SV纸娃娃。
 * @default []
 * @type struct<ActorGenSvDataItemPlus>[]
 *
 */

/*~struct~ActorDataExItem:
 *
 * @param id
 * @text actorId
 * @desc Actor ID
 * @type actor
 * @default 0
 *
 * @param equipSync
 * @text Equipment synchronization
 * @desc Specifies a character to synchronize with the current status of his equipment
 * @type actor
 * @default 0
 *
 * @param picInfo
 * @text ■ PIC Related Settings
 *
 * @param picWidth
 * @text Pic Canvas Width
 * @desc Pic Canvas Width。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param picHeight
 * @text Pic Canvas Height
 * @desc Pic Canvas Height。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param genPicList
 * @text Generator Pic List
 * @desc Configure Actor Tile Composition for PIC。
 * @parent picInfo
 * @default []
 * @type struct<ActorGenPicDataItem>[]
 *
 * @param faceInfo
 * @text ■ Face Related Settings
 *
 * @param IsUseGeneratorFG
 * @text Enable Generator FACE
 * @text Enable Generator FACE
 * @on Yes
 * @off No
 * @parent faceInfo
 * @type boolean
 * @default false
 *
 * @param fgWidth
 * @text Face Canvas Width
 * @desc Face Canvas Width。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param fgHeight
 * @text Face Canvas Height
 * @desc Face Canvas Height。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param genFgList
 * @text Generator Fg List
 * @desc Configure Actor Tile Composition for FACE。
 * @parent faceInfo
 * @default []
 * @type struct<ActorGenFgDataItem>[]
 *
 * @param tvInfo
 * @text ■ TV Related Settings
 *
 * @param IsUseGeneratorTV
 * @text Enable Generator TV
 * @text Enable Generator TV
 * @on Yes
 * @off No
 * @parent tvInfo
 * @type boolean
 * @default false
 *
 * @param tvWidth
 * @text TV Canvas Width
 * @desc TV Canvas Width。
 * @type number
 * @parent tvInfo
 * @default 144
 *
 * @param tvHeight
 * @text TV Canvas Height
 * @desc TV Canvas Height。
 * @type number
 * @parent tvInfo
 * @default 192
 *
 * @param genTvList
 * @text Generator Tv List
 * @desc Configure Actor Tile Composition for TV。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text Generator Tvd List
 * @desc Configure Actor Tile Composition for TVD。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param svInfo
 * @text ■ SV Related Settings
 *
 * @param IsUseGeneratorSV
 * @text Enable Generator SV
 * @text Enable Generator SV
 * @on Yes
 * @off No
 * @parent svInfo
 * @type boolean
 * @default false
 *
 * @param svWidth
 * @text SV Canvas Width
 * @desc SV Canvas Width。
 * @type number
 * @parent svInfo
 * @default 576
 *
 * @param svHeight
 * @text SV Canvas Height
 * @desc SV Canvas Height。
 * @type number
 * @parent svInfo
 * @default 384
 *
 * @param genSvList
 * @text Generator Sv List
 * @desc Configure Actor Tile Composition for SV。
 * @parent svInfo
 * @default []
 * @type struct<ActorGenSvDataItem>[]
 *
 */

/*~struct~ActorDataExItem:ja_JP
 *
 * @param id
 * @text キャラクターID
 * @desc キャラクターID
 * @type actor
 * @default 0
 *
 * @param equipSync
 * @text 装備の同期
 * @desc 装備の現在のステータスと同期するキャラクターを指定します
 * @type アクター
 * @デフォルト0
 *
 * @param picInfo
 * @text ■ PIC関連の設定
 *
 * @param picWidth
 * @text PICキャンバスの幅
 * @desc PICキャンバスの幅。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param picHeight
 * @text PICキャンバスの高さ
 * @desc PICキャンバスの高さ。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param genPicList
 * @text キャラクター生成器のPICリスト
 * @desc キャラクター生成器のPICリスト。
 * @parent picInfo
 * @default []
 * @type struct<ActorGenPicDataItem>[]
 *
 * @param faceInfo
 * @text ■ FG関連の設定
 *
 * @param IsUseGeneratorFG
 * @text かどうか選べますスイッチ Fg 生成器
 * @text かどうか選べますスイッチ Fg 生成器
 * @on はい
 * @off いいえ
 * @parent faceInfo
 * @type boolean
 * @default false
 *
 * @param fgWidth
 * @text FGキャンバスの幅
 * @desc FGキャンバスの幅。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param fgHeight
 * @text FGキャンバスの高さ
 * @desc FGキャンバスの高さ。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param genFgList
 * @text キャラクター生成器のFGリスト
 * @desc キャラクター生成器のFGリスト。
 * @parent faceInfo
 * @default []
 * @type struct<ActorGenFgDataItem>[]
 *
 * @param tvInfo
 * @text ■ TV関連の設定
 *
 * @param IsUseGeneratorTV
 * @text かどうか選べますスイッチ Tv 生成器
 * @text かどうか選べますスイッチ Tv 生成器
 * @on はい
 * @off いいえ
 * @parent tvInfo
 * @type boolean
 * @default false
 *
 * @param tvWidth
 * @text TVキャンバスの幅
 * @desc TVキャンバスの幅。
 * @type number
 * @parent tvInfo
 * @default 144
 *
 * @param tvHeight
 * @text TVキャンバスの高さ
 * @desc TVキャンバスの高さ。
 * @type number
 * @parent tvInfo
 * @default 192
 *
 * @param genTvList
 * @text キャラクター生成器のTVリスト
 * @desc キャラクター生成器のTVリスト。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text キャラクター生成器のTVDリスト
 * @desc キャラクター生成器のTVDリスト。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param svInfo
 * @text ■ SV関連の設定
 *
 * @param IsUseGeneratorSV
 * @text かどうか選べますスイッチ Sv 生成器
 * @text かどうか選べますスイッチ Sv 生成器
 * @on はい
 * @off いいえ
 * @parent svInfo
 * @type boolean
 * @default false
 *
 * @param svWidth
 * @text SVキャンバスの幅
 * @desc SVキャンバスの幅。
 * @type number
 * @parent svInfo
 * @default 576
 *
 * @param svHeight
 * @text SVキャンバスの高さ
 * @desc SVキャンバスの高さ。
 * @type number
 * @parent svInfo
 * @default 384
 *
 * @param genSvList
 * @text キャラクター生成器のSVリスト
 * @desc キャラクター生成器のSVリスト。
 * @parent svInfo
 * @default []
 * @type struct<ActorGenSvDataItem>[]
 *
 */
 
/*~struct~ActorDataExItem:zh_TW
 *
 * @param id
 * @text 角色ID
 * @desc 角色ID
 * @type actor
 * @default 0
 *
 * @param equipSync
 * @text 裝備同步
 * @desc 指定某位角色與其裝備的現狀同步
 * @type actor
 * @default 0
 *
 * @param picInfo
 * @text ■ PIC相關設定
 *
 * @param picWidth
 * @text PIC畫布寬
 * @desc PIC畫布寬。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param picHeight
 * @text PIC畫布高
 * @desc PIC畫布高。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param genPicList
 * @text PIC紙娃娃設定
 * @desc 針對角色裝備設定PIC紙娃娃。
 * @parent picInfo
 * @default []
 * @type struct<ActorGenPicDataItem>[]
 *
 * @param faceInfo
 * @text ■ FG相關設定
 *
 * @param IsUseGeneratorFG
 * @text 是否在FG套用紙娃娃
 * @text 是否在FG套用紙娃娃
 * @on 是
 * @off 否
 * @parent faceInfo
 * @type boolean
 * @default false
 *
 * @param fgWidth
 * @text FG畫布寬
 * @desc FG畫布寬。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param fgHeight
 * @text FG畫布高
 * @desc FG畫布高。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param genFgList
 * @text FG紙娃娃設定
 * @desc 針對角色設定FG紙娃娃。
 * @parent faceInfo
 * @default []
 * @type struct<ActorGenFgDataItem>[]
 *
 * @param tvInfo
 * @text ■ TV相關設定
 *
 * @param IsUseGeneratorTV
 * @text 是否在TV套用紙娃娃
 * @text 是否在TV套用紙娃娃
 * @on 是
 * @off 否
 * @parent tvInfo
 * @type boolean
 * @default false
 *
 * @param tvWidth
 * @text TV畫布寬
 * @desc TV畫布寬。
 * @type number
 * @parent tvInfo
 * @default 144
 *
 * @param tvHeight
 * @text TV畫布高
 * @desc TV畫布高。
 * @type number
 * @parent tvInfo
 * @default 192
 *
 * @param genTvList
 * @text TV紙娃娃設定
 * @desc 針對角色設定TV紙娃娃。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text TVD紙娃娃設定
 * @desc 針對角色裝備設定TVD紙娃娃。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param svInfo
 * @text ■ SV相關設定
 *
 * @param IsUseGeneratorSV
 * @text 是否在SV套用紙娃娃
 * @text 是否在SV套用紙娃娃
 * @on 是
 * @off 否
 * @parent svInfo
 * @type boolean
 * @default false
 *
 * @param svWidth
 * @text SV畫布寬
 * @desc SV畫布寬。
 * @type number
 * @parent svInfo
 * @default 576
 *
 * @param svHeight
 * @text SV畫布高
 * @desc SV畫布高。
 * @type number
 * @parent svInfo
 * @default 384
 *
 * @param genSvList
 * @text SV紙娃娃設定
 * @desc 針對角色設定SV紙娃娃。
 * @parent svInfo
 * @default []
 * @type struct<ActorGenSvDataItem>[]
 *
 */
 
/*~struct~ActorDataExItem:zh_CN
 *
 * @param id
 * @text 角色ID
 * @desc 角色ID
 * @type actor
 * @default 0
 *
 * @param equipSync
 * @text 装备同步
 * @desc 指定某位角色与其装备的现状同步
 * @type actor
 * @default 0
 *
 * @param picInfo
 * @text ■ PIC相关设定
 *
 * @param picWidth
 * @text PIC画布宽
 * @desc PIC画布宽。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param picHeight
 * @text PIC画布高
 * @desc PIC画布高。
 * @type number
 * @parent picInfo
 * @default 500
 *
 * @param genPicList
 * @text PIC纸娃娃设定
 * @desc 针对角色装备设定PIC纸娃娃。
 * @parent picInfo
 * @default []
 * @type struct<ActorGenPicDataItem>[]
 *
 * @param faceInfo
 * @text ■ FG相关设定
 *
 * @param IsUseGeneratorFG
 * @text 是否在FG套用纸娃娃
 * @text 是否在FG套用纸娃娃
 * @on 是
 * @off 否
 * @parent faceInfo
 * @type boolean
 * @default false
 *
 * @param fgWidth
 * @text FG画布宽
 * @desc FG画布宽。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param fgHeight
 * @text FG画布高
 * @desc FG画布高。
 * @type number
 * @parent faceInfo
 * @default 144
 *
 * @param genFgList
 * @text FG纸娃娃设定
 * @desc 针对角色设定FG纸娃娃。
 * @parent faceInfo
 * @default []
 * @type struct<ActorGenFgDataItem>[]
 *
 * @param tvInfo
 * @text ■ TV相关设定
 *
 * @param IsUseGeneratorTV
 * @text 是否在TV套用纸娃娃
 * @text 是否在TV套用纸娃娃
 * @on 是
 * @off 否
 * @parent tvInfo
 * @type boolean
 * @default false
 *
 * @param tvWidth
 * @text TV画布宽
 * @desc TV画布宽。
 * @type number
 * @parent tvInfo
 * @default 144
 *
 * @param tvHeight
 * @text TV画布高
 * @desc TV画布高。
 * @type number
 * @parent tvInfo
 * @default 192
 *
 * @param genTvList
 * @text TV纸娃娃设定
 * @desc 针对角色设定TV纸娃娃。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param genTvdList
 * @text TVD纸娃娃设定
 * @desc 针对角色装备设定TVD纸娃娃。
 * @parent tvInfo
 * @default []
 * @type struct<ActorGenTvDataItemPlus>[]
 *
 * @param svInfo
 * @text ■ SV相关设定
 *
 * @param IsUseGeneratorSV
 * @text 是否在SV套用纸娃娃
 * @text 是否在SV套用纸娃娃
 * @on 是
 * @off 否
 * @parent svInfo
 * @type boolean
 * @default false
 *
 * @param svWidth
 * @text SV画布宽
 * @desc SV画布宽。
 * @type number
 * @parent svInfo
 * @default 576
 *
 * @param svHeight
 * @text SV画布高
 * @desc SV画布高。
 * @type number
 * @parent svInfo
 * @default 384
 *
 * @param genSvList
 * @text SV纸娃娃设定
 * @desc 针对角色设定SV纸娃娃。
 * @parent svInfo
 * @default []
 * @type struct<ActorGenSvDataItem>[]
 *
 */

/*~struct~ActorGenPicDataItem:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text Pic Image
 * @desc Pic Image
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC Canvas X
 * @desc PIC Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC Canvas Y
 * @desc PIC Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenPicDataItemPlus:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text Pic Image
 * @desc Pic Image
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC Canvas X
 * @desc PIC Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC Canvas Y
 * @desc PIC Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text Whether to retain the color configuration of the Actor
 * @desc If set to yes, the color setting will be based on the color of the Actor setting.
 * @on Yes
 * @off No
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */

/*~struct~ActorGenPicDataItem:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text PIC画像
 * @desc PIC画像
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC Canvas X
 * @desc PIC Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC Canvas Y
 * @desc PIC Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenPicDataItemPlus:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text PIC画像
 * @desc PIC画像
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC Canvas X
 * @desc PIC Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC Canvas Y
 * @desc PIC Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text キャラクターのカラー設定を保持するかどうか
 * @desc はい に設定すると、このブロックの色設定はキャラクターによって設定された色に基づきます。
 * @on はい
 * @off いいえ
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenPicDataItem:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text PIC圖案
 * @desc PIC圖案
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC畫布X
 * @desc PIC畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC畫布Y
 * @desc PIC畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenPicDataItemPlus:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text PIC圖案
 * @desc PIC圖案
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC畫布X
 * @desc PIC畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC畫布Y
 * @desc PIC畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的顏色設定
 * @desc 如果設置為是，顏色設定會依照變數或是角色設定的顏色為基準。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenPicDataItem:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text PIC图案
 * @desc PIC图案
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC画布X
 * @desc PIC画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC画布Y
 * @desc PIC画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenPicDataItemPlus:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text PIC图案
 * @desc PIC图案
 * @type file
 * @dir img/generator_PIC/
 * @default
 *
 * @param x
 * @text PIC画布X
 * @desc PIC画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text PIC画布Y
 * @desc PIC画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的颜色设定
 * @desc 如果设置为是，颜色设定会依照变数或是角色设定的颜色为基准。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */

/*~struct~ActorGenFgDataItem:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text Face Image
 * @desc Face Image
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text Face Canvas X
 * @desc Face Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text Face Canvas Y
 * @desc Face Canvas Y。
 * @type number
 * @min -9999
 * @default 0

 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */

/*~struct~ActorGenFgDataItemPlus:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text Face Image
 * @desc Face Image
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text Face Canvas X
 * @desc Face Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text Face Canvas Y
 * @desc Face Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text Whether to retain the color configuration of the Actor
 * @desc If set to yes, the color setting will be based on the color of the Variable or Actor setting.
 * @on Yes
 * @off No
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */

/*~struct~ActorGenFgDataItem:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text FG画像
 * @desc FG画像
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text FG Canvas X
 * @desc FG Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text FG Canvas Y
 * @desc FG Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenFgDataItemPlus:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text FG画像
 * @desc FG画像
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text FG Canvas X
 * @desc FG Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text FG Canvas Y
 * @desc FG Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text キャラクターのカラー設定を保持するかどうか
 * @desc [はい] に設定すると、色の設定は変数または文字によって設定された色に基づきます。
 * @on はい
 * @off いいえ
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenFgDataItem:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text FG圖案
 * @desc FG圖案
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text FG畫布X
 * @desc FG畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text FG畫布Y
 * @desc FG畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenFgDataItemPlus:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text FG圖案
 * @desc FG圖案
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text FG畫布X
 * @desc FG畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text FG畫布Y
 * @desc FG畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的顏色設定
 * @desc 如果設置為是，顏色設定會依照變數或是角色設定的顏色為基準。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */

/*~struct~ActorGenFgDataItem:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text FG图案
 * @desc FG图案
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text FG画布X
 * @desc FG画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text FG画布Y
 * @desc FG画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenFgDataItemPlus:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text FG图案
 * @desc FG图案
 * @type file
 * @dir img/generator_FG/
 * @default
 *
 * @param x
 * @text FG画布X
 * @desc FG画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text FG画布Y
 * @desc FG画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的颜色设定
 * @desc 如果设置为是，颜色设定会依照变数或是角色设定的颜色为基准。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */

/*~struct~ActorGenTvDataItem:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text TV Image
 * @desc TV Image
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV Canvas X
 * @desc TV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV Canvas Y
 * @desc TV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItemPlus:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text TV Image
 * @desc TV Image
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV Canvas X
 * @desc TV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV Canvas Y
 * @desc TV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text Whether to retain the color configuration of the Actor
 * @desc If set to yes, the color setting will be based on the color of the Variable or Actor setting.
 * @on Yes
 * @off No
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItem:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text TV画像
 * @desc TV画像
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV Canvas X
 * @desc TV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV Canvas Y
 * @desc TV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItemPlus:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text TV画像
 * @desc TV画像
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV Canvas X
 * @desc TV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV Canvas Y
 * @desc TV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text キャラクターのカラー設定を保持するかどうか
 * @desc [はい] に設定すると、色の設定は変数または文字によって設定された色に基づきます。
 * @on はい
 * @off いいえ
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItem:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text TV圖案
 * @desc TV圖案
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV畫布X
 * @desc TV畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV畫布Y
 * @desc TV畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItemPlus:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text TV圖案
 * @desc TV圖案
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV畫布X
 * @desc TV畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV畫布Y
 * @desc TV畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的顏色設定
 * @desc 如果設置為是，顏色設定會依照變數或是角色設定的顏色為基準。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItem:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text TV图案
 * @desc TV图案
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV画布X
 * @desc TV画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV画布Y
 * @desc TV画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenTvDataItemPlus:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text TV图案
 * @desc TV图案
 * @type file
 * @dir img/generator_TV/
 * @default
 *
 * @param x
 * @text TV画布X
 * @desc TV画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text TV画布Y
 * @desc TV画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的颜色设定
 * @desc 如果设置为是，颜色设定会依照变数或是角色设定的颜色为基准。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */

/*~struct~ActorGenSvDataItem:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text SV Image
 * @desc SV Image
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV Canvas X
 * @desc SV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV Canvas Y
 * @desc SV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */ 
 
/*~struct~ActorGenSvDataItemPlus:
 *
 * @param cd
 * @text Part Type
 * @desc Part Type
 * @type text
 *
 * @param name
 * @text Part Name
 * @desc Part Name
 * @type text
 *
 * @param img
 * @text SV Image
 * @desc SV Image
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV Canvas X
 * @desc SV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV Canvas Y
 * @desc SV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text Whether to inherit the previous color setting
 * @desc If set to yes, the color setting will be based on the color of the Variable or Actor setting.
 * @on Yes
 * @off No
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text Original Color
 * @desc Original Color
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text New Color
 * @desc Colors to be Transformed
 * @type select
 * @default none
 * @option not change color
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candy apple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option red purple
 * @value redPurple
 * @option dark Reddish brown
 * @value darkReddishbrown
 * @option reddish brown
 * @value reddishbrown
 * @option dark red
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option mid yellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option light orange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option dark yellow green
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option spring green
 * @value springGreen
 * @option green
 * @value green
 * @option persian green
 * @value persianGreen
 * @option deep green
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option sky blue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympic blue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarine blue
 * @value ultramarineBlue
 * @option navy blue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */ 

/*~struct~ActorGenSvDataItem:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text SV画像
 * @desc SV画像
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV Canvas X
 * @desc SV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV Canvas Y
 * @desc SV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */ 
 
/*~struct~ActorGenSvDataItemPlus:ja_JP
 *
 * @param cd
 * @text 部品カテゴリ
 * @desc 部品カテゴリ
 * @type text
 *
 * @param name
 * @text 部品名
 * @desc 部品名
 * @type text
 *
 * @param img
 * @text SV画像
 * @desc SV画像
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV Canvas X
 * @desc SV Canvas X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV Canvas Y
 * @desc SV Canvas Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text キャラクターのカラー設定を保持するかどうか
 * @desc [はい] に設定すると、色の設定は変数または文字によって設定された色に基づきます。
 * @on はい
 * @off いいえ
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材のオリジナルの色。
 * @desc 素材のオリジナルの色。
 * @type select
 * @default white
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 *
 * @param newColor
 * @text 変換する色。
 * @desc 変換する色。
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option white
 * @value white
 * @option gray
 * @value gray
 * @option black
 * @value black
 * @option gold
 * @value gold
 * @option silver
 * @value silver
 * @option copper
 * @value copper
 * @option red
 * @value red
 * @option candyApple
 * @value candyApple
 * @option maroon
 * @value maroon
 * @option redPurple
 * @value redPurple
 * @option darkReddishbrown
 * @value darkReddishbrown
 * @option reddishbrown
 * @value reddishbrown
 * @option darkRed
 * @value darkRed
 * @option skin
 * @value skin
 * @option coral
 * @value coral
 * @option pink
 * @value pink
 * @option begoniaRed
 * @value begoniaRed
 * @option magenta
 * @value magenta
 * @option yellow
 * @value yellow
 * @option midYellow
 * @value midYellow
 * @option ochre
 * @value ochre
 * @option lightOrange
 * @value lightOrange
 * @option orange
 * @value orange
 * @option darkYellowGreen
 * @value darkYellowGreen
 * @option olive
 * @value olive
 * @option lime
 * @value lime
 * @option springGreen
 * @value springGreen
 * @option green
 * @value green
 * @option persianGreen
 * @value persianGreen
 * @option deepGreen
 * @value deepGreen
 * @option turquoise
 * @value turquoise
 * @option aqua
 * @value aqua
 * @option skyBlue
 * @value skyBlue
 * @option teal
 * @value teal
 * @option olympicBlue
 * @value olympicBlue
 * @option blue
 * @value blue
 * @option ultramarineBlue
 * @value ultramarineBlue
 * @option navyBlue
 * @value navyBlue
 * @option grape
 * @value grape
 * @option fuchsia
 * @value fuchsia
 * @option purple
 * @value purple
 * @option amethyst
 * @value amethyst
 * @option darkPurple
 * @value darkPurple
 */ 
 
/*~struct~ActorGenSvDataItem:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text SV圖案
 * @desc SV圖案
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV畫布X
 * @desc SV畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV畫布Y
 * @desc SV畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */ 
 
/*~struct~ActorGenSvDataItemPlus:zh_TW
 *
 * @param cd
 * @text 部件類別
 * @desc 部件類別
 * @type text
 *
 * @param name
 * @text 部件名稱
 * @desc 部件名稱
 * @type text
 *
 * @param img
 * @text SV圖案
 * @desc SV圖案
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV畫布X
 * @desc SV畫布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV畫布Y
 * @desc SV畫布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的顏色設定
 * @desc 如果設置為是，顏色設定會依照變數或是角色設定的顏色為基準。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的顏色
 * @desc 素材原本的顏色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要轉換的的顏色
 * @desc 要轉換的的顏色
 * @type select
 * @default none
 * @option 不轉色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 銀色
 * @value silver
 * @option 銅色
 * @value copper
 * @option 紅色
 * @value red
 * @option 蘋果糖紅
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗紅棕色
 * @value darkReddishbrown
 * @option 紅棕色
 * @value reddishbrown
 * @option 暗紅色
 * @value darkRed
 * @option 膚色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉紅色
 * @value pink
 * @option 海棠紅
 * @value begoniaRed
 * @option 洋紅色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黃綠色
 * @value darkYellowGreen
 * @option 橄欖色
 * @value olive
 * @option 青檸檬色
 * @value lime
 * @option 春綠色
 * @value springGreen
 * @option 綠色
 * @value green
 * @option 波斯綠
 * @value persianGreen
 * @option 深綠色
 * @value deepGreen
 * @option 綠松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空藍
 * @value skyBlue
 * @option 水鴨色
 * @value teal
 * @option 奧林匹斯藍
 * @value olympicBlue
 * @option 藍色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深藍色
 * @value navyBlue
 * @option 葡萄藍
 * @value grape
 * @option 紫紅色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */ 
 
/*~struct~ActorGenSvDataItem:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text SV图案
 * @desc SV图案
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV画布X
 * @desc SV画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV画布Y
 * @desc SV画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */
 
/*~struct~ActorGenSvDataItemPlus:zh_CN
 *
 * @param cd
 * @text 部件类别
 * @desc 部件类别
 * @type text
 *
 * @param name
 * @text 部件名称
 * @desc 部件名称
 * @type text
 *
 * @param img
 * @text SV图案
 * @desc SV图案
 * @type file
 * @dir img/generator_SV/
 * @default
 *
 * @param x
 * @text SV画布X
 * @desc SV画布X。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param y
 * @text SV画布Y
 * @desc SV画布Y。
 * @type number
 * @min -9999
 * @default 0
 *
 * @param IsInheritColors
 * @text 是否保留角色的颜色设定
 * @desc 如果设置为是，颜色设定会依照变数或是角色设定的颜色为基准。
 * @on 是
 * @off 否
 * @type boolean
 * @default false
 *
 * @param orgColor
 * @text 素材原本的颜色
 * @desc 素材原本的颜色
 * @type select
 * @default white
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 *
 * @param newColor
 * @text 要转换的的颜色
 * @desc 要转换的的颜色
 * @type select
 * @default none
 * @option 不转色
 * @value none
 * @option 白色
 * @value white
 * @option 灰色
 * @value gray
 * @option 黑色
 * @value black
 * @option 金色
 * @value gold
 * @option 银色
 * @value silver
 * @option 铜色
 * @value copper
 * @option 红色
 * @value red
 * @option 苹果糖红
 * @value candyApple
 * @option 栗色
 * @value maroon
 * @option 褐色
 * @value redPurple
 * @option 暗红棕色
 * @value darkReddishbrown
 * @option 红棕色
 * @value reddishbrown
 * @option 暗红色
 * @value darkRed
 * @option 肤色
 * @value skin
 * @option 珊瑚色
 * @value coral
 * @option 粉红色
 * @value pink
 * @option 海棠红
 * @value begoniaRed
 * @option 洋红色
 * @value magenta
 * @option 黄色
 * @value yellow
 * @option 中黄色
 * @value midYellow
 * @option 土黄色
 * @value ochre
 * @option 亮橘色
 * @value lightOrange
 * @option 橘色
 * @value orange
 * @option 暗黄绿色
 * @value darkYellowGreen
 * @option 橄榄色
 * @value olive
 * @option 青柠檬色
 * @value lime
 * @option 春绿色
 * @value springGreen
 * @option 绿色
 * @value green
 * @option 波斯绿
 * @value persianGreen
 * @option 深绿色
 * @value deepGreen
 * @option 绿松色
 * @value turquoise
 * @option 水色的
 * @value aqua
 * @option 天空蓝
 * @value skyBlue
 * @option 水鸭色
 * @value teal
 * @option 奥林匹斯蓝
 * @value olympicBlue
 * @option 蓝色
 * @value blue
 * @option 群青色
 * @value ultramarineBlue
 * @option 深蓝色
 * @value navyBlue
 * @option 葡萄蓝
 * @value grape
 * @option 紫红色
 * @value fuchsia
 * @option 紫色
 * @value purple
 * @option 紫晶色
 * @value amethyst
 * @option 深紫色
 * @value darkPurple
 */

var Imported = Imported || {};
Imported.SunMZ_GeneratorExSetting = true;
var SunMZ = SunMZ || {};
SunMZ.Versions = SunMZ.Versions || {};
SunMZ.Versions["Sun_0_GeneratorEx_Setting_Extend"] = "1.1.0";
SunMZ.GeneratorExSetting = SunMZ.GeneratorExSetting || {};
SunMZ.GeneratorExSetting.ActorDataExList = (SunMZ.GeneratorExSetting.ActorDataExList || []);
SunMZ.GeneratorExSetting.WeaponDataExList = (SunMZ.GeneratorExSetting.WeaponDataExList || []);
SunMZ.GeneratorExSetting.ArmorDataExList = (SunMZ.GeneratorExSetting.ArmorDataExList || []);
SunMZ.GeneratorExSetting.VariableDataExList = (SunMZ.GeneratorExSetting.VariableDataExList || []);


//-----------------------------------------------------------------------------

(() => {
	let parameters = PluginManagerEx.createParameter(document.currentScript);
	let actorDataExList = (parameters.ActorDataList || []);
	let weaponDataExList = (parameters.WeaponDataList || []);
	let armorDataExList = (parameters.ArmorDataList || []);
	let variableDataExList = (parameters.VarDataList || []);
	
	SunMZ.GeneratorExSetting.ActorDataExList = SunMZ.GeneratorExSetting.ActorDataExList.concat(actorDataExList);
	SunMZ.GeneratorExSetting.WeaponDataExList = SunMZ.GeneratorExSetting.WeaponDataExList.concat(weaponDataExList);
	SunMZ.GeneratorExSetting.ArmorDataExList = SunMZ.GeneratorExSetting.ArmorDataExList.concat(armorDataExList);
	SunMZ.GeneratorExSetting.VariableDataExList = SunMZ.GeneratorExSetting.VariableDataExList.concat(variableDataExList);

})();
