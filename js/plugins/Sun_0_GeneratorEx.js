//=============================================================================
// RPG Maker MZ - Sun_0_GeneratorEx.js
//=============================================================================
/* 
	This software can only be used by users who have purchased it legally and agree to the terms of use.
	Furthermore, this software includes components distributed under the MIT license and Apache 2.0 license.
	http://www.opensource.org/licenses/mit-license
	http://www.apache.org/licenses/LICENSE-2.0
 */
 
/*:
 * @target MZ
 * @plugindesc SunMZ Character Generator Expansion Plugin。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @help Sun_0_GeneratorEx.js [version 2.8.2]
 * This plugin requires the official plugin [PluginCommonBase.js].
 *
 * Function 1:
 *
 * The ability to freely edit individual character components.
 * This plugin allows for the flexible editing of character sections, adjusting stacking order,
 * and then being able to specify equipment, general parameters, and replacement settings for each character.
 * Each character can be configured with:
 * One set of images (PIC), 
 * one side-view image (SV), 
 * one portrait image (FACE), 
 * one standing image (TV), 
 * one knocked-down image (TVD).
 * Component configuration is completely customizable.
 * 
 * Function 2:
 *
 * Invoke side-view images for dramatic actions in non-combat mode,
 * This feature can be directly applied to characters with configured SV images, applicable to characters or events.
 * Insert the command in the first line's comment of the event.
 * Example:
 * substitute:1:tv
 * substitute:1:tvd
 * substitute:1:sv:thrust:Y
 * <substitute:[Actor ID]:[mode(tv|tvd|sv)]:[svMotion]:[horizontal flip(Y|N)]>
 * svMotion:thrust|swing|missile|walk|dead|sleep|spell|chant|guard|abnormal|dying|wait|skill|item|damage|evade|victory|escape
 * Create new folders (as having too many files in one directory may cause MZ to crash):
 * Place paper doll (PIC) related files under \img\generator_PIC\
 * Place paper doll TV (FG) related files under \img\generator_FG\
 * Place paper doll TV related files under \img\generator_TV\
 * Place paper doll SV related files under \img\generator_SV\
 *
 * Note that setting too many components can cause MZ to crash, so it's best to simplify the settings as much as possible.
 * The template is designed to show where the configuration sections should be placed, which is why there are so many sections.
 * Actually, you don't need to set up so many sections.
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
 * @param IsSaveSync
 * @text Synchronize with Save Data
 * @desc The character's equipment configuration will be reflected in the saved data
 * @on Yes
 * @off No
 * @type boolean
 * @default true
 *
 * @param FaceTimeoutNum
 * @text Face Timeout Num
 * @desc Set Facial Pattern Delay Time (Milliseconds)
 * @type number
 * @default 50
 *
 * @param SvScalingWidth
 * @text Sv Scaling Width
 * @desc Sv Scaling Width
 * @type text
 * @default 0.75
 *
 * @param SvScalingHeight
 * @text Sv Scaling Height
 * @desc Sv Scaling Height
 * @type text
 * @default 0.75
 *
 * @command switchFgGenerator
 * @text switchFgGenerator
 * @desc switch Face Generator
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on Yes
 * 		@off No
 *      @type boolean
 *      @default false
 *
 * @command switchTvGenerator
 * @text switchTvGenerator
 * @desc switch Tv Generator
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on Yes
 * 		@off No
 *      @type boolean
 *      @default false
 *
 * @command switchSvGenerator
 * @text switchSvGenerator
 * @desc switch Sv Generator
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on Yes
 * 		@off No
 *      @type boolean
 *      @default false
 *
 * @command checkSubstitute
 * @text Specify Event for Forcing Substitute Refresh
 * @desc Specify Event for Forcing Substitute Refresh
 *
 * @arg eventId
 * 		@text Event ID
 *      @desc Event ID
 *      @type number
 *      @default 0
 *
 * @command checkGenerator
 * @text Specify Character for Generator Refresh
 * @desc Specify Character for Generator Refresh
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @command setTvMode
 * @text Switch Character TV Display Mode
 * @desc Switch Character TV Display Mode
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @arg mode
 * @text TV Display Mode
 * @desc TV Display Mode
 * @type select
 * @default tv
 * @option Stand-Walk Mode
 * @value tv
 * @option Injured-Knocked Down Mode
 * @value tvd
 * @option Side-View Mode
 * @value sv
 *
 * @arg svMotion
 * @text Side-View Actions
 * @desc Side-View Actions
 * @type select
 * 	  @default none
 * 	  @option none
 * 	  @value none
 * 	  @option thrust
 * 	  @value thrust
 * 	  @option swing
 * 	  @value swing
 * 	  @option missile
 * 	  @value missile
 * 	  @option walk
 * 	  @value walk
 * 	  @option dead
 * 	  @value dead
 *    @option sleep
 * 	  @value sleep
 * 	  @option spell
 *    @value spell
 *    @option chant
 *    @value chant
 *    @option guard
 *    @value guard
 *    @option abnormal
 *    @value abnormal
 *    @option dying
 *    @value dying
 *    @option wait
 *    @value wait
 *    @option skill
 *    @value skill
 *    @option item
 *    @value item
 *    @option damage
 *    @value damage
 *    @option evade
 *    @value evade
 *    @option victory
 *    @value victory
 *    @option escape
 *    @value escape 
 *
 * @arg isHorizontalFlip
 * @text is Horizontal Flip
 * @desc is Horizontal Flip
 * 		@on Yes
 * 		@off No
 *      @type boolean
 *      @default false
 *
 * @command setMessageFace
 * @text Specify Character Portrait for Display in Dialogue
 * @desc Specify Character Portrait for Display in Dialogue
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @command cleanMessageFace
 * @text Clear Character Portrait Display in Dialogue
 * @desc Clear Character Portrait Display in Dialogue
 *
 * @command setupActorPicture
 * @text Display Character Image
 * @desc Display Character Image
 *
 * @arg pictureId
 * 		@text Image ID
 *      @desc Image ID
 * 		@type number
 *      @default
 *
 * @arg actorId
 * 		@text actorId
 *      @desc Actor ID
 *      @type actor
 *      @default
 *
 * @arg origin
 * 		@text origin
 *      @desc origin
 * 		@type select
 * 	  		@default 0
 * 	  		@option 左上
 * 	  		@value 0
 * 	  		@option 中央
 * 	  		@value 1
 *
 * @arg x
 * 		@text X
 *      @desc X
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg y
 * 		@text Y
 *      @desc Y
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg scaleX
 * 		@text scale X
 *      @desc scale X
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg scaleY
 * 		@text scale Y
 *      @desc scale Y
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg opacity
 * 		@text opacity
 *      @desc opacity
 * 		@type number
 *		@max 255
 *		@min 0
 * 	  	@default 255
 *
 * @arg blendMode
 * 		@text blend Mode
 *      @desc blend Mode
 * 		@type select
 * 	  		@default 0
 * 	  		@option Normal
 * 	  		@value 0
 * 	  		@option Additive
 * 	  		@value 1
 * 	  		@option Multiply
 * 	  		@value 2
 * 	  		@option Screen
 * 	  		@value 3
 *
 * @command generatorB64
 * @text generatorB64
 * @desc generatorB64
 *
 * @arg actorId
 * 		@text actorId
 *      @desc actorId
 *      @type actor
 *      @default
 *
 * @arg mode
 * 		@text mode
 * 		@desc mode
 * 		@type select
 * 		@default PIC
 * 		@option PIC
 * 		@value PIC
 * 		@option FG
 * 		@value FG
 * 		@option TV
 * 		@value TV
 * 		@option TVD
 * 		@value TVD
 * 		@option SV
 * 		@value SV
 *
 * @arg timeoutNum
 * 		@text timeout num
 *      @desc timeout num
 * 		@type number
 *      @min 0
 * 	  	@default 50
 *
 * @command changeActorSyncObject
 * @text change actor sync object
 * @desc change actor sync object
 *
 * @arg actorId
 * 		@text Actor ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg syncActorId
 * 		@text Sync Actor ID
 *      @desc 
 *      @type actor
 *      @default 0
 *
 * @command changeActorPartColor
 * @text change actor part color
 * @desc change actor part color
 *
 * @arg actorId
 * 		@text Actor ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg cd
 * 		@text Part CD
 * 		@desc Part CD
 * 		@type text
 *
 * @arg orgColor
 * 		@text org color
 * 		@desc org color
 * 		@type select
 * 		@default white
 * 		@option white
 * 		@value white
 * 		@option gray
 * 		@value gray
 * 		@option black
 * 		@value black
 * 		@option gold
 * 		@value gold
 * 		@option silver
 * 		@value silver
 * 		@option copper
 * 		@value copper
 * 		@option red
 * 		@value red
 * 		@option candyApple
 * 		@value candyApple
 * 		@option maroon
 * 		@value maroon
 * 		@option redPurple
 * 		@value redPurple
 *		@option darkReddishbrown
 * 		@value darkReddishbrown
 * 		@option reddishbrown
 * 		@value reddishbrown
 * 		@option darkRed
 * 		@value darkRed
 * 		@option skin
 * 		@value skin
 * 		@option coral
 * 		@value coral
 * 		@option pink
 * 		@value pink
 * 		@option begoniaRed
 * 		@value begoniaRed
 * 		@option magenta
 * 		@value magenta
 * 		@option yellow
 * 		@value yellow
 * 		@option midYellow
 * 		@value midYellow
 * 		@option ochre
 * 		@value ochre
 * 		@option lightOrange
 * 		@value lightOrange
 * 		@option orange
 * 		@value orange
 * 		@option darkYellowGreen
 * 		@value darkYellowGreen
 * 		@option olive
 * 		@value olive
 * 		@option lime
 * 		@value lime
 * 		@option springGreen
 * 		@value springGreen
 * 		@option green
 * 		@value green
 * 		@option persianGreen
 * 		@value persianGreen
 * 		@option deepGreen
 * 		@value deepGreen
 * 		@option turquoise
 * 		@value turquoise
 * 		@option aqua
 * 		@value aqua
 * 		@option skyBlue
 * 		@value skyBlue
 * 		@option teal
 * 		@value teal
 * 		@option olympicBlue
 * 		@value olympicBlue
 * 		@option blue
 * 		@value blue
 * 		@option ultramarineBlue
 * 		@value ultramarineBlue
 * 		@option navyBlue
 * 		@value navyBlue
 * 		@option grape
 * 		@value grape
 * 		@option fuchsia
 * 		@value fuchsia
 * 		@option purple
 * 		@value purple
 * 		@option amethyst
 * 		@value amethyst
 * 		@option darkPurple
 * 		@value darkPurple
 *
 * @arg newColor
 * 		@text new color
 * 		@desc new color
 * 		@type select
 * 		@default none
 * 		@option none
 * 		@value none
 * 		@option white
 * 		@value white
 * 		@option gray
 * 		@value gray
 * 		@option black
 * 		@value black
 * 		@option gold
 * 		@value gold
 * 		@option silver
 * 		@value silver
 * 		@option copper
 * 		@value copper
 * 		@option red
 * 		@value red
 * 		@option candyApple
 * 		@value candyApple
 * 		@option maroon
 * 		@value maroon
 * 		@option redPurple
 * 		@value redPurple
 * 		@option darkReddishbrown
 * 		@value darkReddishbrown
 * 		@option reddishbrown
 * 		@value reddishbrown
 * 		@option darkRed
 * 		@value darkRed
 * 		@option skin
 * 		@value skin
 * 		@option coral
 * 		@value coral
 * 		@option pink
 * 		@value pink
 * 		@option begoniaRed
 * 		@value begoniaRed
 * 		@option magenta
 * 		@value magenta
 * 		@option yellow
 * 		@value yellow
 * 		@option midYellow
 * 		@value midYellow
 * 		@option ochre
 * 		@value ochre
 * 		@option lightOrange
 * 		@value lightOrange
 * 		@option orange
 * 		@value orange
 * 		@option darkYellowGreen
 * 		@value darkYellowGreen
 * 		@option olive
 * 		@value olive
 * 		@option lime
 * 		@value lime
 * 		@option springGreen
 * 		@value springGreen
 * 		@option green
 * 		@value green
 * 		@option persianGreen
 * 		@value persianGreen
 * 		@option deepGreen
 * 		@value deepGreen
 * 		@option turquoise
 * 		@value turquoise
 * 		@option aqua
 * 		@value aqua
 * 		@option skyBlue
 * 		@value skyBlue
 * 		@option teal
 * 		@value teal
 * 		@option olympicBlue
 * 		@value olympicBlue
 * 		@option blue
 * 		@value blue
 * 		@option ultramarineBlue
 * 		@value ultramarineBlue
 * 		@option navyBlue
 * 		@value navyBlue
 * 		@option grape
 * 		@value grape
 * 		@option fuchsia
 * 		@value fuchsia
 * 		@option purple
 * 		@value purple
 * 		@option amethyst
 * 		@value amethyst
 * 		@option darkPurple
 * 		@value darkPurple
 */

/*:ja_JP
 * @target MZ
 * @plugindesc SunMZ キャラジェネ拡張プラグイン。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @help Sun_0_GeneratorEx.js [version 2.8.2]
 * このプラグインは公式プラグインを必要とします PluginCommonBase.js
 *
 * 機能1:
 * 自由にキャラクターパーツを編集できる機能です。
 * このプラグインでは、キャラクターの部分構成を自由に編集し、重ねる順序を調整できます。
 * また、装備や共通パラメータを指定し、各キャラクターに置き換え設定を指定できます。
 * それぞれのキャラクターには以下の設定ができます：
 * 1組の画像、サイドビューアングルの画像、アイコン画像、立ち絵画像、ダウン画像
 * 部分の設定は完全にカスタマイズ可能です。
 * 
 * 機能2:
 * 非戦闘モードでサイドビューアングルの画像をシーンアクションとして呼び出す機能です。
 * この機能は、SV画像が設定されているキャラクターに直接適用され、キャラクターまたはイベントに使用できます。
 * イベント内の最初の行に命令を記述してください。
 * EX:<substitute:1:tv>
 * EX:<substitute:1:tvd>
 * EX:<substitute:1:sv:thrust:Y>
 * <substitute:[Acter ID]:[mode(tv|tvd|sv)]:[svMotion]:[horizontal flip(Y|N)]>
 * svMotion:thrust|swing|missile|walk|dead|sleep|spell|chant|guard|abnormal|dying|wait|skill|item|damage|evade|victory|escape
 *
 * 新しいフォルダを作成する必要があります（ファイルが多すぎる場合、設定中にMZがクラッシュする可能性があるため、データを分けて配置します）
 * \img\generator_PIC\ フォルダにペーパードールのPIC関連ファイルを配置します
 * \img\generator_FG\ フォルダにペーパードールのTV関連ファイルを配置します
 * \img\generator_TV\ フォルダにペーパードールのTV関連ファイルを配置します
 * \img\generator_SV\ フォルダにペーパードールのSV関連ファイルを配置します
 * 注意点: 部品を過多に設定すると、MZがクラッシュする可能性があるため、設定内容を簡素化することをお勧めします。
 * テンプレートは、設定すべきブロックの場所を示すために多くのブロックが配置されているだけであり、これほど多くのブロックを設定する必要は実際にはありません。
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
 * @param IsSaveSync
 * @text セーブデータと同期するかどうか
 * @desc キャラクターの装備設定がセーブデータに反映されるようになります。
 * @on はい
 * @off いいえ
 * @type boolean
 * @default true
 *
 * @param FaceTimeoutNum
 * @text 顔の画像遅延時間
 * @desc 「顔画像の遅延時間（ミリ秒単位）」を設定します。
 * @type number
 * @default 50
 *
 * @param SvScalingWidth
 * @text SV画像の拡大縮小率（幅）
 * @desc 非戦闘マップにおけるSVマップの拡大縮小率(幅)
 * @type text
 * @default 0.75
 *
 * @param SvScalingHeight
 * @text SV画像拡大縮小率（高）
 * @desc 非戦闘マップにおけるSVマップの拡大縮小率(高)
 * @type text
 * @default 0.75
 *
 * @command switchFgGenerator
 * @text 選択して開くかどうか選べますスイッチ Fg 生成器
 * @desc 選択して開くかどうか選べますスイッチ Fg 生成器
 *
 * @arg actorId
 * 		@text 変更するキャラクターのIDです。
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 *      @on はい
 *      @off いいえ
 *      @type boolean
 *      @default false
 *
 * @command switchTvGenerator
 * @text 選択して開くかどうか選べますスイッチ TV 生成器
 * @desc 選択して開くかどうか選べますスイッチ TV 生成器
 *
 * @arg actorId
 * 		@text 変更するキャラクターのIDです。
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 *      @on はい
 *      @off いいえ
 *      @type boolean
 *      @default false
 *
 * @command switchSvGenerator
 * @text 選択して開くかどうか選べますスイッチ Sv 生成器
 * @desc 選択して開くかどうか選べますスイッチ Sv 生成器
 *
 * @arg actorId
 * 		@text 変更するキャラクターのIDです。
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 *      @on はい
 *      @off いいえ
 *      @type boolean
 *      @default false
 *
 * @command checkSubstitute
 * @text 指定したイベントを強制的にリフレッシュして代わりを設定します。
 * @desc 指定したイベントを強制的にリフレッシュして代わりを設定します。
 *
 * @arg eventId
 * 		@text リフレッシュしたいイベントのIDです。
 *      @desc 
 *      @type number
 *      @default 0
 *
 * @command checkGenerator
 * @text ジェネレーターのリフレッシュ用にキャラクターを指定します。
 * @desc ジェネレーターのリフレッシュ用にキャラクターを指定します。
 *
 * @arg actorId
 * 		@text 変更するキャラクターのIDです。
 *      @desc 
 *      @type actor
 *      @default
 *
 * @command setTvMode
 * @text キャラクターのTV表示モードを切り替えます。
 * @desc キャラクターのTV表示モードを切り替えます。
 *
 * @arg actorId
 * 		@text 変更するキャラクターのIDです。
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg mode
 * @text TV表示モード
 * @desc TV表示モード
 * @type select
 * @default tv
 * @option 立ちモードと歩行モード
 * @value tv
 * @option 受傷倒れモード
 * @value tvd
 * @option サイドビューアングル
 * @value sv
 *
 * @arg svMotion
 * @text サイドビューアングルのアクション
 * @desc サイドビューアングルのアクション
 * @type select
 * 	  @default none
 * 	  @option デフォルトなし
 * 	  @value none
 * 	  @option 突き刺す
 * 	  @value thrust
 * 	  @option 振り下ろす
 * 	  @value swing
 * 	  @option 射撃
 * 	  @value missile
 * 	  @option 歩行
 * 	  @value walk
 * 	  @option 死亡
 * 	  @value dead
 *    @option 眠り
 * 	  @value sleep
 * 	  @option 詠唱1
 *    @value spell
 *    @option 詠唱（ループ）
 *    @value chant
 *    @option 防御
 *    @value guard
 *    @option 状態異常
 *    @value abnormal
 *    @option 瀕死
 *    @value dying
 *    @option 待機
 *    @value wait
 *    @option スキル
 *    @value skill
 *    @option アイテム
 *    @value item
 *    @option ダメージ
 *    @value damage
 *    @option 回避
 *    @value evade
 *    @option 勝利
 *    @value victory
 *    @option 逃走
 *    @value escape 
 *
 * @arg isHorizontalFlip
 * @text 水平方向に反転するかどうか。
 * @desc 水平方向に反転するかどうか。
 *      @on はい
 *      @off いいえ
 *      @type boolean
 *      @default false
 *
 * @command setMessageFace
 * @text 指定した対話で表示されるキャラクターの顔アイコン。
 * @desc 指定した対話で表示されるキャラクターの顔アイコン。
 *
 * @arg actorId
 * 		@text キャラクターの顔アイコンを表示するためのキャラクターID。
 *      @desc 
 *      @type actor
 *      @default
 *
 * @command cleanMessageFace
 * @text 会話に表示されるキャラクターの顔アイコンをクリアします。
 * @desc 会話に表示されるキャラクターの顔アイコンをクリアします。
 *
 * @command setupActorPicture
 * @text キャラクターの画像を表示します。
 * @desc キャラクターの画像を表示します。
 *
 * @arg pictureId
 * 		@text 画像のIDです。
 *      @desc 画像のIDです。
 * 		@type number
 *      @default
 *
 * @arg actorId
 * 		@text キャラクターのIDです。
 *      @desc キャラクターのIDです。
 *      @type actor
 *      @default
 *
 * @arg origin
 * 		@text 原点
 *      @desc 原点
 * 		@type select
 * 	  		@default 0
 * 	  		@option 左上
 * 	  		@value 0
 * 	  		@option 中央
 * 	  		@value 1
 *
 * @arg x
 * 		@text X軸
 *      @desc X軸
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg y
 * 		@text Y軸
 *      @desc Y軸
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg scaleX
 * 		@text X軸方向の拡大縮小比率。
 *      @desc X軸方向の拡大縮小比率。
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg scaleY
 * 		@text Y軸方向の拡大縮小比率。
 *      @desc Y軸方向の拡大縮小比率。
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg opacity
 * 		@text 透明度
 *      @desc 透明度
 * 		@type number
 *		@max 255
 *		@min 0
 * 	  	@default 255
 *
 * @arg blendMode
 * 		@text 合成モード
 *      @desc 合成モード
 * 		@type select
 * 	  		@default 0
 * 	  		@option 標準モード
 * 	  		@value 0
 * 	  		@option 追加モード
 * 	  		@value 1
 * 	  		@option 乗算モード
 * 	  		@value 2
 * 	  		@option 画面（スクリーン）
 * 	  		@value 3
 *
 * @command generatorB64
 * @text 指定ブロックのB64を再作成
 * @desc 指定ブロックのB64を再作成
 *
 * @arg actorId
 * 		@text キャラクターのIDです。
 *      @desc キャラクターのIDです。
 *      @type actor
 *      @default
 *
 * @arg mode
 * 		@text mode
 * 		@desc mode
 * 		@type select
 * 		@default PIC
 * 		@option PIC
 * 		@value PIC
 * 		@option FG
 * 		@value FG
 * 		@option TV
 * 		@value TV
 * 		@option TVD
 * 		@value TVD
 * 		@option SV
 * 		@value SV
 *
 * @arg timeoutNum
 * 		@text 遅延時間 (ミリ秒)
 *      @desc 遅延時間 (ミリ秒)
 * 		@type number
 *      @min 0
 * 	  	@default 50
 *
 * @command changeActorSyncObject
 * @text キャラクター定義装備判定同期オブジェクトを修正
 * @desc キャラクター定義装備判定同期オブジェクトを修正
 *
 * @arg actorId
 * 		@text 変更するロールID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg syncActorId
 * 		@text 同期するロールID
 *      @desc 
 *      @type actor
 *      @default 0
 *
 * @command changeActorPartColor
 * @text ロール定義ブロックの色の変更
 * @desc ロール定義ブロックの色の変更
 *
 * @arg actorId
 * 		@text 変更するロールID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg cd
 * 		@text パーツCD
 * 		@desc パーツCD
 * 		@type text
 *
 * @arg orgColor
 * 		@text 素材本来の色
 * 		@desc 素材本来の色
 * 		@type select
 * 		@default white
 * 		@option white
 * 		@value white
 * 		@option gray
 * 		@value gray
 * 		@option black
 * 		@value black
 * 		@option gold
 * 		@value gold
 * 		@option silver
 * 		@value silver
 * 		@option copper
 * 		@value copper
 * 		@option red
 * 		@value red
 * 		@option candyApple
 * 		@value candyApple
 * 		@option maroon
 * 		@value maroon
 * 		@option redPurple
 * 		@value redPurple
 *		@option darkReddishbrown
 * 		@value darkReddishbrown
 * 		@option reddishbrown
 * 		@value reddishbrown
 * 		@option darkRed
 * 		@value darkRed
 * 		@option skin
 * 		@value skin
 * 		@option coral
 * 		@value coral
 * 		@option pink
 * 		@value pink
 * 		@option begoniaRed
 * 		@value begoniaRed
 * 		@option magenta
 * 		@value magenta
 * 		@option yellow
 * 		@value yellow
 * 		@option midYellow
 * 		@value midYellow
 * 		@option ochre
 * 		@value ochre
 * 		@option lightOrange
 * 		@value lightOrange
 * 		@option orange
 * 		@value orange
 * 		@option darkYellowGreen
 * 		@value darkYellowGreen
 * 		@option olive
 * 		@value olive
 * 		@option lime
 * 		@value lime
 * 		@option springGreen
 * 		@value springGreen
 * 		@option green
 * 		@value green
 * 		@option persianGreen
 * 		@value persianGreen
 * 		@option deepGreen
 * 		@value deepGreen
 * 		@option turquoise
 * 		@value turquoise
 * 		@option aqua
 * 		@value aqua
 * 		@option skyBlue
 * 		@value skyBlue
 * 		@option teal
 * 		@value teal
 * 		@option olympicBlue
 * 		@value olympicBlue
 * 		@option blue
 * 		@value blue
 * 		@option ultramarineBlue
 * 		@value ultramarineBlue
 * 		@option navyBlue
 * 		@value navyBlue
 * 		@option grape
 * 		@value grape
 * 		@option fuchsia
 * 		@value fuchsia
 * 		@option purple
 * 		@value purple
 * 		@option amethyst
 * 		@value amethyst
 * 		@option darkPurple
 * 		@value darkPurple
 *
 * @arg newColor
 * 		@text 変換する色
 * 		@desc 変換する色
 * 		@type select
 * 		@default none
 * 		@option none
 * 		@value none
 * 		@option white
 * 		@value white
 * 		@option gray
 * 		@value gray
 * 		@option black
 * 		@value black
 * 		@option gold
 * 		@value gold
 * 		@option silver
 * 		@value silver
 * 		@option copper
 * 		@value copper
 * 		@option red
 * 		@value red
 * 		@option candyApple
 * 		@value candyApple
 * 		@option maroon
 * 		@value maroon
 * 		@option redPurple
 * 		@value redPurple
 * 		@option darkReddishbrown
 * 		@value darkReddishbrown
 * 		@option reddishbrown
 * 		@value reddishbrown
 * 		@option darkRed
 * 		@value darkRed
 * 		@option skin
 * 		@value skin
 * 		@option coral
 * 		@value coral
 * 		@option pink
 * 		@value pink
 * 		@option begoniaRed
 * 		@value begoniaRed
 * 		@option magenta
 * 		@value magenta
 * 		@option yellow
 * 		@value yellow
 * 		@option midYellow
 * 		@value midYellow
 * 		@option ochre
 * 		@value ochre
 * 		@option lightOrange
 * 		@value lightOrange
 * 		@option orange
 * 		@value orange
 * 		@option darkYellowGreen
 * 		@value darkYellowGreen
 * 		@option olive
 * 		@value olive
 * 		@option lime
 * 		@value lime
 * 		@option springGreen
 * 		@value springGreen
 * 		@option green
 * 		@value green
 * 		@option persianGreen
 * 		@value persianGreen
 * 		@option deepGreen
 * 		@value deepGreen
 * 		@option turquoise
 * 		@value turquoise
 * 		@option aqua
 * 		@value aqua
 * 		@option skyBlue
 * 		@value skyBlue
 * 		@option teal
 * 		@value teal
 * 		@option olympicBlue
 * 		@value olympicBlue
 * 		@option blue
 * 		@value blue
 * 		@option ultramarineBlue
 * 		@value ultramarineBlue
 * 		@option navyBlue
 * 		@value navyBlue
 * 		@option grape
 * 		@value grape
 * 		@option fuchsia
 * 		@value fuchsia
 * 		@option purple
 * 		@value purple
 * 		@option amethyst
 * 		@value amethyst
 * 		@option darkPurple
 * 		@value darkPurple
 */

/*:zh_TW
 * @target MZ
 * @plugindesc SunMZ 角色生成器延伸應用插件。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @help Sun_0_GeneratorEx.js [version 2.8.2]
 * 該插件需要官方插件 PluginCommonBase.js
 *
 * 功能一:
 * 能夠自由編輯自身人物部件，
 * 該插件能夠自由編輯人物的區塊組成，並調整疊放順序，
 * 然後可以指定裝備，通用參數，針對每一個角色指定替換設定。
 * 每個人物可以配置:
 * 一組圖片,一個側面視角圖片,一個頭像圖片,一個站立圖片,一個倒地圖片
 * 部件的配置是完全自訂的。
 *
 * 功能二:
 * 在非戰鬥模式調用側面視角的圖片作為劇情動作使用，
 * 該功能可以針對有設置SV圖的角色直接調用，可以作用於角色或是事件。
 * 將指令打在事件裡第一行的注譯裡。
 * EX:<substitute:1:tv>
 * EX:<substitute:1:tvd>
 * EX:<substitute:1:sv:thrust:Y>
 * <substitute:[Acter ID]:[mode(tv|tvd|sv)]:[svMotion]:[horizontal flip(Y|N)]>
 * svMotion:thrust|swing|missile|walk|dead|sleep|spell|chant|guard|abnormal|dying|wait|skill|item|damage|evade|victory|escape
 *
 * 需要新建資料夾(因為檔案過多設定時會導致MZ當掉，將資料分開放)
 * 在\img\generator_PIC\底下放置紙娃娃PIC相關檔案
 * 在\img\generator_FG\底下放置紙娃娃TV相關檔案
 * 在\img\generator_TV\底下放置紙娃娃TV相關檔案
 * 在\img\generator_SV\底下放置紙娃娃SV相關檔案
 *
 * 注意一點 設置過多的部件會導致MZ當掉，所以盡量簡化設置的內容為佳，
 * 範本是為了讓大家知道設置的區塊應該擺在何處所以才設置如此多的區塊，
 * 其實不需要設置這麼多區塊。
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
 * @param IsSaveSync
 * @text 是否與存檔同步
 * @desc 人物的裝備配置會反應在存檔上
 * @on 是
 * @off 否
 * @type boolean
 * @default true
 *
 * @param FaceTimeoutNum
 * @text 臉部圖案延遲時間
 * @desc 設定臉部圖案延遲時間(毫秒)
 * @type number
 * @default 50
 *
 * @param SvScalingWidth
 * @text SV圖縮放比例(寬)
 * @desc SV圖在非戰鬥地圖的縮放比例(寬)
 * @type text
 * @default 0.75
 *
 * @param SvScalingHeight
 * @text SV圖縮放比例(高)
 * @desc SV圖在非戰鬥地圖的縮放比例(高)
 * @type text
 * @default 0.75
 *
 * @command switchFgGenerator
 * @text 選擇是否開啟FG紙娃娃
 * @desc 選擇是否開啟FG紙娃娃
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command switchTvGenerator
 * @text 選擇是否開啟TV紙娃娃
 * @desc 選擇是否開啟TV紙娃娃
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command switchSvGenerator
 * @text 選擇是否開啟SV紙娃娃
 * @desc 選擇是否開啟SV紙娃娃
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command checkSubstitute
 * @text 指定事件強制刷新替身
 * @desc 指定事件強制刷新替身
 *
 * @arg eventId
 * 		@text 要刷新的事件ID
 *      @desc 
 *      @type number
 *      @default 0
 *
 * @command checkGenerator
 * @text 指定角色強制刷新紙娃娃
 * @desc 指定角色強制刷新紙娃娃
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @command setTvMode
 * @text 切換角色TV顯示模式
 * @desc 切換角色TV顯示模式
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg mode
 * @text TV顯示模式
 * @desc TV顯示模式
 * @type select
 * @default tv
 * @option 站立行走模式
 * @value tv
 * @option 受傷倒地模式
 * @value tvd
 * @option 側面視角
 * @value sv
 *
 * @arg svMotion
 * @text 側面視角動作
 * @desc 側面視角動作
 * @type select
 * 	  @default none
 * 	  @option 原默認值
 * 	  @value none
 * 	  @option 突刺
 * 	  @value thrust
 * 	  @option 揮砍
 * 	  @value swing
 * 	  @option 射擊
 * 	  @value missile
 * 	  @option 走動
 * 	  @value walk
 * 	  @option 死亡
 * 	  @value dead
 *    @option 睡眠
 * 	  @value sleep
 * 	  @option 詠唱1
 *    @value spell
 *    @option 詠唱(loop)
 *    @value chant
 *    @option 防禦
 *    @value guard
 *    @option 異常
 *    @value abnormal
 *    @option 垂死
 *    @value dying
 *    @option 等待
 *    @value wait
 *    @option 技能
 *    @value skill
 *    @option 道具
 *    @value item
 *    @option 損傷
 *    @value damage
 *    @option 閃避
 *    @value evade
 *    @option 勝利
 *    @value victory
 *    @option 逃脫
 *    @value escape 
 *
 * @arg isHorizontalFlip
 * @text 是否水平翻轉
 * @desc 是否水平翻轉
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command setMessageFace
 * @text 指定對話要顯示的人物頭像
 * @desc 指定對話要顯示的人物頭像
 *
 * @arg actorId
 * 		@text 顯示人物頭像的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @command cleanMessageFace
 * @text 清除對話要顯示的人物頭像
 * @desc 清除對話要顯示的人物頭像
 *
 * @command setupActorPicture
 * @text 顯示角色圖片
 * @desc 顯示角色圖片
 *
 * @arg pictureId
 * 		@text 圖片ID
 *      @desc 圖片ID
 * 		@type number
 *      @default
 *
 * @arg actorId
 * 		@text 角色ID
 *      @desc 角色ID
 *      @type actor
 *      @default
 *
 * @arg origin
 * 		@text 原點
 *      @desc 原點
 * 		@type select
 * 	  		@default 0
 * 	  		@option 左上
 * 	  		@value 0
 * 	  		@option 中央
 * 	  		@value 1
 *
 * @arg x
 * 		@text X軸
 *      @desc X軸
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg y
 * 		@text Y軸
 *      @desc Y軸
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg scaleX
 * 		@text X軸縮放比
 *      @desc X軸縮放比
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg scaleY
 * 		@text Y軸縮放比
 *      @desc Y軸縮放比
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg opacity
 * 		@text 不透明度
 *      @desc 不透明度
 * 		@type number
 *		@max 255
 *		@min 0
 * 	  	@default 255
 *
 * @arg blendMode
 * 		@text 合成方式
 *      @desc 合成方式
 * 		@type select
 * 	  		@default 0
 * 	  		@option 標準
 * 	  		@value 0
 * 	  		@option 添加
 * 	  		@value 1
 * 	  		@option 乘
 * 	  		@value 2
 * 	  		@option 畫面
 * 	  		@value 3
 *
 * @command generatorB64
 * @text 重新製作指定區塊的B64
 * @desc 重新製作指定區塊的B64
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg mode
 * 		@text 模式
 * 		@desc 模式
 * 		@type select
 * 		@default PIC
 * 		@option 立繪
 * 		@value PIC
 * 		@option 頭像
 * 		@value FG
 * 		@option 站立行走模式
 * 		@value TV
 * 		@option 倒地模式
 * 		@value TVD
 * 		@option 側面視角
 * 		@value SV
 *
 * @arg timeoutNum
 * 		@text 延遲時間(毫秒)
 *      @desc 延遲時間(毫秒)
 * 		@type number
 *      @min 0
 * 	  	@default 50
 *
 * @command changeActorSyncObject
 * @text 修改角色定義裝備判定同步對象
 * @desc 修改角色定義裝備判定同步對象
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg syncActorId
 * 		@text 要同步的角色ID
 *      @desc 
 *      @type actor
 *      @default 0
 *
 * @command changeActorPartColor
 * @text 修改角色定義區塊顏色
 * @desc 修改角色定義區塊顏色
 *
 * @arg actorId
 * 		@text 要改變的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg cd
 * 		@text 部件CD
 * 		@desc 部件CD
 * 		@type text
 *
 * @arg orgColor
 * 		@text 素材原本的顏色
 * 		@desc 素材原本的顏色
 * 		@type select
 * 		@default white
 * 		@option 白色
 * 		@value white
 * 		@option 灰色
 * 		@value gray
 * 		@option 黑色
 * 		@value black
 * 		@option 金色
 * 		@value gold
 * 		@option 銀色
 * 		@value silver
 * 		@option 銅色
 * 		@value copper
 * 		@option 紅色
 * 		@value red
 * 		@option 蘋果糖紅
 * 		@value candyApple
 * 		@option 栗色
 * 		@value maroon
 * 		@option 褐色
 * 		@value redPurple
 *		@option 暗紅棕色
 * 		@value darkReddishbrown
 * 		@option 紅棕色
 * 		@value reddishbrown
 * 		@option 暗紅色
 * 		@value darkRed
 * 		@option 膚色
 * 		@value skin
 * 		@option 珊瑚色
 * 		@value coral
 * 		@option 粉紅色
 * 		@value pink
 * 		@option 海棠紅
 * 		@value begoniaRed
 * 		@option 洋紅色
 * 		@value magenta
 * 		@option 黄色
 * 		@value yellow
 * 		@option 中黄色
 * 		@value midYellow
 * 		@option 土黄色
 * 		@value ochre
 * 		@option 亮橘色
 * 		@value lightOrange
 * 		@option 橘色
 * 		@value orange
 * 		@option 暗黃綠色
 * 		@value darkYellowGreen
 * 		@option 橄欖色
 * 		@value olive
 * 		@option 青檸檬色
 * 		@value lime
 * 		@option 春綠色
 * 		@value springGreen
 * 		@option 綠色
 * 		@value green
 * 		@option 波斯綠
 * 		@value persianGreen
 * 		@option 深綠色
 * 		@value deepGreen
 * 		@option 綠松色
 * 		@value turquoise
 * 		@option 水色的
 * 		@value aqua
 * 		@option 天空藍
 * 		@value skyBlue
 * 		@option 水鴨色
 * 		@value teal
 * 		@option 奧林匹斯藍
 * 		@value olympicBlue
 * 		@option 藍色
 * 		@value blue
 * 		@option 群青色
 * 		@value ultramarineBlue
 * 		@option 深藍色
 * 		@value navyBlue
 * 		@option 葡萄藍
 * 		@value grape
 * 		@option 紫紅色
 * 		@value fuchsia
 * 		@option 紫色
 * 		@value purple
 * 		@option 紫晶色
 * 		@value amethyst
 * 		@option 深紫色
 * 		@value darkPurple
 *
 * @arg newColor
 * 		@text 要轉換的的顏色
 * 		@desc 要轉換的的顏色
 * 		@type select
 * 		@default none
 * 		@option 不轉色
 * 		@value none
 * 		@option 白色
 * 		@value white
 * 		@option 灰色
 * 		@value gray
 * 		@option 黑色
 * 		@value black
 * 		@option 金色
 * 		@value gold
 * 		@option 銀色
 * 		@value silver
 * 		@option 銅色
 * 		@value copper
 * 		@option 紅色
 * 		@value red
 * 		@option 蘋果糖紅
 * 		@value candyApple
 * 		@option 栗色
 * 		@value maroon
 * 		@option 褐色
 * 		@value redPurple
 * 		@option 暗紅棕色
 * 		@value darkReddishbrown
 * 		@option 紅棕色
 * 		@value reddishbrown
 * 		@option 暗紅色
 * 		@value darkRed
 * 		@option 膚色
 * 		@value skin
 * 		@option 珊瑚色
 * 		@value coral
 * 		@option 粉紅色
 * 		@value pink
 * 		@option 海棠紅
 * 		@value begoniaRed
 * 		@option 洋紅色
 * 		@value magenta
 * 		@option 黄色
 * 		@value yellow
 * 		@option 中黄色
 * 		@value midYellow
 * 		@option 土黄色
 * 		@value ochre
 * 		@option 亮橘色
 * 		@value lightOrange
 * 		@option 橘色
 * 		@value orange
 * 		@option 暗黃綠色
 * 		@value darkYellowGreen
 * 		@option 橄欖色
 * 		@value olive
 * 		@option 青檸檬色
 * 		@value lime
 * 		@option 春綠色
 * 		@value springGreen
 * 		@option 綠色
 * 		@value green
 * 		@option 波斯綠
 * 		@value persianGreen
 * 		@option 深綠色
 * 		@value deepGreen
 * 		@option 綠松色
 * 		@value turquoise
 * 		@option 水色的
 * 		@value aqua
 * 		@option 天空藍
 * 		@value skyBlue
 * 		@option 水鴨色
 * 		@value teal
 * 		@option 奧林匹斯藍
 * 		@value olympicBlue
 * 		@option 藍色
 * 		@value blue
 * 		@option 群青色
 * 		@value ultramarineBlue
 * 		@option 深藍色
 * 		@value navyBlue
 * 		@option 葡萄藍
 * 		@value grape
 * 		@option 紫紅色
 * 		@value fuchsia
 * 		@option 紫色
 * 		@value purple
 * 		@option 紫晶色
 * 		@value amethyst
 * 		@option 深紫色
 * 		@value darkPurple
 */
 
/*:zh_CN
 * @target MZ
 * @plugindesc SunMZ 角色生成器延伸应用插件。
 * @author Sun Min Chiech
 * @base PluginCommonBase.js
 * @orderAfter PluginCommonBase.js
 * @help Sun_0_GeneratorEx.js [version 2.8.2]
 * 该插件需要官方插件 PluginCommonBase.js
 *
 * 功能一:
 * 能够自由编辑自身人物部件，
 * 该插件能够自由编辑人物的区块组成，并调整迭放顺序，
 * 然后可以指定装备，通用参数，针对每一个角色指定替换设定。
 * 每个人物可以配置:
 * 一组图片,一个侧面视角图片,一个头像图片,一个站立图片,一个倒地图片
 * 部件的配置是完全自定义的。
 *
 * 功能二:
 * 在非战斗模式调用侧面视角的图片作为剧情动作使用，
 * 该功能可以针对有设置SV图的角色直接调用，可以作用于角色或是事件。
 * 将指令打在事件里第一行的注译里。
 * EX:<substitute:1:tv>
 * EX:<substitute:1:tvd>
 * EX:<substitute:1:sv:thrust:Y>
 * <substitute:[Acter ID]:[mode(tv|tvd|sv)]:[svMotion]:[horizontal flip(Y|N)]>
 * svMotion:thrust|swing|missile|walk|dead|sleep|spell|chant|guard|abnormal|dying|wait|skill|item|damage|evade|victory|escape
 *
 * 需要新建文件夹(因为档案过多设定时会导致MZ当掉，将数据分开放)
 * 在\img\generator_PIC\底下放置纸娃娃PIC相关档案
 * 在\img\generator_FG\底下放置纸娃娃TV相关档案
 * 在\img\generator_TV\底下放置纸娃娃TV相关档案
 * 在\img\generator_SV\底下放置纸娃娃SV相关档案
 *
 * 注意一点 设置过多的部件会导致MZ当掉，所以尽量简化设置的内容为佳，
 * 范本是为了让大家知道设置的区块应该摆在何处所以才设置如此多的区块，
 * 其实不需要设置这么多区块。
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
 * @param IsSaveSync
 * @text 是否与存档同步
 * @desc 人物的装备配置会反应在存盘上
 * @on 是
 * @off 否
 * @type boolean
 * @default true
 *
 * @param FaceTimeoutNum
 * @text 脸部图案延迟时间
 * @desc 设定脸部图案延迟时间(毫秒)
 * @type number
 * @default 50
 *
 * @param SvScalingWidth
 * @text SV图缩放比例(宽)
 * @desc SV图在非战斗地图的缩放比例(宽)
 * @type text
 * @default 0.75
 *
 * @param SvScalingHeight
 * @text SV图缩放比例(高)
 * @desc SV图在非战斗地图的缩放比例(高)
 * @type text
 * @default 0.75
 *
 * @command switchFgGenerator
 * @text 选择是否开启FG纸娃娃
 * @desc 选择是否开启FG纸娃娃
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command switchTvGenerator
 * @text 选择是否开启TV纸娃娃
 * @desc 选择是否开启TV纸娃娃
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command switchSvGenerator
 * @text 选择是否开启SV纸娃娃
 * @desc 选择是否开启SV纸娃娃
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg isOpen
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command checkSubstitute
 * @text 指定事件强制刷新替身
 * @desc 指定事件强制刷新替身
 *
 * @arg eventId
 * 		@text 要刷新的事件ID
 *      @desc 
 *      @type number
 *      @default 0
 *
 * @command checkGenerator
 * @text 指定角色强制刷新纸娃娃
 * @desc 指定角色强制刷新纸娃娃
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @command setTvMode
 * @text 切换角色TV显示模式
 * @desc 切换角色TV显示模式
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg mode
 * @text TV显示模式
 * @desc TV显示模式
 * @type select
 * @default tv
 * @option 站立行走模式
 * @value tv
 * @option 受伤倒地模式
 * @value tvd
 * @option 侧面视角
 * @value sv
 *
 * @arg svMotion
 * @text 侧面视角动作
 * @desc 侧面视角动作
 * @type select
 * 	  @default none
 * 	  @option 原默认值
 * 	  @value none
 * 	  @option 突刺
 * 	  @value thrust
 * 	  @option 挥砍
 * 	  @value swing
 * 	  @option 射击
 * 	  @value missile
 * 	  @option 走动
 * 	  @value walk
 * 	  @option 死亡
 * 	  @value dead
 *    @option 睡眠
 * 	  @value sleep
 * 	  @option 咏唱1
 *    @value spell
 *    @option 咏唱(loop)
 *    @value chant
 *    @option 防御
 *    @value guard
 *    @option 异常
 *    @value abnormal
 *    @option 垂死
 *    @value dying
 *    @option 等待
 *    @value wait
 *    @option 技能
 *    @value skill
 *    @option 道具
 *    @value item
 *    @option 损伤
 *    @value damage
 *    @option 闪避
 *    @value evade
 *    @option 胜利
 *    @value victory
 *    @option 逃脱
 *    @value escape 
 *
 * @arg isHorizontalFlip
 * @text 是否水平翻转
 * @desc 是否水平翻转
 * 		@on 是
 * 		@off 否
 *      @type boolean
 *      @default false
 *
 * @command setMessageFace
 * @text 指定对话要显示的人物头像
 * @desc 指定对话要显示的人物头像
 *
 * @arg actorId
 * 		@text 显示人物头像的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @command cleanMessageFace
 * @text 清除对话要显示的人物头像
 * @desc 清除对话要显示的人物头像
 *
 * @command setupActorPicture
 * @text 显示角色图片
 * @desc 显示角色图片
 *
 * @arg pictureId
 * 		@text 图片ID
 *      @desc 图片ID
 * 		@type number
 *      @default
 *
 * @arg actorId
 * 		@text 角色ID
 *      @desc 角色ID
 *      @type actor
 *      @default
 *
 * @arg origin
 * 		@text 原点
 *      @desc 原点
 * 		@type select
 * 	  		@default 0
 * 	  		@option 左上
 * 	  		@value 0
 * 	  		@option 中央
 * 	  		@value 1
 *
 * @arg x
 * 		@text X轴
 *      @desc X轴
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg y
 * 		@text Y轴
 *      @desc Y轴
 * 		@type number
 *      @min -9999
 * 	  	@default 0
 *
 * @arg scaleX
 * 		@text X轴缩放比
 *      @desc X轴缩放比
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg scaleY
 * 		@text Y轴缩放比
 *      @desc Y轴缩放比
 * 		@type number
 *      @min -1000
 * 	  	@default 100
 *
 * @arg opacity
 * 		@text 不透明度
 *      @desc 不透明度
 * 		@type number
 *		@max 255
 *		@min 0
 * 	  	@default 255
 *
 * @arg blendMode
 * 		@text 合成方式
 *      @desc 合成方式
 * 		@type select
 * 	  		@default 0
 * 	  		@option 标准
 * 	  		@value 0
 * 	  		@option 添加
 * 	  		@value 1
 * 	  		@option 乘
 * 	  		@value 2
 * 	  		@option 画面
 * 	  		@value 3
 *
 * @command generatorB64
 * @text 重新制作指定区块的B64
 * @desc 重新制作指定区块的B64
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg mode
 * 		@text 模式
 * 		@desc 模式
 * 		@type select
 * 		@default PIC
 * 		@option 立绘
 * 		@value PIC
 * 		@option 头像
 * 		@value FG
 * 		@option 站立行走模式
 * 		@value TV
 * 		@option 倒地模式
 * 		@value TVD
 * 		@option 侧面视角
 * 		@value SV
 *
 * @arg timeoutNum
 * 		@text 延迟时间(毫秒)
 *      @desc 延迟时间(毫秒)
 * 		@type number
 *      @min 0
 * 	  	@default 50
 *
 * @command changeActorSyncObject
 * @text 修改角色定义装备判定同步对象
 * @desc 修改角色定义装备判定同步对象
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg syncActorId
 * 		@text 要同步的角色ID
 *      @desc 
 *      @type actor
 *      @default 0
 *
 * @command changeActorPartColor
 * @text 修改角色定义区块颜色
 * @desc 修改角色定义区块颜色
 *
 * @arg actorId
 * 		@text 要改变的角色ID
 *      @desc 
 *      @type actor
 *      @default
 *
 * @arg cd
 * 		@text 部件CD
 * 		@desc 部件CD
 * 		@type text
 *
 * @arg orgColor
 * 		@text 素材原本的颜色
 * 		@desc 素材原本的颜色
 * 		@type select
 * 		@default white
 * 		@option 白色
 * 		@value white
 * 		@option 灰色
 * 		@value gray
 * 		@option 黑色
 * 		@value black
 * 		@option 金色
 * 		@value gold
 * 		@option 银色
 * 		@value silver
 * 		@option 铜色
 * 		@value copper
 * 		@option 红色
 * 		@value red
 * 		@option 苹果糖红
 * 		@value candyApple
 * 		@option 栗色
 * 		@value maroon
 * 		@option 褐色
 * 		@value redPurple
 *		@option 暗红棕色
 * 		@value darkReddishbrown
 * 		@option 红棕色
 * 		@value reddishbrown
 * 		@option 暗红色
 * 		@value darkRed
 * 		@option 肤色
 * 		@value skin
 * 		@option 珊瑚色
 * 		@value coral
 * 		@option 粉红色
 * 		@value pink
 * 		@option 海棠红
 * 		@value begoniaRed
 * 		@option 洋红色
 * 		@value magenta
 * 		@option 黄色
 * 		@value yellow
 * 		@option 中黄色
 * 		@value midYellow
 * 		@option 土黄色
 * 		@value ochre
 * 		@option 亮橘色
 * 		@value lightOrange
 * 		@option 橘色
 * 		@value orange
 * 		@option 暗黄绿色
 * 		@value darkYellowGreen
 * 		@option 橄榄色
 * 		@value olive
 * 		@option 青柠檬色
 * 		@value lime
 * 		@option 春绿色
 * 		@value springGreen
 * 		@option 绿色
 * 		@value green
 * 		@option 波斯绿
 * 		@value persianGreen
 * 		@option 深绿色
 * 		@value deepGreen
 * 		@option 绿松色
 * 		@value turquoise
 * 		@option 水色的
 * 		@value aqua
 * 		@option 天空蓝
 * 		@value skyBlue
 * 		@option 水鸭色
 * 		@value teal
 * 		@option 奥林匹斯蓝
 * 		@value olympicBlue
 * 		@option 蓝色
 * 		@value blue
 * 		@option 群青色
 * 		@value ultramarineBlue
 * 		@option 深蓝色
 * 		@value navyBlue
 * 		@option 葡萄蓝
 * 		@value grape
 * 		@option 紫红色
 * 		@value fuchsia
 * 		@option 紫色
 * 		@value purple
 * 		@option 紫晶色
 * 		@value amethyst
 * 		@option 深紫色
 * 		@value darkPurple
 *
 * @arg newColor
 * 		@text 要转换的的颜色
 * 		@desc 要转换的的颜色
 * 		@type select
 * 		@default none
 * 		@option 不转色
 * 		@value none
 * 		@option 白色
 * 		@value white
 * 		@option 灰色
 * 		@value gray
 * 		@option 黑色
 * 		@value black
 * 		@option 金色
 * 		@value gold
 * 		@option 银色
 * 		@value silver
 * 		@option 铜色
 * 		@value copper
 * 		@option 红色
 * 		@value red
 * 		@option 苹果糖红
 * 		@value candyApple
 * 		@option 栗色
 * 		@value maroon
 * 		@option 褐色
 * 		@value redPurple
 * 		@option 暗红棕色
 * 		@value darkReddishbrown
 * 		@option 红棕色
 * 		@value reddishbrown
 * 		@option 暗红色
 * 		@value darkRed
 * 		@option 肤色
 * 		@value skin
 * 		@option 珊瑚色
 * 		@value coral
 * 		@option 粉红色
 * 		@value pink
 * 		@option 海棠红
 * 		@value begoniaRed
 * 		@option 洋红色
 * 		@value magenta
 * 		@option 黄色
 * 		@value yellow
 * 		@option 中黄色
 * 		@value midYellow
 * 		@option 土黄色
 * 		@value ochre
 * 		@option 亮橘色
 * 		@value lightOrange
 * 		@option 橘色
 * 		@value orange
 * 		@option 暗黄绿色
 * 		@value darkYellowGreen
 * 		@option 橄榄色
 * 		@value olive
 * 		@option 青柠檬色
 * 		@value lime
 * 		@option 春绿色
 * 		@value springGreen
 * 		@option 绿色
 * 		@value green
 * 		@option 波斯绿
 * 		@value persianGreen
 * 		@option 深绿色
 * 		@value deepGreen
 * 		@option 绿松色
 * 		@value turquoise
 * 		@option 水色的
 * 		@value aqua
 * 		@option 天空蓝
 * 		@value skyBlue
 * 		@option 水鸭色
 * 		@value teal
 * 		@option 奥林匹斯蓝
 * 		@value olympicBlue
 * 		@option 蓝色
 * 		@value blue
 * 		@option 群青色
 * 		@value ultramarineBlue
 * 		@option 深蓝色
 * 		@value navyBlue
 * 		@option 葡萄蓝
 * 		@value grape
 * 		@option 紫红色
 * 		@value fuchsia
 * 		@option 紫色
 * 		@value purple
 * 		@option 紫晶色
 * 		@value amethyst
 * 		@option 深紫色
 * 		@value darkPurple
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
 * @desc Yes に設定すると、このブロックの色設定はキャラクターによって設定された色に基づきます。
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
 * @desc 如果設置為是，該區塊顏色設定會依照角色設定的顏色為基準。
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
 * @desc 如果设置为是，该区块颜色设定会依照角色设定的颜色为基准。
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
Imported.SunMZ_GeneratorEx = true;
var SunMZ = SunMZ || {};
SunMZ.Versions = SunMZ.Versions || {};
SunMZ.Versions["Sun_0_GeneratorEx"] = "2.8.1";
SunMZ.GeneratorEx = SunMZ.GeneratorEx || {};
SunMZ.GeneratorEx.parameters = PluginManagerEx.createParameter(document.currentScript);
SunMZ.GeneratorEx.ActorDataExList = (SunMZ.GeneratorEx.parameters.ActorDataList || []);
SunMZ.GeneratorEx.WeaponDataExList = (SunMZ.GeneratorEx.parameters.WeaponDataList || []);
SunMZ.GeneratorEx.ArmorDataExList = (SunMZ.GeneratorEx.parameters.ArmorDataList || []);
SunMZ.GeneratorEx.VariableDataExList = (SunMZ.GeneratorEx.parameters.VarDataList || []);
SunMZ.GeneratorEx.IsSaveSync = (SunMZ.GeneratorEx.parameters.IsSaveSync);
SunMZ.GeneratorEx.FaceTimeoutNum = Number(SunMZ.GeneratorEx.parameters.FaceTimeoutNum) || 50;
SunMZ.GeneratorEx.SvScalingWidth = Number(SunMZ.GeneratorEx.parameters.SvScalingWidth) || 0.75;
SunMZ.GeneratorEx.SvScalingHeight = Number(SunMZ.GeneratorEx.parameters.SvScalingHeight) || 0.75;

if (Imported.SunMZ_GeneratorExSetting) {
	SunMZ.GeneratorEx.ActorDataExList = SunMZ.GeneratorEx.ActorDataExList.concat(SunMZ.GeneratorExSetting.ActorDataExList);
	SunMZ.GeneratorEx.WeaponDataExList = SunMZ.GeneratorEx.WeaponDataExList.concat(SunMZ.GeneratorExSetting.WeaponDataExList);
	SunMZ.GeneratorEx.ArmorDataExList = SunMZ.GeneratorEx.ArmorDataExList.concat(SunMZ.GeneratorExSetting.ArmorDataExList);
	SunMZ.GeneratorEx.VariableDataExList = SunMZ.GeneratorEx.VariableDataExList.concat(SunMZ.GeneratorExSetting.VariableDataExList);
}

ImageManager.loadGeneratorPic = function(filename, newColor, originalColor) {
	return this.loadGeneratorBitmap("img/generator_PIC/", filename, newColor, originalColor);
};

ImageManager.loadGeneratorFg = function(filename, newColor, originalColor) {
	return this.loadGeneratorBitmap("img/generator_FG/", filename, newColor, originalColor);
};

ImageManager.loadGeneratorTv = function(filename, newColor, originalColor) {
	return this.loadGeneratorBitmap("img/generator_TV/", filename, newColor, originalColor);
};

ImageManager.loadGeneratorSv = function(filename, newColor, originalColor) {
	return this.loadGeneratorBitmap("img/generator_SV/", filename, newColor, originalColor);
};

ImageManager.loadGeneratorBitmap = function(folder, filename, newColor, originalColor) {
    if (filename) {
        const url = folder + Utils.encodeURI(filename) + ".png";
        return this.loadGeneratorBitmapFromUrl(url, newColor, originalColor);
    } else {
        return this._emptyBitmap;
    }
};

ImageManager.loadBase64 = function(url) {
    const cache = this._cache;
    if (!cache[url]) {
        cache[url] = SunMZ_Bitmap.load(url);
    }
    return cache[url];
};

ImageManager.loadGeneratorBitmapFromUrl = function(url, newColor, originalColor) {
    const cache = url.includes("/system/") ? this._system : this._cache;
    if (!cache[url + "|" + newColor + "|" + originalColor]) {
        cache[url + "|" + newColor + "|" + originalColor] = Bitmap.load(url);
    }
    return cache[url + "|" + newColor + "|" + originalColor];
};

ImageManager.clearCacheByUrl = function(url) {
    const cache = this._cache;
	if (cache[url]) {
		cache[url].destroy();
	}
};

if (!Imported.SunMZ_Core) {
	function SunMZ_Core_Utils() {
		throw new Error("This is a static class");
	}

	SunMZ_Core_Utils.isNotBlank = (obj) => {
		return (typeof obj !== "undefined" && !(typeof obj == "number" && isNaN(obj)) && obj !== null && obj !== "");
	};

	SunMZ_Core_Utils.isArrayNotEmpty = (dataList) => {
		return (dataList && dataList.length > 0);
	};

	SunMZ_Core_Utils.findDataById = (list, id) => {
		let item = list.find(item => item.id == id);
		if (item && SunMZ_Core_Utils.isNotBlank(item)) {
			return item;
		}
		return false;
	};

	SunMZ_Core_Utils.findDataByCode = (list, code) => {
		let item = list.find(item => item.code == code);
		if (item && SunMZ_Core_Utils.isNotBlank(item)) {
			return item;
		}
		return false;
	};

}

function ColorUtils() {
	throw new Error("This is a static class");
};

ColorUtils.getColorRgb = function(colorCode) {
	let colorPalette = {
		white: {//白色
			r: 255,
			g: 255,
			b: 255
		},
		gray: {//灰色
			r: 128,
			g: 128,
			b: 128
		},
		black: {//黑色
			r: 0,
			g: 0,
			b: 0
		},
		gold: {//金色
			r: 233,
			g: 187,
			b: 52
		},
		silver: {//銀色
			r: 192,
			g: 192,
			b: 192
		},
		copper: {//銅色
			r: 136,
			g: 93,
			b: 86
		},
		red: {//紅色
			r: 255,
			g: 0,
			b: 0
		},
		candyApple: {//蘋果糖紅
			r: 230,
			g: 15,
			b: 20
		},
		maroon: {//栗色
			r: 160,
			g: 25,
			b: 25
		},
		redPurple: {//褐色
			r: 128,
			g: 0,
			b: 0
		},
		darkReddishbrown: {//深紅棕色
			r: 130,
			g: 60,
			b: 60
		},
		reddishbrown: {//紅棕色
			r: 180,
			g: 100,
			b: 100
		},
		darkRed: {//暗紅色
			r: 180,
			g: 0,
			b: 50
		},
		skin: {//膚色
			r: 217,
			g: 163,
			b: 139
		},
		coral: {//珊瑚色
			r: 205,
			g: 110,
			b: 110
		},
		pink: {//粉紅色
			r: 250,
			g: 20,
			b: 120
		},
		begoniaRed: {//海棠紅
			r: 220,
			g: 90,
			b: 110
		},
		magenta: {//洋紅色
			r: 200,
			g: 100,
			b: 150
		},
		yellow: {//黄色
			r: 255,
			g: 255,
			b: 0
		},
		midYellow: {//中黄色
			r: 255,
			g: 200,
			b: 20
		},
		ochre: {//土黄色
			r: 200,
			g: 140,
			b: 30
		},
		lightOrange: {//亮橘色
			r: 250,
			g: 170,
			b: 20
		},
		orange: {//橘色
			r: 250,
			g: 100,
			b: 15
		},
		darkYellowGreen: {//暗黃綠色
			r: 128,
			g: 128,
			b: 0
		},
		olive: {//橄欖色
			r: 107,
			g: 157,
			b: 58
		},
		lime: {//青檸檬色
			r: 0,
			g: 255,
			b: 0
		},
		springGreen: {//春綠色
			r: 70,
			g: 195,
			b: 10
		},
		green: {//綠色
			r: 0,
			g: 128,
			b: 0
		},
		persianGreen: {//波斯綠
			r: 85,
			g: 152,
			b: 101
		},
		deepGreen: {//深綠色
			r: 50,
			g: 100,
			b: 50
		},
		turquoise: {//綠松色
			r: 28,
			g: 224,
			b: 210
		},
		aqua: {//水色的
			r: 0,
			g: 255,
			b: 255
		},
		skyBlue: {//天空藍
			r: 40,
			g: 178,
			b: 235
		},
		teal: {//水鴨色
			r: 0,
			g: 128,
			b: 128
		},
		olympicBlue: {//奧林匹斯藍
			r: 63,
			g: 130,
			b: 172
		},
		blue: {//藍色
			r: 0,
			g: 0,
			b: 255
		},
		ultramarineBlue: {//群青色
			r: 15,
			g: 65,
			b: 190
		},
		navyBlue: {//深藍色
			r: 10,
			g: 15,
			b: 185
		},
		grape: {//葡萄藍
			r: 50,
			g: 50,
			b: 175
		},
		fuchsia: {//紫紅色
			r: 255,
			g: 0,
			b: 255
		},
		purple: {//紫色
			r: 128,
			g: 0,
			b: 128
		},
		amethyst: {//紫晶色
			r: 140,
			g: 25,
			b: 155
		},
		darkPurple: {//深紫色
			r: 85,
			g: 25,
			b: 165
		}
	};
	return colorPalette[colorCode];
};

//***********************************************
//畫布Utils擴充
//***********************************************
	
function CanvasUtils() {
	throw new Error("This is a static class");
}

//變色
CanvasUtils.putImageRGB = function(bitmap, r, g, b, width, height, isOriginalColorBlack) {
	if (bitmap._image) {
		let canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		canvas.getContext("2d").drawImage(bitmap._image, 0, 0, width, height);
		let ctx = canvas.getContext("2d");
		let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		let px = imageData.data;
		if (!bitmap._colorBak) {
			bitmap._colorBak = [];
			for (let i = 0; i < px.length; i++) {
				bitmap._colorBak.push(px[i]);
			}
		}

		for (let i = 0; i < px.length; i+=4) {
			//粗線條不變色
			if (isOriginalColorBlack) {
				px[i] = bitmap._colorBak[i] + r;
				px[i+1] = bitmap._colorBak[i+1] + g;
				px[i+2] = bitmap._colorBak[i+2] + b;
			} else if ((bitmap._colorBak[i] + bitmap._colorBak[i+1] + bitmap._colorBak[i+2]) > 100) {
				if (!(bitmap._colorBak[i] < 50 && bitmap._colorBak[i+1] < 50 && bitmap._colorBak[i+2] < 50)) {
					px[i] = bitmap._colorBak[i] + r;
					px[i+1] = bitmap._colorBak[i+1] + g;
					px[i+2] = bitmap._colorBak[i+2] + b;
				} else {
					let average = (bitmap._colorBak[i] + bitmap._colorBak[i+1] + bitmap._colorBak[i+2]) / 3;
					let r = ((average - bitmap._colorBak[i]) <= 10 || (average - bitmap._colorBak[i]) >= 10);
					let g = ((average - bitmap._colorBak[i+1]) <= 10 || (average - bitmap._colorBak[i+1]) >= 10);
					let b = ((average - bitmap._colorBak[i+2]) <= 10 || (average - bitmap._colorBak[i+2]) >= 10);
					if (r || g || b) {
						px[i] = bitmap._colorBak[i] + r;
						px[i+1] = bitmap._colorBak[i+1] + g;
						px[i+2] = bitmap._colorBak[i+2] + b;
					}
				}
			}
		}
		ctx.putImageData(imageData, 0, 0);
		bitmap._canvas = canvas;
		//bitmap._image.src = canvas.toDataURL("image/png");
		//bitmap._url = canvas.toDataURL("image/png");
	}
	
	return bitmap;
};

//針對Base64處理的Bitmap元件(原生元件有針對加密的特規處理)

function SunMZ_Bitmap() {
    this.initialize(...arguments);
}

SunMZ_Bitmap.prototype = Object.create(Bitmap.prototype);
SunMZ_Bitmap.prototype.constructor = SunMZ_Bitmap;

SunMZ_Bitmap.load = function(url) {
    const bitmap = Object.create(SunMZ_Bitmap.prototype);
    bitmap.initialize();
    bitmap._url = url;
    bitmap._startLoading();
    return bitmap;
};

SunMZ_Bitmap.snap = function(stage) {
    const width = Graphics.width;
    const height = Graphics.height;
    const bitmap = new Bitmap(width, height);
    const renderTexture = PIXI.RenderTexture.create(width, height);
    if (stage) {
        const renderer = Graphics.app.renderer;
        renderer.render(stage, renderTexture);
        stage.worldTransform.identity();
        const canvas = renderer.extract.canvas(renderTexture);
        bitmap.context.drawImage(canvas, 0, 0);
        canvas.width = 0;
        canvas.height = 0;
    }
    renderTexture.destroy({ destroyBase: true });
    bitmap.baseTexture.update();
    return bitmap;
};

//覆蓋
SunMZ_Bitmap.prototype._startLoading = function() {
	this._image = new Image();
	this._image.onload = this._onLoad.bind(this);
	this._image.onerror = this._onError.bind(this);
	this._destroyCanvas();
	this._loadingState = "loading";
	this._image.src = this._url;
	if (this._image.width > 0) {
		this._image.onload = null;
		this._onLoad();
	}
};

function SunMZ_GeneratorEx() {
	throw new Error("This is a static class");
}

//角色設定擴充
SunMZ_GeneratorEx.processActorParameterEx = function() {
	for (var i = 1; i < $dataActors.length; i++) {
		let actor = $dataActors[i];
		actor._equipSync = 0;
		actor._picCanvasWidth = 500;
		actor._picCanvasHeight = 500;
		actor._generatorPicList = [];
		actor.isUseGeneratorFG = false;
		actor._fgCanvasWidth = 144;
		actor._fgCanvasHeight = 144;
		actor._generatorFgList = [];
		actor.isUseGeneratorTV = false;
		actor._tvCanvasWidth = 144;
		actor._tvCanvasHeight = 192;
		actor._generatorTvList = [];
		actor._generatorTvdList = [];
		actor.isUseGeneratorSV = false;
		actor._svCanvasWidth = 576;
		actor._svCanvasHeight = 384;
		actor._generatorSvList = [];
		let actorData = SunMZ_Core_Utils.findDataById(SunMZ.GeneratorEx.ActorDataExList, i);
		if (actorData) {
			actor.isUseGeneratorFG = actorData.IsUseGeneratorFG;
			actor.isUseGeneratorTV = actorData.IsUseGeneratorTV;
			actor.isUseGeneratorSV = actorData.IsUseGeneratorSV;
			actor._equipSync = actorData.equipSync || 0;
			actor._picCanvasWidth = Number(actorData.picWidth) || 500;
			actor._picCanvasHeight = Number(actorData.picHeight) || 500;
			actor._fgCanvasWidth = Number(actorData.fgWidth) || 144;
			actor._fgCanvasHeight = Number(actorData.fgHeight) || 144;
			actor._tvCanvasWidth = Number(actorData.tvWidth) || 144;
			actor._tvCanvasHeight = Number(actorData.tvHeight) || 192;
			actor._svCanvasWidth = Number(actorData.svWidth) || 576;
			actor._svCanvasHeight = Number(actorData.svHeight) || 384;
			actor._generatorPicList = actorData.genPicList || [];
			actor._generatorFgList = actorData.genFgList || [];
			actor._generatorTvList = actorData.genTvList || [];
			actor._generatorTvdList = actorData.genTvdList || [];
			actor._generatorSvList = actorData.genSvList || [];
		}
	}
};

//防具設定擴充
SunMZ_GeneratorEx.processEquipParameterEx = function() {
	for (var i = 1; i < $dataWeapons.length; i++) {
		let weapon = $dataWeapons[i];
		weapon._actorListWeaponDataList = [];
		weapon._actorWeaponDataList = [];
		let weaponData = SunMZ_Core_Utils.findDataById(SunMZ.GeneratorEx.WeaponDataExList, i);
		if (weaponData) {
			weapon._actorListWeaponDataList = weaponData.actorListWeaponDataList || [];
			weapon._actorWeaponDataList = weaponData.actorWeaponDataList || [];
		}
	}
	
	for (var i = 1; i < $dataArmors.length; i++) {
		let armor = $dataArmors[i];
		armor._actorListArmorDataList = [];
		armor._actorArmorDataList = [];
		let armorData = SunMZ_Core_Utils.findDataById(SunMZ.GeneratorEx.ArmorDataExList, i);
		if (armorData) {
			armor._actorListArmorDataList = armorData.actorListArmorDataList || [];
			armor._actorArmorDataList = armorData.actorArmorDataList || [];
		}
	}
};

//合併圖片
SunMZ_GeneratorEx.bitmapMerge = function(bitmap, bitmapList, configList, dw, dh) {
	for (var i = 0; i < bitmapList.length; i++) {
		if (configList[i]._fix) {
			bitmap.blt(bitmapList[i], configList[i]._fix_canvasX, configList[i]._fix_canvasY, dw, dh, 0, 0);
		} else {
			bitmap.blt(bitmapList[i], configList[i].x, configList[i].y, dw, dh, 0, 0);
		}
	}
};

//確認圖片讀取狀況
SunMZ_GeneratorEx.isReady = function(bitmapList) {
	let isReady = true;
	for (var i = 0; i < bitmapList.length; i++) {
		if (!bitmapList[i].isReady()) {
			return false;
		}
	}
	return true;
};

SunMZ_GeneratorEx.findDataByPartType = (list, partType) => {
	let item = list.find(item => item.cd == partType);
	if (item && SunMZ_Core_Utils.isNotBlank(item)) {
		return item;
	}
	return false;
};

SunMZ_GeneratorEx.findDataByActorIdList = (list, actorId) => {
	let item = list.find(item => item.actorIdList.includes(actorId));
	if (item && SunMZ_Core_Utils.isNotBlank(item)) {
		return item;
	}
	return false;
};

SunMZ_GeneratorEx.findActorsBySyncActorId = (actorId) => {
	const allMembers = $gameParty.allMembers();
	if (actorId > 0) {
		return allMembers.filter(actor => actor._equipSync === actorId);
	}
	return [];
};

SunMZ_GeneratorEx.changeActorPartColor = function(generatorList, cd, orgColor, newColor) {
	for (let i = 0; i < generatorList.length; i++) {
		let generatorData = generatorList[i];
		if (generatorData.cd == cd) {
			generatorData.orgColor = orgColor;
			generatorData.newColor = newColor;
		}
	}
};

SunMZ_GeneratorEx.collectPartInfor = function(actor, type, mode, isArr, dataList, actorArmorDataFilter) {
	if (!SunMZ_Core_Utils.isArrayNotEmpty(dataList)) {
		return actorArmorDataFilter;
	}
	
	if ("variable" === type) {
		if (isArr) {
			let actorListVariableData = SunMZ_GeneratorEx.findDataByActorIdList(dataList, actor._actorId);
			if (!actorListVariableData) {
				return actorArmorDataFilter;
			}
			
			switch (mode) {
				case "PIC":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListVariableData.genPicList)) {
						actorArmorDataFilter.push(...actorListVariableData.genPicList);
					}
					break;
				case "FG":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListVariableData.genFgList)) {
						actorArmorDataFilter.push(...actorListVariableData.genFgList);
					}
					break;
				case "TV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListVariableData.genTvList)) {
						actorArmorDataFilter.push(...actorListVariableData.genTvList);
					}
					break;
				case "TVD":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListVariableData.genTvdList)) {
						actorArmorDataFilter.push(...actorListVariableData.genTvdList);
					}
					break;
				case "SV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListVariableData.genSvList)) {
						actorArmorDataFilter.push(...actorListVariableData.genSvList);
					}
					break;
			}
		} else {
			let actorVariableData = SunMZ_Core_Utils.findDataById(dataList, actor._actorId);
			if (!actorVariableData) {
				return actorArmorDataFilter;
			}
			
			switch (mode) {
				case "PIC":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorVariableData.genPicList)) {
						actorArmorDataFilter.push(...actorVariableData.genPicList);
					}
					break;
				case "FG":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorVariableData.genFgList)) {
						actorArmorDataFilter.push(...actorVariableData.genFgList);
					}
					break;
				case "TV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorVariableData.genTvList)) {
						actorArmorDataFilter.push(...actorVariableData.genTvList);
					}
					break;
				case "TVD":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorVariableData.genTvdList)) {
						actorArmorDataFilter.push(...actorVariableData.genTvdList);
					}
					break;
				case "SV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorVariableData.genSvList)) {
						actorArmorDataFilter.push(...actorVariableData.genSvList);
					}
					break;
			}
		}
	}
	
	if ("weapon" === type) {
		if (isArr) {
			let actorListWeaponData = SunMZ_GeneratorEx.findDataByActorIdList(dataList, actor._actorId);
			if (!actorListWeaponData) {
				return actorArmorDataFilter;
			}
			
			switch (mode) {
				case "PIC":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListWeaponData.genPicList)) {
						actorArmorDataFilter.push(...actorListWeaponData.genPicList);
					}
					break;
				case "FG":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListWeaponData.genFgList)) {
						actorArmorDataFilter.push(...actorListWeaponData.genFgList);
					}
					break;
				case "TV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListWeaponData.genTvList)) {
						actorArmorDataFilter.push(...actorListWeaponData.genTvList);
					}
					break;
				case "TVD":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListWeaponData.genTvdList)) {
						actorArmorDataFilter.push(...actorListWeaponData.genTvdList);
					}
					break;
				case "SV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListWeaponData.genSvList)) {
						actorArmorDataFilter.push(...actorListWeaponData.genSvList);
					}
					break;
			}
		} else {
			let actorWeaponData = SunMZ_Core_Utils.findDataById(dataList, actor._actorId);
			if (!actorWeaponData) {
				return actorArmorDataFilter;
			}
			
			switch (mode) {
				case "PIC":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorWeaponData.genPicList)) {
						actorArmorDataFilter.push(...actorWeaponData.genPicList);
					}
					break;
				case "FG":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorWeaponData.genFgList)) {
						actorArmorDataFilter.push(...actorWeaponData.genFgList);
					}
					break;
				case "TV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorWeaponData.genTvList)) {
						actorArmorDataFilter.push(...actorWeaponData.genTvList);
					}
					break;
				case "TVD":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorWeaponData.genTvdList)) {
						actorArmorDataFilter.push(...actorWeaponData.genTvdList);
					}
					break;
				case "SV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorWeaponData.genSvList)) {
						actorArmorDataFilter.push(...actorWeaponData.genSvList);
					}
					break;
			}
		}
	}
	
	if ("armor" === type) {
		if (isArr) {
			let actorListArmorData = SunMZ_GeneratorEx.findDataByActorIdList(dataList, actor._actorId);
			if (!actorListArmorData) {
				return actorArmorDataFilter;
			}
			
			switch (mode) {
				case "PIC":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListArmorData.genPicList)) {
						actorArmorDataFilter.push(...actorListArmorData.genPicList);
					}
					break;
				case "FG":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListArmorData.genFgList)) {
						actorArmorDataFilter.push(...actorListArmorData.genFgList);
					}
					break;
				case "TV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListArmorData.genTvList)) {
						actorArmorDataFilter.push(...actorListArmorData.genTvList);
					}
					break;
				case "TVD":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListArmorData.genTvdList)) {
						actorArmorDataFilter.push(...actorListArmorData.genTvdList);
					}
					break;
				case "SV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorListArmorData.genSvList)) {
						actorArmorDataFilter.push(...actorListArmorData.genSvList);
					}
					break;
			}
		} else {
			let actorArmorData = SunMZ_Core_Utils.findDataById(dataList, actor._actorId);
			if (!actorArmorData) {
				return actorArmorDataFilter;
			}
			
			switch (mode) {
				case "PIC":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorArmorData.genPicList)) {
						actorArmorDataFilter.push(...actorArmorData.genPicList);
					}
					break;
				case "FG":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorArmorData.genFgList)) {
						actorArmorDataFilter.push(...actorArmorData.genFgList);
					}
					break;
				case "TV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorArmorData.genTvList)) {
						actorArmorDataFilter.push(...actorArmorData.genTvList);
					}
					break;
				case "TVD":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorArmorData.genTvdList)) {
						actorArmorDataFilter.push(...actorArmorData.genTvdList);
					}
					break;
				case "SV":
					if (SunMZ_Core_Utils.isArrayNotEmpty(actorArmorData.genSvList)) {
						actorArmorDataFilter.push(...actorArmorData.genSvList);
					}
					break;
			}
		}
	}
	
	return actorArmorDataFilter;
};

SunMZ_GeneratorEx.genB64 = function(actor, mode, timeoutNum) {
	let generatorEx_bitmap_list = [];

	let actorArmorDataFilter = [];
	
	const weapons = actor.syncWeapons();
	const weaponId = weapons[0] ? weapons[0].id : 0;
	
	for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
		let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
		let variableCode = $gameVariables.value(variableData.id);
		let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
		if (variableCodeData) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", mode, false, variableCodeData.actorVarDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", mode, true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
		}
	}
	
	if (weaponId > 0) {
		actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", mode, false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
		actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", mode, true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
	}
	
	for (const armor of actor.syncArmors().values()) {
		actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", mode, false, armor._actorArmorDataList, actorArmorDataFilter);
		actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", mode, true, armor._actorListArmorDataList, actorArmorDataFilter);
	}
	
	let bitmap = null;
	switch (mode) {
		case "PIC":
			bitmap = new Bitmap(actor._picCanvasWidth, actor._picCanvasHeight);
			break;
		case "FG":
			bitmap = new Bitmap(ImageManager.faceWidth, ImageManager.faceHeight);
			break;
		case "TV":
		case "TVD":
			bitmap = new Bitmap(actor._tvCanvasWidth, actor._tvCanvasHeight);
			break;
		case "SV":
			bitmap = new Bitmap(actor._svCanvasWidth, actor._svCanvasHeight);
			break;
	}
	let fun2 = function() {
		if (SunMZ_GeneratorEx.isReady(generatorEx_bitmap_list)) {
			setTimeout(function() {
				switch (mode) {
					case "PIC":
						SunMZ_GeneratorEx.bitmapMerge(bitmap, generatorEx_bitmap_list, actor._generatorPicList, actor._picCanvasWidth, actor._picCanvasHeight);
						actor._generatorPic_bitmap_base64Data = bitmap._canvas.toDataURL();
						break;
					case "FG":
						SunMZ_GeneratorEx.bitmapMerge(bitmap, generatorEx_bitmap_list, actor._generatorFgList, actor._fgCanvasWidth, actor._fgCanvasHeight);
						actor._generatorFg_bitmap_base64Data = bitmap._canvas.toDataURL();
						break;
					case "TV":
						SunMZ_GeneratorEx.bitmapMerge(bitmap, generatorEx_bitmap_list, actor._generatorTvList, actor._tvCanvasWidth, actor._tvCanvasHeight);
						actor._generatorTv_bitmap_base64Data = bitmap._canvas.toDataURL();
						break;
					case "TVD":
						SunMZ_GeneratorEx.bitmapMerge(bitmap, generatorEx_bitmap_list, actor._generatorTvdList, actor._tvCanvasWidth, actor._tvCanvasHeight);
						actor._generatorTvd_bitmap_base64Data = bitmap._canvas.toDataURL();
						break;
					case "SV":
						SunMZ_GeneratorEx.bitmapMerge(bitmap, generatorEx_bitmap_list, actor._generatorSvList, actor._svCanvasWidth, actor._svCanvasHeight);
						actor._generatorSv_bitmap_base64Data = bitmap._canvas.toDataURL();
						break;
				}
			}, timeoutNum);
		}
	};
	switch (mode) {
		case "PIC":
			for (var i = 0; i < actor._generatorPicList.length; i++) {
				let generatorPic = actor._generatorPicList[i];
				let picImage = generatorPic.img;
				let picNewColor = generatorPic.newColor;
				let picOriginalColor = generatorPic.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorPic.cd);
				if (actorArmorItem) {
					actor._generatorPicList[i]._fix = true;
					actor._generatorPicList[i]._fix_canvasX = actorArmorItem.x;
					actor._generatorPicList[i]._fix_canvasY = actorArmorItem.y;
					picImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						picNewColor = actorArmorItem.newColor;
						picOriginalColor = actorArmorItem.orgColor;
					}
				} else {
					actor._generatorPicList[i]._fix = false;
				}
				let generatorBitmap = ImageManager.loadGeneratorPic(picImage, picNewColor, picOriginalColor);
				if (picNewColor && picNewColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(picOriginalColor);
						let newColorRgb = ColorUtils.getColorRgb(picNewColor);
						let isOriginalColorBlack = (picOriginalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				generatorEx_bitmap_list.push(generatorBitmap);
				generatorBitmap.addLoadListener(fun2);
			}
			break;
		case "FG":
			for (var i = 0; i < actor._generatorFgList.length; i++) {
				let generatorFg = actor._generatorFgList[i];
				let fgImage = generatorFg.img;
				let fgNewColor = generatorFg.newColor;
				let fgOriginalColor = generatorFg.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorFg.cd);
				if (actorArmorItem) {
					actor._generatorFgList[i]._fix = true;
					actor._generatorFgList[i]._fix_canvasX = actorArmorItem.x;
					actor._generatorFgList[i]._fix_canvasY = actorArmorItem.y;
					fgImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						fgNewColor = actorArmorItem.newColor;
						fgOriginalColor = actorArmorItem.orgColor;
					}
				} else {
					actor._generatorFgList[i]._fix = false;
				}
				let generatorBitmap = ImageManager.loadGeneratorFg(fgImage, fgNewColor, fgOriginalColor);
				if (fgNewColor && fgNewColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(fgOriginalColor);
						let newColorRgb = ColorUtils.getColorRgb(fgNewColor);
						let isOriginalColorBlack = (fgOriginalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				generatorEx_bitmap_list.push(generatorBitmap);
				generatorBitmap.addLoadListener(fun2);
			}
			break;
		case "TV":
			for (var i = 0; i < actor._generatorTvList.length; i++) {
				let generatorTv = actor._generatorTvList[i];
				let tvImage = generatorTv.img;
				let tvNewColor = generatorTv.newColor;
				let tvOriginalColor = generatorTv.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorTv.cd);
				if (actorArmorItem) {
					actor._generatorTvList[i]._fix = true;
					actor._generatorTvList[i]._fix_canvasX = actorArmorItem.x;
					actor._generatorTvList[i]._fix_canvasY = actorArmorItem.y;
					tvImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						tvNewColor = actorArmorItem.newColor;
						tvOriginalColor = actorArmorItem.orgColor;
					}
				} else {
					actor._generatorTvList[i]._fix = false;
				}
				let generatorBitmap = ImageManager.loadGeneratorTv(tvImage, tvNewColor, tvOriginalColor);
				if (tvNewColor && tvNewColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(tvOriginalColor);
						let newColorRgb = ColorUtils.getColorRgb(tvNewColor);
						let isOriginalColorBlack = (tvOriginalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				generatorEx_bitmap_list.push(generatorBitmap);
				generatorBitmap.addLoadListener(fun2);
			}
			break;
		case "TVD":
			for (var i = 0; i < actor._generatorTvdList.length; i++) {
				let generatorTvd = actor._generatorTvdList[i];
				let tvdImage = generatorTvd.img;
				let tvdNewColor = generatorTvd.newColor;
				let tvdOriginalColor = generatorTvd.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorTvd.cd);
				if (actorArmorItem) {
					actor._generatorTvdList[i]._fix = true;
					actor._generatorTvdList[i]._fix_canvasX = actorArmorItem.x;
					actor._generatorTvdList[i]._fix_canvasY = actorArmorItem.y;
					tvdImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						tvdNewColor = actorArmorItem.newColor;
						tvdOriginalColor = actorArmorItem.orgColor;
					}
				} else {
					actor._generatorTvdList[i]._fix = false;
				}
				let generatorBitmap = ImageManager.loadGeneratorTv(tvdImage, tvdNewColor, tvdOriginalColor);
				if (tvdNewColor && tvdNewColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(tvdOriginalColor);
						let newColorRgb = ColorUtils.getColorRgb(tvdNewColor);
						let isOriginalColorBlack = (tvdOriginalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				generatorEx_bitmap_list.push(generatorBitmap);
				generatorBitmap.addLoadListener(fun2);
			}
			break;
		case "SV":
			for (var i = 0; i < actor._generatorSvList.length; i++) {
				let generatorSv = actor._generatorSvList[i];
				let svImage = generatorSv.img;
				let svNewColor = generatorSv.newColor;
				let svOriginalColor = generatorSv.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorSv.cd);
				if (actorArmorItem) {
					actor._generatorSvList[i]._fix = true;
					actor._generatorSvList[i]._fix_canvasX = actorArmorItem.x;
					actor._generatorSvList[i]._fix_canvasY = actorArmorItem.y;
					svImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						svNewColor = actorArmorItem.newColor;
						svOriginalColor = actorArmorItem.orgColor;
					}
				} else {
					actor._generatorSvList[i]._fix = false;
				}
				let generatorBitmap = ImageManager.loadGeneratorSv(svImage, svNewColor, svOriginalColor);
				if (svNewColor && svNewColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(svOriginalColor);
						let newColorRgb = ColorUtils.getColorRgb(svNewColor);
						let isOriginalColorBlack = (svOriginalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				generatorEx_bitmap_list.push(generatorBitmap);
				generatorBitmap.addLoadListener(fun2);
			}
			break;
	}
};


//-----------------------------------------------------------------------------

(() => {
	
	//開關FG紙娃娃
	PluginManagerEx.registerCommand(document.currentScript, 'switchFgGenerator', function(args) {
		let actor = $gameActors.actor(args.actorId);
		actor.isUseGeneratorFG = args.isOpen;
		/*
		actor._isGeneratorFvChange = true;
		if (args.isOpen) {
			$gameTemp.needCheckEquip(args.actorId);
		}
		*/
	});
	
	//開關TV紙娃娃
	PluginManagerEx.registerCommand(document.currentScript, 'switchTvGenerator', function(args) {
		let actor = $gameActors.actor(args.actorId);
		actor.isUseGeneratorTV = args.isOpen;
		actor._isGeneratorTvChange = true;
		if (args.isOpen) {
			$gameTemp.needCheckEquip(args.actorId);
		}
		//$gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
		//SceneManager.goto(Scene_Map);
		//$gamePlayer.refresh();
		//SceneManager.goto(Scene_Map);
	});
	
	//開關SV紙娃娃
	PluginManagerEx.registerCommand(document.currentScript, 'switchSvGenerator', function(args) {
		let actor = $gameActors.actor(args.actorId);
		actor.isUseGeneratorSV = args.isOpen;
		actor._isGeneratorTvChange = true;
		if (args.isOpen) {
			$gameTemp.needCheckEquip(args.actorId);
		} else {
			actor._generatorFg_bitmap_base64Data = "";
			actor._generatorTv_bitmap_base64Data = "";
			actor._generatorTvd_bitmap_base64Data = "";
			actor._generatorSv_bitmap_base64Data = "";
		}
	});
	
	//強制檢查替身狀態
	PluginManagerEx.registerCommand(document.currentScript, 'checkSubstitute', function(args) {
		$gameTemp.needCheckEvent(args.eventId);
	});
	
	//強制檢查紙娃娃狀態
	PluginManagerEx.registerCommand(document.currentScript, 'checkGenerator', function(args) {
		let actor = $gameActors.actor(args.actorId);
		actor._generatorFg_bitmap_base64Data = "";
		actor._generatorTv_bitmap_base64Data = "";
		actor._generatorTvd_bitmap_base64Data = "";
		actor._generatorSv_bitmap_base64Data = "";
		actor._isGeneratorTvChange = true;
		
		$gameTemp.needCheckEquip(args.actorId);
		$gameTemp.needCheckFace();
	});
	
	//注入TV模組
	PluginManagerEx.registerCommand(document.currentScript, 'setTvMode', function(args) {
		let $actor = $gameActors.actor(args.actorId);
		$gameTemp.putActorTvMode(args.actorId, args.mode, args.svMotion, args.isHorizontalFlip);
	});
	
	//注入Face模組至對話框
	PluginManagerEx.registerCommand(document.currentScript, 'setMessageFace', function(args) {
		let $actor = $gameActors.actor(args.actorId);
		$gameMessage.setActor($actor);
	});
	
	//清除Face模組至對話框
	PluginManagerEx.registerCommand(document.currentScript, 'cleanMessageFace', function(args) {
		let $actor = $gameActors.actor(args.actorId);
		$gameMessage.clearActor();
	});
	
	//注入立繪
	PluginManagerEx.registerCommand(document.currentScript, 'setupActorPicture', function(args) {
	    $gameScreen.setupActorPicture(args.pictureId, args.actorId, args.origin, args.x, args.y, args.scaleX, args.scaleY, args.opacity, args.blendMode);
	});
	
	//改變角色裝備判定同步對象
	PluginManagerEx.registerCommand(document.currentScript, 'changeActorSyncObject', function(args) {
		let actor = $gameActors.actor(args.actorId);
		actor._equipSync = args.syncActorId;
	});
	
	//改變角色區塊定義顏色
	PluginManagerEx.registerCommand(document.currentScript, 'changeActorPartColor', function(args) {
		let actor = $gameActors.actor(args.actorId);
		SunMZ_GeneratorEx.changeActorPartColor(actor._generatorPicList, args.cd, args.orgColor, args.newColor);
		SunMZ_GeneratorEx.changeActorPartColor(actor._generatorFgList, args.cd, args.orgColor, args.newColor);
		SunMZ_GeneratorEx.changeActorPartColor(actor._generatorTvList, args.cd, args.orgColor, args.newColor);
		SunMZ_GeneratorEx.changeActorPartColor(actor._generatorTvdList, args.cd, args.orgColor, args.newColor);
		SunMZ_GeneratorEx.changeActorPartColor(actor._generatorSvList, args.cd, args.orgColor, args.newColor);
	});
	
	//重新製作Base64
	PluginManagerEx.registerCommand(document.currentScript, 'generatorB64', function(args) {
		let $actor = $gameActors.actor(args.actorId);
		SunMZ_GeneratorEx.genB64($actor, args.mode, args.timeoutNum);
	});

	//角色擴充設定匯入$dataActors
	const alias_SunMZ_GeneratorEx_Game_Actors_initialize = Game_Actors.prototype.initialize;
	Game_Actors.prototype.initialize = function() {
		alias_SunMZ_GeneratorEx_Game_Actors_initialize.call(this);
		SunMZ_GeneratorEx.processActorParameterEx();
		SunMZ_GeneratorEx.processEquipParameterEx();
	};
	
	//角色擴充設定匯入$gameActors
	const alias_SunMZ_GeneratorEx_Game_Actor_setup = Game_Actor.prototype.setup;
	Game_Actor.prototype.setup = function(actorId) {
		alias_SunMZ_GeneratorEx_Game_Actor_setup.call(this, actorId);
		this.isUseGeneratorFG = $dataActors[actorId].isUseGeneratorFG || false;
		this.isUseGeneratorTV = $dataActors[actorId].isUseGeneratorTV || false;
		this.isUseGeneratorSV = $dataActors[actorId].isUseGeneratorSV || false;
		this._picCanvasWidth = $dataActors[actorId]._picCanvasWidth || 500;
		this._picCanvasHeight = $dataActors[actorId]._picCanvasHeight || 500;
		this._fgCanvasWidth = $dataActors[actorId]._fgCanvasWidth || 144;
		this._fgCanvasHeight = $dataActors[actorId]._fgCanvasHeight || 144;
		this._tvCanvasWidth = $dataActors[actorId]._tvCanvasWidth || 144;
		this._tvCanvasHeight = $dataActors[actorId]._tvCanvasHeight || 192;
		this._svCanvasWidth = $dataActors[actorId]._svCanvasWidth || 576;
		this._svCanvasHeight = $dataActors[actorId]._svCanvasHeight || 384;
		this._generatorPicList = $dataActors[actorId]._generatorPicList || [];
		this._generatorFgList = $dataActors[actorId]._generatorFgList || [];
		this._generatorTvList = $dataActors[actorId]._generatorTvList || [];
		this._generatorTvdList = $dataActors[actorId]._generatorTvdList || [];
		this._generatorSvList = $dataActors[actorId]._generatorSvList || [];
		this._equipSync = $dataActors[actorId]._equipSync || 0;
		
		this._isGeneratorPicChange = false;
		this._isGeneratorFvChange = false;
		this._isGeneratorTvChange = false;
		this._isGeneratorSvChange = false;
		
		this._generatorPic_bitmap_base64Data = "";
		this._generatorFg_bitmap_base64Data = "";
		this._generatorTv_bitmap_base64Data = "";
		this._generatorTvd_bitmap_base64Data = "";
		this._generatorSv_bitmap_base64Data = "";
		
		this._addMidway = false;
		
		SunMZ_GeneratorEx.genB64(this, "FG", SunMZ.GeneratorEx.FaceTimeoutNum);
		//SunMZ_GeneratorEx.genB64(this, "TV", 0);
	};
	
	//修復存檔機制
	Game_Actor.prototype.SunMZ_GeneratorEx_RestorationData = function() {
		
		if (SunMZ_Core_Utils.isArrayNotEmpty(this._generatorPicList) && JSON.stringify(this._generatorPicList).indexOf("@") > 0) {
			let newGeneratorPicList = [];
			for (var i = 0; i < this._generatorPicList.length; i++) {
				if (!SunMZ_Core_Utils.isNotBlank(this._generatorPicList[i].cd)) {
					newGeneratorPicList.push(this._generatorPicList[i]._parameter);
				} else {
					newGeneratorPicList.push(this._generatorPicList[i]);
				}
			}
			this._generatorPicList = newGeneratorPicList;
		}
		
		if (SunMZ_Core_Utils.isArrayNotEmpty(this._generatorFgList) && JSON.stringify(this._generatorFgList).indexOf("@") > 0) {
			let newGeneratorFgList = [];
			for (var i = 0; i < this._generatorFgList.length; i++) {
				if (!SunMZ_Core_Utils.isNotBlank(this._generatorFgList[i].cd)) {
					newGeneratorFgList.push(this._generatorFgList[i]._parameter);
				} else {
					newGeneratorFgList.push(this._generatorFgList[i]);
				}
			}
			this._generatorFgList = newGeneratorFgList;
		}

		if (SunMZ_Core_Utils.isArrayNotEmpty(this._generatorTvList) && JSON.stringify(this._generatorTvList).indexOf("@") > 0) {
			let newGeneratorTvList = [];
			for (var i = 0; i < this._generatorTvList.length; i++) {
				if (!SunMZ_Core_Utils.isNotBlank(this._generatorTvList[i].cd)) {
					newGeneratorTvList.push(this._generatorTvList[i]._parameter);
				} else {
					newGeneratorTvList.push(this._generatorTvList[i]);
				}
			}
			this._generatorTvList = newGeneratorTvList;
		}
		
		if (SunMZ_Core_Utils.isArrayNotEmpty(this._generatorTvdList) && JSON.stringify(this._generatorTvdList).indexOf("@") > 0) {
			let newGeneratorTvdList = [];
			for (var i = 0; i < this._generatorTvdList.length; i++) {
				if (!SunMZ_Core_Utils.isNotBlank(this._generatorTvdList[i].cd)) {
					newGeneratorTvdList.push(this._generatorTvdList[i]._parameter);
				} else {
					newGeneratorTvdList.push(this._generatorTvdList[i]);
				}
			}
			this._generatorTvdList = newGeneratorTvdList;
		}	
		
		if (SunMZ_Core_Utils.isArrayNotEmpty(this._generatorSvList) && JSON.stringify(this._generatorSvList).indexOf("@") > 0) {
			let newGeneratorSvList = [];
			for (var i = 0; i < this._generatorSvList.length; i++) {
				if (!SunMZ_Core_Utils.isNotBlank(this._generatorSvList[i].cd)) {
					newGeneratorSvList.push(this._generatorSvList[i]._parameter);
				} else {
					newGeneratorSvList.push(this._generatorSvList[i]);
				}
			}
			this._generatorSvList = newGeneratorSvList;
		}
		
	};
	
	Game_Actor.prototype.syncWeapons = function() {
		let syncActor = null;
		if (this._equipSync > 0) {
			syncActor = $gameActors.actor(this._equipSync);
			return syncActor.weapons();
		}
		return this.weapons();
	};
	
	Game_Actor.prototype.syncArmors = function() {
		let syncActor = null;
		if (this._equipSync > 0) {
			syncActor = $gameActors.actor(this._equipSync);
			return syncActor.armors();
		}
		return this.armors();
	};
	
	Game_Actor.prototype.checkB64 = function(type, forceRefresh) {
		switch (type) {
			case "PIC":
				if (this._generatorPic_bitmap_base64Data == "" || forceRefresh) {
					SunMZ_GeneratorEx.genB64(this, type, 0);
				}
				break;
			case "FG":
				if (this._generatorFg_bitmap_base64Data == "" || forceRefresh) {
					SunMZ_GeneratorEx.genB64(this, type, 0);
				}
				break;
			case "TV":
				if (this._generatorTv_bitmap_base64Data == "" || forceRefresh) {
					SunMZ_GeneratorEx.genB64(this, type, 60);
				}
				break;
			case "TVD":
				if (this._generatorTvd_bitmap_base64Data == "" || forceRefresh) {
					SunMZ_GeneratorEx.genB64(this, type, 0);
				}
				break;
			case "SV":
				if (this._generatorSv_bitmap_base64Data == "" || forceRefresh) {
					SunMZ_GeneratorEx.genB64(this, type, 0);
				}
				break;
		}
	};
	
	//***********************************************
	//針對臨時切換隊員的基層處裡
	//***********************************************
	const alias_SunMZ_GeneratorEx_Game_Party_initialize = Game_Party.prototype.initialize;
	Game_Party.prototype.initialize = function() {
		alias_SunMZ_GeneratorEx_Game_Party_initialize.call(this);
		this._standby = [];
	};

	const alias_SunMZ_GeneratorEx_Game_Player_refresh = Game_Player.prototype.refresh;
	Game_Player.prototype.refresh = function() {
		const actor = $gameParty.leader();
		if (actor) {
			if (actor && actor.isUseGeneratorTV) {
				actor._addMidway = true;
				$gameTemp.needCheckEquip(actor._actorId);
			}
		}
		alias_SunMZ_GeneratorEx_Game_Player_refresh.call(this);
	};
	
	const alias_SunMZ_GeneratorEx_Game_Follower_refresh = Game_Follower.prototype.refresh;
	Game_Follower.prototype.refresh = function() {
		alias_SunMZ_GeneratorEx_Game_Follower_refresh.call(this);
		if (this.actor() && this.actor().isUseGeneratorTV) {
			this.actor()._addMidway = true;
			$gameTemp.needCheckEquip(this.actor()._actorId);
		}
	};
	
	//***********************************************
	//為了更好的判斷Character的類型的前置處理
	//EVENT --> 事件
	//VEHICLE --> 交通工具
	//FOLLOWER --> 跟隨夥伴
	//PLAYER --> 玩家
	//***********************************************
	const alias_SunMZ_GeneratorEx_Sprite_Character_initMembers = Sprite_Character.prototype.initMembers;
	Sprite_Character.prototype.initMembers = function() {
		alias_SunMZ_GeneratorEx_Sprite_Character_initMembers.call(this);
		this._acterType = "EVENT";
		this._tvMode = "tv";
		this._svMotion = "none";
		this._isHorizontalFlip = false;
		this._isLoadedGeneratorInfo = false;
		this._isLoadedGenerator = false;
		this._b64Ready = false;
		this._svBody = null;
		this._svUpperBody = null;
		this._svLowerBody = null;
	};
	
	Sprite_Character.prototype.createSvBodySprites = function() {
		if (!this._svBody) {
			this._svBody = new Sprite();
			this._svBody.anchor.x = 0.5;
			this._svBody.anchor.y = 1;
			this.addChild(this._svBody);
		}
	};
	
	Sprite_Character.prototype.createSvHalfBodySprites = function() {
		if (!this._svUpperBody) {
			this._svUpperBody = new Sprite();
			this._svUpperBody.anchor.x = 0.5;
			this._svUpperBody.anchor.y = 1;
			this.addChild(this._svUpperBody);
		}
		if (!this._svLowerBody) {
			this._svLowerBody = new Sprite();
			this._svLowerBody.anchor.x = 0.5;
			this._svLowerBody.anchor.y = 1;
			this._svLowerBody.opacity = 128;
			this.addChild(this._svLowerBody);
		}
	};
	
	Sprite_Character.prototype.updateSvHalfBodySprites = function() {
		if (this._bushDepth > 0) {
			this.createSvHalfBodySprites();
			this._svUpperBody.bitmap = this.bitmap;
			this._svUpperBody.visible = true;
			this._svUpperBody.y = -this._bushDepth;
			this._svLowerBody.bitmap = this.bitmap;
			this._svLowerBody.visible = true;
			this._svUpperBody.setBlendColor(this.getBlendColor());
			this._svLowerBody.setBlendColor(this.getBlendColor());
			this._svUpperBody.setColorTone(this.getColorTone());
			this._svLowerBody.setColorTone(this.getColorTone());
			this._svUpperBody.blendMode = this.blendMode;
			this._svLowerBody.blendMode = this.blendMode;
		} else if (this._svUpperBody) {
			this._svUpperBody.visible = false;
			this._svLowerBody.visible = false;
		}
	};
	
	Sprite_Character.prototype.setActor = function(acterType) {
		this._acterType = acterType;
		this._actor = null;
		switch (this._acterType) {
			case "PLAYER":
				// this._character = Game_Player
				this._actor = $gameParty.leader();
				break;
			case "FOLLOWER":
				// this._character = Game_Follower
				this._actor = this._character.actor();
				break;
			case "EVENT":
				if (this._substituteId > 0) {
					this._actor = $gameActors.actor(this._substituteId);
				}
				break;
		}
	};

	Sprite_Character.prototype.updateBitmap = function() {
		if (this._acterType !== "EVENT" && !this._actor) {
			this.setActor(this._acterType);
		}
		if (this.isImageChanged() || (this._actor && this._acterType !== "EVENT" && this._actor._addMidway)) {
			this.setActor(this._acterType);
			if (this._actor) {
				this._actor._addMidway = false;
			}
			this._tilesetId = $gameMap.tilesetId();
			this._tileId = this._character.tileId();
			this._characterName = this._character.characterName();
			this._characterIndex = this._character.characterIndex();
			this._substituteId = this._character._substituteId;
			
			//TN_SpriteExtender 插件相容性調整
			if (this.isSeperated && this.bodyRate) {
				this._isSeperated = this.isSeperated();
				this._bodyRate = this.bodyRate();
				this.removeChild(this._upperBody);
				this.removeChild(this._lowerBody);
				this._upperBody = null;
				this._lowerBody = null;
			}
			
			if (this._substituteId == 0 && this._acterType === "EVENT") {
				this._actor = null;
				$gameTemp.eventChecked(this._character.eventId());
			}
			
			if (this._substituteId > 0) {
				this._tvMode = this._character._tvMode;
				this._svMotion = this._character._svMotion;
				this._isHorizontalFlip = this._character._isHorizontalFlip;
				this._actor = $gameActors.actor(this._substituteId);
				if (this._tvMode == "sv" && this._actor && this._actor.isUseGeneratorSV) {
					if ("none" == this._svMotion) {
						this._svMotion = "walk";
					}
					this.setGeneratorSvBitmap();
				} else if (this._tvMode == "sv" && this._actor) {	
					if ("none" == this._svMotion) {
						this._svMotion = "walk";
					}
					this.setCharacterSvBitmap();
				} else if (this._actor && this._actor.isUseGeneratorTV) {
					this.setGeneratorBitmap();
				} else {
					this.setCharacterBitmap();	
				}
			} else if (this._tileId > 0) {
				this.setTileBitmap();
			} else {
				if (this._actor && this._acterType !== "EVENT") {
					this._tvMode = $gameTemp.getActorTvMode(this._actor._actorId).mode || "tv";
					this._svMotion = $gameTemp.getActorTvMode(this._actor._actorId).svMotion || "none";
					this._isHorizontalFlip = $gameTemp.getActorTvMode(this._actor._actorId).isHorizontalFlip;
				}
				if (this._tvMode == "sv" && this._actor && this._actor.isUseGeneratorSV) {
					this.setGeneratorSvBitmap();
				} else if (this._tvMode == "sv" && this._actor) {	
					this.setCharacterSvBitmap();
				} else if (this._actor && this._actor.isUseGeneratorTV) {
					this.setGeneratorBitmap();
				} else {
					this.setCharacterBitmap();	
				}
			}
		}
	};
	
	const alias_SunMZ_GeneratorEx_Sprite_Character_isImageChanged = Sprite_Character.prototype.isImageChanged;
	Sprite_Character.prototype.isImageChanged = function() {
		if (this._actor && this._actor._isGeneratorTvChange && this._acterType !== "EVENT") {
			this._actor._isGeneratorTvChange = false;
			return true;
		}
		
		if (this._acterType === "EVENT" && $gameTemp.isCheckEvent(this._character.eventId())) {
			this.setActor(this._acterType);
			return true;
		}
		
		if (this._actor && this._actor.isUseGeneratorTV && !this._isLoadedGenerator) {
			return true;
		}
		return alias_SunMZ_GeneratorEx_Sprite_Character_isImageChanged.call(this);
	};
	
	Sprite_Character.prototype.setGeneratorBitmap = function() {
		switch (this._tvMode) {
			case "tv":
				if (SunMZ_Core_Utils.isNotBlank(this._actor._generatorTv_bitmap_base64Data)) {
					this._generatorEx_bitmap_isMerge = true;
					this._isLoadedGenerator = true;
					this._isLoadedGeneratorInfo = true;
					this._actor._isGeneratorTvChange = false;
					this._isBigCharacter = true;
					this.bitmap = ImageManager.loadBase64(this._actor._generatorTv_bitmap_base64Data);
					if (this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId) && this._acterType !== "EVENT") {
						$gameTemp.equipChecked("generatorEx", this._actor._actorId);
					}
					
					if (this._actor && this._acterType === "EVENT" && $gameTemp.isCheckEvent(this._character.eventId())) {	
						$gameTemp.eventChecked(this._character.eventId());
					}
					return;
				}
				break;
			case "tvd":
				if (SunMZ_Core_Utils.isNotBlank(this._actor._generatorTvd_bitmap_base64Data)) {
					this._generatorEx_bitmap_isMerge = true;
					this._isLoadedGenerator = true;
					this._isLoadedGeneratorInfo = true;
					this._actor._isGeneratorTvChange = false;
					this._isBigCharacter = true;
					this.bitmap = ImageManager.loadBase64(this._actor._generatorTvd_bitmap_base64Data);
					if (this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId) && this._acterType !== "EVENT") {
						$gameTemp.equipChecked("generatorEx", this._actor._actorId);
					}
					
					if (this._actor && this._acterType === "EVENT" && $gameTemp.isCheckEvent(this._character.eventId())) {	
						$gameTemp.eventChecked(this._character.eventId());
					}
					return;
				}
				break;
		}
		
		if (this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId) && this._acterType !== "EVENT") {
			this._actor.refresh();
			this._isLoadedGenerator = false;
			this._isLoadedGeneratorInfo = false;
			this.bitmap = new Bitmap(this._actor._tvCanvasWidth, this._actor._tvCanvasHeight);
			this._generatorEx_bitmap_isMerge = false;
			$gameTemp.equipChecked("generatorEx", this._actor._actorId);
		}
		
		if (this._actor && this._acterType === "EVENT" && $gameTemp.isCheckEvent(this._character.eventId())) {
			this._actor.refresh();
			this._isLoadedGenerator = false;
			this._isLoadedGeneratorInfo = false;
			this.bitmap = new Bitmap(this._actor._tvCanvasWidth, this._actor._tvCanvasHeight);
			this._generatorEx_bitmap_isMerge = false;
			$gameTemp.eventChecked(this._character.eventId());
		}
		
		if (this._isLoadedGenerator && !this._actor._isGeneratorTvChange) {
			return;
		}

		//修復存檔機制
		this._actor.SunMZ_GeneratorEx_RestorationData();
		
		if (!this._isLoadedGeneratorInfo) {
			this._generatorEx_bitmap_list = [];
			this._generatorEx_bitmap_isMerge = false;
			
			let actorArmorDataFilter = [];
			
			const weapons = this._actor.syncWeapons();
			const weaponId = weapons[0] ? weapons[0].id : 0;
			
			for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
				let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
				let variableCode = $gameVariables.value(variableData.id);
				let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
				if (variableCodeData) {
					actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", this._tvMode.toUpperCase(), false, variableCodeData.actorVarDataList, actorArmorDataFilter);
					actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", this._tvMode.toUpperCase(), true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
				}
			}
			
			if (weaponId > 0) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", this._tvMode.toUpperCase(), false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", this._tvMode.toUpperCase(), true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
			}
			
			for (const armor of this._actor.syncArmors().values()) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", this._tvMode.toUpperCase(), false, armor._actorArmorDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", this._tvMode.toUpperCase(), true, armor._actorListArmorDataList, actorArmorDataFilter);
			}
			let generatorTvList = this._actor._generatorTvList;
			switch (this._tvMode) {
				case "tv":
					generatorTvList = this._actor._generatorTvList;
					break;
				case "tvd":
					generatorTvList = this._actor._generatorTvdList;
					break;
			}
			for (var i = 0; i < generatorTvList.length; i++) {
				let generatorTv = generatorTvList[i];
				let tvImage = generatorTv.img;
				let newColor = generatorTv.newColor;
				let originalColor = generatorTv.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorTv.cd);
				if (actorArmorItem) {
					generatorTvList[i]._fix = true;
					generatorTvList[i]._fix_canvasX = actorArmorItem.x;
					generatorTvList[i]._fix_canvasY = actorArmorItem.y;
					tvImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						newColor = actorArmorItem.newColor;
						originalColor = actorArmorItem.orgColor;
					}
				} else {
					generatorTvList[i]._fix = false;
				}
				
				let generatorBitmap = ImageManager.loadGeneratorTv(tvImage, newColor, originalColor);
				if (newColor && newColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(originalColor);
						let newColorRgb = ColorUtils.getColorRgb(newColor);
						let isOriginalColorBlack = (originalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				this._generatorEx_bitmap_list.push(generatorBitmap);
			}
			
			this._isLoadedGeneratorInfo = true;
			
			this.bitmap = new Bitmap(this._actor._tvCanvasWidth, this._actor._tvCanvasHeight);
			if (this._actor._isGeneratorTvChange) {
				this._generatorEx_bitmap_isMerge = false;
			}
		}

		this._isLoadedGenerator = true;
		this._isBigCharacter = true;
	};
	
	Sprite_Character.prototype.setGeneratorSvBitmap = function() {
		let base64Data = "";
		if (this._actor && this._tvMode) {
			switch(this._tvMode) {
				case "tv":
					base64Data = this._actor._generatorTv_bitmap_base64Data;
					break;
				case "tvd":
					base64Data = this._actor._generatorTvd_bitmap_base64Data;
					break;
				case "sv":
					base64Data = this._actor._generatorSv_bitmap_base64Data;
					break;
			}
		}
		
		if (SunMZ_Core_Utils.isNotBlank(base64Data)) {
			this.bitmap = ImageManager.loadBase64(base64Data);
			this._generatorEx_bitmap_isMerge = true;
			this._isLoadedGenerator = true;
			this._isLoadedGeneratorInfo = true;
			this._isGeneratorTvChange = false;
			
			if (this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId) && this._acterType !== "EVENT") {
				$gameTemp.equipChecked("generatorEx", this._actor._actorId);
			}
			
			if (this._actor && this._acterType === "EVENT" && $gameTemp.isCheckEvent(this._character.eventId())) {
				$gameTemp.eventChecked(this._character.eventId());
			}
			return;
		}
		
		if (this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId) && this._acterType !== "EVENT") {
			this._actor.refresh();
			this._isLoadedGenerator = false;
			this._isLoadedGeneratorInfo = false;
			this.bitmap = new Bitmap(this._actor._svCanvasWidth, this._actor._svCanvasHeight);
			this._generatorEx_bitmap_isMerge = false;
			$gameTemp.equipChecked("generatorEx", this._actor._actorId);
		}
		
		if (this._actor && this._acterType === "EVENT" && $gameTemp.isCheckEvent(this._character.eventId())) {
			this._actor.refresh();
			this._isLoadedGenerator = false;
			this._isLoadedGeneratorInfo = false;
			this.bitmap = new Bitmap(this._actor._svCanvasWidth, this._actor._svCanvasHeight);
			this._generatorEx_bitmap_isMerge = false;
			$gameTemp.eventChecked(this._character.eventId());
		}
		
		if (this._isLoadedGenerator && !this._actor._isGeneratorTvChange) {
			return;
		}
		
		//修復存檔機制
		this._actor.SunMZ_GeneratorEx_RestorationData();
		
		if (!this._isLoadedGeneratorInfo) {
			this._generatorEx_bitmap_list = [];
			this._generatorEx_bitmap_isMerge = false;
			
			let actorArmorDataFilter = [];
			
			const weapons = this._actor.syncWeapons();
			const weaponId = weapons[0] ? weapons[0].id : 0;
			
			for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
				let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
				let variableCode = $gameVariables.value(variableData.id);
				let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
				if (variableCodeData) {
					actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", "SV", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
					actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", "SV", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
				}
			}
			
			if (weaponId > 0) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", "SV", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", "SV", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
			}
			
			for (const armor of this._actor.syncArmors().values()) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", "SV", false, armor._actorArmorDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", "SV", true, armor._actorListArmorDataList, actorArmorDataFilter);
			}

			for (var i = 0; i < this._actor._generatorSvList.length; i++) {
				let generatorSv = this._actor._generatorSvList[i];
				let svImage = generatorSv.img;
				let newColor = generatorSv.newColor;
				let originalColor = generatorSv.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorSv.cd);
				if (actorArmorItem) {
					this._actor._generatorSvList[i]._fix = true;
					this._actor._generatorSvList[i]._fix_canvasX = actorArmorItem.x;
					this._actor._generatorSvList[i]._fix_canvasY = actorArmorItem.y;
					svImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						newColor = actorArmorItem.newColor;
						originalColor = actorArmorItem.orgColor;
					}
				} else {
					this._actor._generatorSvList[i]._fix = false;
				}

				let generatorBitmap = ImageManager.loadGeneratorSv(svImage, newColor, originalColor);
				if (newColor && newColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(originalColor);
						let newColorRgb = ColorUtils.getColorRgb(newColor);
						let isOriginalColorBlack = (originalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				this._generatorEx_bitmap_list.push(generatorBitmap);
			}
		}
		
		this._isLoadedGeneratorInfo = true;
		
		this.bitmap = new Bitmap(this._actor._svCanvasWidth, this._actor._svCanvasHeight);
		if (this._actor._isGeneratorTvChange) {
			this._generatorEx_bitmap_isMerge = false;
		}
		
		this._isLoadedGenerator = true;
		
	};
	
	Sprite_Character.prototype.setCharacterSvBitmap = function() {
		this.bitmap = ImageManager.loadSvActor(this._actor.battlerName());
		this._isBigCharacter = false;
	};
	
	Sprite_Character.prototype.updateFrame = function() {
		if (this._tileId > 0) {
			this.updateTileFrame();
		} else {
			if (this._actor && this._tvMode === "sv") {
				if (this._substituteId == 0) {
					this._svMotion = $gameTemp.getActorTvMode(this._actor._actorId).svMotion;
					this._isHorizontalFlip = $gameTemp.getActorTvMode(this._actor._actorId).isHorizontalFlip;
				}
				this.updateSvFrame();
			} else {
				this.updateCharacterFrame();
			}
		}
	};
	
	const alias_SunMZ_GeneratorEx_Sprite_Character_updateCharacterFrame = Sprite_Character.prototype.updateCharacterFrame;
	Sprite_Character.prototype.updateCharacterFrame = function() {
		alias_SunMZ_GeneratorEx_Sprite_Character_updateCharacterFrame.call(this);
		/*
		if (this._bushDepth > 0) {
			this._upperBody.scale.set(1, 1);
			this._lowerBody.scale.set(1, 1);
		}
		this.scale.set(1, 1);
		*/
		if (this._svBody) {
			this._svBody.visible = false;
		}
		
		if (this._svUpperBody) {
			this._svUpperBody.visible = false;
		}
		if (this._svLowerBody) {
			this._svLowerBody.visible = false;
		}
		
	};
	
	Sprite_Character.prototype.updateSvFrame = function() {
		const bitmap = this.bitmap;
		if (bitmap) {
			
			let scalingX = SunMZ.GeneratorEx.SvScalingWidth;
			let scalingY = SunMZ.GeneratorEx.SvScalingHeight;
			
			this.createSvBodySprites();
			this._svBody.bitmap = bitmap;
			if (this._svBody) {
				this._svBody.visible = true;
			}
			const motionCode = this._svMotion;
			if ("none" == motionCode) {
				this._isLoadedGenerator = false;
				this._isLoadedGeneratorInfo = false;
				return;
			}
			const motionIndex = Sprite_Actor.MOTIONS[motionCode].index;
			const pattern = this.characterPatternX() < 3 ? this.characterPatternX() : 1;
			const pw = this.bitmap.width / 9 * scalingX;
			const ph = this.bitmap.height / 6 * scalingY;
			const cw = bitmap.width / 9;
			const ch = bitmap.height / 6;
			const cx = Math.floor(motionIndex / 6) * 3 + pattern;
			const cy = motionIndex % 6;
			this.updateSvHalfBodySprites();
			if (this._bushDepth > 0) {
				let d = this._bushDepth * (1 * (scalingY / 0.75));
				this._svUpperBody.setFrame(cx * cw, cy * ch, cw, ch - d);
				this._svLowerBody.setFrame(cx * cw, (cy * ch) + ph - d, cw, d);
				this.setFrame(cx * cw, cy * ch, 0, ch);
				this._svBody.setFrame(cx * cw, cy * ch, 0, ch);
				if (this._actor && this._isHorizontalFlip) {
					this._svBody.scale.set(-scalingX, scalingY);
					this._svUpperBody.scale.set(-scalingX, scalingY);
					this._svLowerBody.scale.set(-scalingX, scalingY);
				} else {
					this._svBody.scale.set(scalingX, scalingY);	
					this._svUpperBody.scale.set(scalingX, scalingY);
					this._svLowerBody.scale.set(scalingX, scalingY);
				}
			} else {
				this.setFrame(cx * cw, cy * ch, 0, ch);
				this._svBody.setFrame(cx * cw, cy * ch, cw, ch);
				if (this._actor && this._isHorizontalFlip) {
					this._svBody.scale.set(-scalingX, scalingY);
				} else {
					this._svBody.scale.set(scalingX, scalingY);	
				}
			}
		}
	};
	
	const alias_SunMZ_GeneratorEx_Sprite_Character_setFrame = Sprite_Character.prototype.setFrame;
	Sprite_Character.prototype.setFrame = function(sx, sy, pw, ph) {
		if (this._generatorEx_bitmap_isMerge) {
			alias_SunMZ_GeneratorEx_Sprite_Character_setFrame.call(this, sx, sy, pw, ph);
		} else if (this._tvMode == "sv" && this._actor && this._actor.isUseGeneratorSV) {
			if (!this._generatorEx_bitmap_isMerge && SunMZ_GeneratorEx.isReady(this._generatorEx_bitmap_list)) {
				if (this._generatorEx_bitmap_list.length == this._actor._generatorSvList.length) {
					SunMZ_GeneratorEx.bitmapMerge(this.bitmap, this._generatorEx_bitmap_list, this._actor._generatorSvList, this._actor._svCanvasWidth, this._actor._svCanvasHeight);
					this._generatorEx_bitmap_isMerge = true;
					this._actor._generatorSv_bitmap_base64Data = this.bitmap._canvas.toDataURL();
					alias_SunMZ_GeneratorEx_Sprite_Character_setFrame.call(this, sx, sy, pw, ph);
				} else {
					this._isLoadedGenerator = false;
					this._isLoadedGeneratorInfo = false;
				}
			}
		} else if (this._actor && this._actor.isUseGeneratorTV) {
			if (!this._generatorEx_bitmap_isMerge && SunMZ_GeneratorEx.isReady(this._generatorEx_bitmap_list)) {
				let generatorTvList = [];
				switch (this._tvMode) {
					case "tv":
						generatorTvList = this._actor._generatorTvList;
						break;
					case "tvd":
						generatorTvList = this._actor._generatorTvdList;
						break;
				}
				if (this._generatorEx_bitmap_list.length == generatorTvList.length) {
					SunMZ_GeneratorEx.bitmapMerge(this.bitmap, this._generatorEx_bitmap_list, generatorTvList, this._actor._tvCanvasWidth, this._actor._tvCanvasHeight);
					switch (this._tvMode) {
						case "tv":
							this._actor._generatorTv_bitmap_base64Data = this.bitmap._canvas.toDataURL();
							break;
						case "tvd":
							this._actor._generatorTvd_bitmap_base64Data = this.bitmap._canvas.toDataURL();
							break;
					}
					this._generatorEx_bitmap_isMerge = true;
					alias_SunMZ_GeneratorEx_Sprite_Character_setFrame.call(this, sx, sy, pw, ph);
				} else {
					this._isLoadedGenerator = false;
					this._isLoadedGeneratorInfo = false;
				}
			}
		} else {
			alias_SunMZ_GeneratorEx_Sprite_Character_setFrame.call(this, sx, sy, pw, ph);
		}
	};
	
	//覆蓋
	Spriteset_Map.prototype.createCharacters = function() {
		this._characterSprites = [];
		for (const event of $gameMap.events()) {
			let eventCharSprite = new Sprite_Character(event);
			eventCharSprite._acterType = "EVENT";
			this._characterSprites.push(eventCharSprite);
		}
		for (const vehicle of $gameMap.vehicles()) {
			let vehicleCharSprite = new Sprite_Character(vehicle);
			vehicleCharSprite._acterType = "VEHICLE";
			this._characterSprites.push(vehicleCharSprite);
		}
		for (const follower of $gamePlayer.followers().reverseData()) {
			let followerCharSprite = new Sprite_Character(follower);
			followerCharSprite.setActor("FOLLOWER");
			this._characterSprites.push(followerCharSprite);
		}
		let playerCharSprite = new Sprite_Character($gamePlayer);
		playerCharSprite.setActor("PLAYER");

		this._characterSprites.push(playerCharSprite);
		for (const sprite of this._characterSprites) {
			this._tilemap.addChild(sprite);
		}
	};
	
	//替身
	Game_Event.prototype.loadSubstituteParams = function () {
		this._substituteId = 0;
		this._tvMode = "tv";
		this._svMotion = "none";
		if (this.page() && this.list()) {
			let list = this.list();
			for (let i = 0; i < list.length; i++) {
				let command = list[i];
				let re1 = /<(substitute)(:)([0-9]*)(:)([a-zA-Z0-9_-]*)>/g;
				let re2 = /<(substitute)(:)([0-9]*)(:)([a-zA-Z0-9_-]*)(:)([a-zA-Z0-9_-]*)(:)([Y,N])>/g;
				if (command && command.code == 108 && 
				    (list[i].parameters[0].match(re1) || list[i].parameters[0].match(re2))) {
					if (list[i].parameters[0].match(re2)) {
						let match2 = re2.exec(this.list()[0].parameters[0]);
						this._substituteId = match2[3];
						this._tvMode = match2[5];
						this._svMotion = match2[7];
						this._isHorizontalFlip = ("Y" == match2[9]);
					} else {
						let match1 = re1.exec(this.list()[0].parameters[0]);
						this._substituteId = match1[3];
						this._tvMode = match1[5];
					}
				}
			}
		}
    };
	
	const alias_SunMZ_GeneratorEx_Game_Event_setupPage = Game_Event.prototype.setupPage;
	Game_Event.prototype.setupPage = function() {
		alias_SunMZ_GeneratorEx_Game_Event_setupPage.call(this);
		if (this._pageIndex >= 0) {
			this.loadSubstituteParams();
		}
	};

	//-------------------------------------------------
	//戰鬥畫面相關
	//-------------------------------------------------
	const alias_SunMZ_GeneratorEx_Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
	Sprite_Actor.prototype.initMembers = function() {
		alias_SunMZ_GeneratorEx_Sprite_Actor_initMembers.call(this);
		this._isLoadedGenerator = false;
	};
	
	const alias_SunMZ_GeneratorEx_Sprite_Actor_updateBitmap = Sprite_Actor.prototype.updateBitmap;
	Sprite_Actor.prototype.updateBitmap = function() {
		alias_SunMZ_GeneratorEx_Sprite_Actor_updateBitmap.call(this);
		
		if (Imported.SunMZ_SkillParameterEx && 
			this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId)) {
			this._actor.refresh();
			this._isLoadedGenerator = false;
		}
		
		if (this._actor && 
			this._actor.isUseGeneratorSV && 
			!this._isLoadedGenerator) {
			this.setGeneratorBitmap();
		}
	};
		
	Sprite_Actor.prototype.setGeneratorBitmap = function() {
		if (SunMZ_Core_Utils.isNotBlank(this._actor._generatorSv_bitmap_base64Data)) {
			this._mainSprite.bitmap = ImageManager.loadBase64(this._actor._generatorSv_bitmap_base64Data);
			this._generatorEx_bitmap_isMerge = true;
			this._isLoadedGenerator = true;
			this._isLoadedGeneratorInfo = true;
			return;
		}

		this._generatorEx_bitmap_list = [];
		this._generatorEx_bitmap_isMerge = false;

		let actorArmorDataFilter = [];
		
		//存檔修復機制
		this._actor.SunMZ_GeneratorEx_RestorationData();
		
		const weapons = this._actor.syncWeapons();
		const weaponId = weapons[0] ? weapons[0].id : 0;

		for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
			let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
			let variableCode = $gameVariables.value(variableData.id);
			let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
			if (variableCodeData) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", "SV", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", "SV", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
			}
		}
		
		if (weaponId > 0) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", "SV", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", "SV", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
		}
		
		for (const armor of this._actor.syncArmors().values()) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", "SV", false, armor._actorArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", "SV", true, armor._actorListArmorDataList, actorArmorDataFilter);
		}

		for (var i = 0; i < this._actor._generatorSvList.length; i++) {
			let generatorSv = this._actor._generatorSvList[i];
			let svImage = generatorSv.img;
			let newColor = generatorSv.newColor;
			let originalColor = generatorSv.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorSv.cd);
			if (actorArmorItem) {
				this._actor._generatorSvList[i]._fix = true;
				this._actor._generatorSvList[i]._fix_canvasX = actorArmorItem.x;
				this._actor._generatorSvList[i]._fix_canvasY = actorArmorItem.y;
				svImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				this._actor._generatorSvList[i]._fix = false;
			}

			let generatorBitmap = ImageManager.loadGeneratorSv(svImage, newColor, originalColor);
			if (newColor && newColor !== "none") {
				let fun = function() {
					let originalColorRgb = ColorUtils.getColorRgb(originalColor);
					let newColorRgb = ColorUtils.getColorRgb(newColor);
					let isOriginalColorBlack = (originalColor === "black");
					CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
				};
				generatorBitmap.addLoadListener(fun);
			} else {
				let fun = function() {
					CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
				};
				generatorBitmap.addLoadListener(fun);
			}
			this._generatorEx_bitmap_list.push(generatorBitmap);
		}
		
		this._mainSprite.bitmap = new Bitmap(this._actor._svCanvasWidth, this._actor._svCanvasHeight);
		this._isLoadedGenerator = true;
		if (Imported.SunMZ_SkillParameterEx && 
			this._actor && $gameTemp.isCheckEquip("generatorEx", this._actor._actorId)) {
			$gameTemp.equipChecked("generatorEx", this._actor._actorId);
		}
	};
	
	const alias_SunMZ_GeneratorEx_Sprite_Actor_setFrame = Sprite_Actor.prototype.setFrame;
	Sprite_Actor.prototype.setFrame = function(sx, sy, pw, ph) {
		if (this._generatorEx_bitmap_isMerge) {
			alias_SunMZ_GeneratorEx_Sprite_Actor_setFrame.call(this, sx, sy, pw, ph);
		} else if (this._actor && this._actor.isUseGeneratorSV) {
			if (!this._generatorEx_bitmap_isMerge && SunMZ_GeneratorEx.isReady(this._generatorEx_bitmap_list)) {
				SunMZ_GeneratorEx.bitmapMerge(this._mainSprite.bitmap, this._generatorEx_bitmap_list, this._actor._generatorSvList, this._actor._svCanvasWidth, this._actor._svCanvasHeight);
				this._generatorEx_bitmap_isMerge = true;
				this._actor._generatorSv_bitmap_base64Data = this._mainSprite.bitmap._canvas.toDataURL();
				alias_SunMZ_GeneratorEx_Sprite_Actor_setFrame.call(this, sx, sy, pw, ph);
			}
		} else {
			alias_SunMZ_GeneratorEx_Sprite_Actor_setFrame.call(this, sx, sy, pw, ph);
		}
	};
	
	//-------------------------------------------------
	//臉部相關
	//-------------------------------------------------

	const alias_SunMZ_GeneratorEx_Scene_Battle_updateStatusWindowPosition = Scene_Battle.prototype.updateStatusWindowPosition;
	Scene_Battle.prototype.updateStatusWindowPosition = function() {
		alias_SunMZ_GeneratorEx_Scene_Battle_updateStatusWindowPosition.call(this);
		if ($gameTemp.isCheckFace()) {
			this._statusWindow.contents.clear();
			let size = $gameParty.maxBattleMembers();
			if ($gameParty.size() < $gameParty.maxBattleMembers()) {
				size = $gameParty.size();
			}
			for (let i = 0; i < size; i++) {
				this._statusWindow.drawItemImage(i);
			}
			$gameTemp.faceChecked();
		}
	};

	Window_StatusBase.prototype.drawActorFace = function(actor, x, y, width, height) {
		if (actor.isUseGeneratorFG) {
			this.SunMZ_GeneratorEx_drawFace(actor, x, y, width, height);
		} else {
			this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
		}
	};
	
	Window_StatusBase.prototype.getActorFaceBitmapObj = function(actorId) {
		if (!this._actorFaceBitmapList) {
			this._actorFaceBitmapList = {};

		}
		if (!this._actorFaceBitmapList[actorId]) {
			this.SunMZ_loadGeneratorExFaceImages($gameActors.actor(actorId));
		}
		return this._actorFaceBitmapList[actorId];
	};
	
	Window_StatusBase.prototype.loadFaceImages = function() {
		if (!this._actorFaceBitmapList) {
			this._actorFaceBitmapList = {};
		}
		this._faceBitmapList = [];
		//為了確保頭像已經完全讀取添加MK值,只有在第二次讀取時才會使用該參數
		this._faceBitmapMkList = [];
		//該段落是在B64沒有cache環境底下會發生圖片沒有讀到的異常而設置
		//let i = $gameParty.maxBattleMembers();
		for (const actor of $gameParty.members()) {
			if (actor.isUseGeneratorFG) {
				//該段落是在B64沒有cache環境底下會發生圖片沒有讀到的異常而設置
				//if (i > 0) {
					//actor._generatorFg_bitmap_base64Data = "";
					//i--;
				//}
				if (SunMZ_Core_Utils.isNotBlank(actor._generatorFg_bitmap_base64Data)) {
					this._faceBitmapList[actor._actorId] = ImageManager.loadBase64(actor._generatorFg_bitmap_base64Data);
					this._faceBitmapMkList[actor._actorId] = "Y";
				} else {
					this.SunMZ_loadGeneratorExFaceImages(actor);
				}
			} else {
				ImageManager.loadFace(actor.faceName());
			}
		}
	};
	
	Window_StatusBase.prototype.SunMZ_loadGeneratorExFaceImages = function(actor) {
		if (!this._actorFaceBitmapList[actor._actorId]) {
			this._actorFaceBitmapList[actor._actorId] = {
				generatorEx_bitmap_list: [],
				generatorEx_bitmap_list_tv: [],
				actorArmorDataFilter: [],
				actorArmorDataFilter_tv: [],
			};
		}
		
		this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list = [];
		this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list_tv = [];
		this._actorFaceBitmapList[actor._actorId].actorArmorDataFilter = [];
		let actorArmorDataFilter = this._actorFaceBitmapList[actor._actorId].actorArmorDataFilter;
		let actorArmorDataFilter_tv = this._actorFaceBitmapList[actor._actorId].actorArmorDataFilter_tv;
		
		//存檔修復機制
		actor.SunMZ_GeneratorEx_RestorationData();
		
		const weapons = actor.syncWeapons();
		const weaponId = weapons[0] ? weapons[0].id : 0;
		
		for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
			let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
			let variableCode = $gameVariables.value(variableData.id);
			let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
			if (variableCodeData) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
				actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "TV", false, variableCodeData.actorVarDataList, actorArmorDataFilter_tv);
				actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "TV", true, variableCodeData.actorListVarDataList, actorArmorDataFilter_tv);
			}
		}
		
		if (weaponId > 0) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "TV", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter_tv);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "TV", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter_tv);
		}
		
		for (const armor of actor.syncArmors().values()) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", false, armor._actorArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", true, armor._actorListArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "TV", false, armor._actorArmorDataList, actorArmorDataFilter_tv);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "TV", true, armor._actorListArmorDataList, actorArmorDataFilter_tv);
		}

		for (var i = 0; i < actor._generatorFgList.length; i++) {
			let generatorFg = actor._generatorFgList[i];
			let fgImage = generatorFg.img;
			let newColor = generatorFg.newColor;
			let originalColor = generatorFg.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorFg.cd);
			if (actorArmorItem) {
				actor._generatorFgList[i]._fix = true;
				actor._generatorFgList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorFgList[i]._fix_canvasY = actorArmorItem.y;
				fgImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorFgList[i]._fix = false;
			}
			
			let generatorBitmap = ImageManager.loadGeneratorFg(fgImage, newColor, originalColor);
			this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list.push(generatorBitmap);
		}
		
		for (var i = 0; i < actor._generatorTvList.length; i++) {
			let generatorTv = actor._generatorTvList[i];
			let tvImage = generatorTv.img;
			let newColor = generatorTv.newColor;
			let originalColor = generatorTv.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter_tv, generatorTv.cd);
			if (actorArmorItem) {
				actor._generatorTvList[i]._fix = true;
				actor._generatorTvList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorTvList[i]._fix_canvasY = actorArmorItem.y;
				tvImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorTvList[i]._fix = false;
			}
			
			let generatorBitmap = ImageManager.loadGeneratorTv(tvImage, newColor, originalColor);
			this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list_tv.push(generatorBitmap);
		}
	};
	
	Window_Base.prototype.SunMZ_GeneratorEx_drawFace = function (actor, x, y, width, height) {
		//存檔修復機制
		actor.SunMZ_GeneratorEx_RestorationData();

		const weapons = actor.syncWeapons();
		const weaponId = weapons[0] ? weapons[0].id : 0;
		width = width || ImageManager.faceWidth;
		height = height || ImageManager.faceHeight;
		const pw = ImageManager.faceWidth;
		const ph = ImageManager.faceHeight;
		let sw = Math.min(width, pw);
		let sh = Math.min(height, ph);
		let dx = Math.floor(x + Math.max(width - pw, 0) / 2);
		let dy = Math.floor(y + Math.max(height - ph, 0) / 2);
		const sx = 0;
		const sy = Math.floor((ph - sh) / 2);
		
		if (SunMZ_Core_Utils.isNotBlank(actor._generatorFg_bitmap_base64Data) && 
			this._faceBitmapList[actor._actorId] && this._faceBitmapMkList[actor._actorId]) {
			this.contents.blt(this._faceBitmapList[actor._actorId], sx, sy, sw, sh, dx, dy);
			return;
		}
		
		this._generatorEx_bitmap_list = [];
		
		let actorArmorDataFilter = [];
		let actorArmorDataFilter_tv = [];
		
		for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
			let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
			let variableCode = $gameVariables.value(variableData.id);
			let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
			if (variableCodeData) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
				actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "TV", false, variableCodeData.actorVarDataList, actorArmorDataFilter_tv);
				actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "TV", true, variableCodeData.actorListVarDataList, actorArmorDataFilter_tv);
			}
		}
		
		if (weaponId > 0) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "TV", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter_tv);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "TV", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter_tv);
		}
		
		for (const armor of actor.syncArmors().values()) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", false, armor._actorArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", true, armor._actorListArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "TV", false, armor._actorArmorDataList, actorArmorDataFilter_tv);
			actorArmorDataFilter_tv = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "TV", true, armor._actorListArmorDataList, actorArmorDataFilter_tv);
		}
		
		for (var i = 0; i < actor._generatorFgList.length; i++) {
			let generatorFg = actor._generatorFgList[i];
			let fgImage = generatorFg.img;
			let newColor = generatorFg.newColor;
			let originalColor = generatorFg.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorFg.cd);
			if (actorArmorItem) {
				actor._generatorFgList[i]._fix = true;
				actor._generatorFgList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorFgList[i]._fix_canvasY = actorArmorItem.y;
				fgImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorFgList[i]._fix = false;
			}
			
			let generatorBitmap = ImageManager.loadGeneratorFg(fgImage, newColor, originalColor);
			if (newColor && newColor !== "none") {
				let fun = function() {
					let originalColorRgb = ColorUtils.getColorRgb(originalColor);
					let newColorRgb = ColorUtils.getColorRgb(newColor);
					let isOriginalColorBlack = (originalColor === "black");
					CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
				};
				generatorBitmap.addLoadListener(fun);
			} else {
				let fun = function() {
					CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
				};
				generatorBitmap.addLoadListener(fun);
			}
			this._generatorEx_bitmap_list.push(generatorBitmap);
		}
		
		let bitmap = new Bitmap(ImageManager.faceWidth, ImageManager.faceHeight);
		SunMZ_GeneratorEx.bitmapMerge(bitmap, this._generatorEx_bitmap_list, actor._generatorFgList, actor._fgCanvasWidth, actor._fgCanvasHeight);
		if (this._faceBitmapList[actor._actorId]) {
			this._faceBitmapMkList[actor._actorId] = "Y";
		}
		actor._generatorFg_bitmap_base64Data = bitmap._canvas.toDataURL();
		this._faceBitmapList[actor._actorId] = ImageManager.loadBase64(actor._generatorFg_bitmap_base64Data);
		if (bitmap.isReady()) {
			this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);	
		}
		
		this.getActorFaceBitmapObj(actor._actorId).generatorEx_bitmap_list_tv = [];
		for (var i = 0; i < actor._generatorTvList.length; i++) {
			let generatorTv = actor._generatorTvList[i];
			let tvImage = generatorTv.img;
			let newColor = generatorTv.newColor;
			let originalColor = generatorTv.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter_tv, generatorTv.cd);
			if (actorArmorItem) {
				actor._generatorTvList[i]._fix = true;
				actor._generatorTvList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorTvList[i]._fix_canvasY = actorArmorItem.y;
				tvImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorTvList[i]._fix = false;
			}
			
			let generatorBitmap = ImageManager.loadGeneratorTv(tvImage, newColor, originalColor);
			if (newColor && newColor !== "none") {
				let fun = function() {
					let originalColorRgb = ColorUtils.getColorRgb(originalColor);
					let newColorRgb = ColorUtils.getColorRgb(newColor);
					let isOriginalColorBlack = (originalColor === "black");
					CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
				};
				generatorBitmap.addLoadListener(fun);
			} else {
				let fun = function() {
					CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
				};
				generatorBitmap.addLoadListener(fun);
			}
			
			this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list_tv.push(generatorBitmap);
		}
		
		let tvBitmap = new Bitmap(actor._tvCanvasWidth, actor._tvCanvasHeight);
		if (SunMZ_GeneratorEx.isReady(this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list_tv)) {
			SunMZ_GeneratorEx.bitmapMerge(tvBitmap, this._actorFaceBitmapList[actor._actorId].generatorEx_bitmap_list_tv,
													actor._generatorTvList, 
													actor._tvCanvasWidth, 
													actor._tvCanvasHeight);
			actor._generatorTv_bitmap_base64Data = tvBitmap._canvas.toDataURL();
		}
	};

	Window_EquipStatus.prototype.SunMZ_GeneratorEx_drawFace = function (actor, x, y, width, height) {
		this._generatorEx_bitmap_list = [];
		this._generatorEx_bitmap_isMerge = false;

		let actorArmorDataFilter = [];
		
		//存檔修復機制
		actor.SunMZ_GeneratorEx_RestorationData();
		
		const weapons = actor.syncWeapons();
		const weaponId = weapons[0] ? weapons[0].id : 0;
		
		for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
			let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
			let variableCode = $gameVariables.value(variableData.id);
			let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
			if (variableCodeData) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
			}
		}
		
		if (weaponId > 0) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
		}
		
		for (const armor of actor.syncArmors().values()) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", false, armor._actorArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", true, armor._actorListArmorDataList, actorArmorDataFilter);
		}
		
		const salf = this;
		let fun2 = function() {
			if (!salf._generatorEx_bitmap_isMerge && SunMZ_GeneratorEx.isReady(salf._generatorEx_bitmap_list)) {
				setTimeout(function() {
					width = width || ImageManager.faceWidth;
					height = height || ImageManager.faceHeight;
					const pw = ImageManager.faceWidth;
					const ph = ImageManager.faceHeight;
					const sw = Math.min(width, pw);
					const sh = Math.min(height, ph);
					const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
					const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
					const sx = 0;
					const sy = Math.floor((ph - sh) / 2);
					
					for (var i = 0; i < salf._generatorEx_bitmap_list.length; i++) {
						if (actor._generatorFgList[i]._fix) {
							salf.contents.blt(salf._generatorEx_bitmap_list[i], sx + actor._generatorFgList[i]._fix_canvasX, sy + actor._generatorFgList[i]._fix_canvasY, sw, sh, dx, dy);	
						} else {
							salf.contents.blt(salf._generatorEx_bitmap_list[i], sx + actor._generatorFgList[i].x, sy + actor._generatorFgList[i].y, sw, sh, dx, dy);	
						}
					}
					actor._generatorFg_bitmap_base64Data = "";
					actor._generatorTv_bitmap_base64Data = "";
					actor._generatorTvd_bitmap_base64Data = "";
					actor._generatorSv_bitmap_base64Data = "";
					salf._generatorEx_bitmap_isMerge = true;
				}, SunMZ.GeneratorEx.FaceTimeoutNum);
			}
		};
		
		for (var i = 0; i < actor._generatorFgList.length; i++) {
			let generatorFg = actor._generatorFgList[i];
			let fgImage = generatorFg.img;
			let newColor = generatorFg.newColor;
			let originalColor = generatorFg.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorFg.cd);
			if (actorArmorItem) {
				actor._generatorFgList[i]._fix = true;
				actor._generatorFgList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorFgList[i]._fix_canvasY = actorArmorItem.y;
				fgImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorFgList[i]._fix = false;
			}
			let generatorBitmap = ImageManager.loadGeneratorFg(fgImage, newColor, originalColor);
			if (newColor && newColor !== "none") {
				let fun = function() {
					let originalColorRgb = ColorUtils.getColorRgb(originalColor);
					let newColorRgb = ColorUtils.getColorRgb(newColor);
					let isOriginalColorBlack = (originalColor === "black");
					CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
				};
				generatorBitmap.addLoadListener(fun);
			} else {
				let fun = function() {
					CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
				};
				generatorBitmap.addLoadListener(fun);
			}
			generatorBitmap.addLoadListener(fun2);
			salf._generatorEx_bitmap_list.push(generatorBitmap);
		}
		
		let syncActors = SunMZ_GeneratorEx.findActorsBySyncActorId(actor._actorId);
		for (let i = 0; i < syncActors.length; i ++) {
			if (syncActors[i]) {
				syncActors[i]._generatorFg_bitmap_base64Data = "";
				syncActors[i]._generatorTv_bitmap_base64Data = "";
				syncActors[i]._generatorTvd_bitmap_base64Data = "";
				syncActors[i]._generatorSv_bitmap_base64Data = "";
			}
		}
	};
	
	Window_BattleStatus.prototype.SunMZ_GeneratorEx_drawFace = function (actor, x, y, width, height) {
		//存檔修復機制
		actor.SunMZ_GeneratorEx_RestorationData();
		
		const weapons = actor.syncWeapons();
		const weaponId = weapons[0] ? weapons[0].id : 0;
		width = width || ImageManager.faceWidth;
		height = height || ImageManager.faceHeight;
		const pw = ImageManager.faceWidth;
		const ph = ImageManager.faceHeight;
		let sw = Math.min(width, pw);
		let sh = Math.min(height, ph);
		let dx = Math.floor(x + Math.max(width - pw, 0) / 2);
		let dy = Math.floor(y + Math.max(height - ph, 0) / 2);
		const sx = 0;
		const sy = Math.floor((ph - sh) / 2);
		
		if (SunMZ_Core_Utils.isNotBlank(actor._generatorFg_bitmap_base64Data) && 
			this._faceBitmapList[actor._actorId] && this._faceBitmapMkList[actor._actorId]) {
			this.contents.blt(this._faceBitmapList[actor._actorId], sx, sy, sw, sh, dx, dy);
			return;
		}
		
		this._generatorEx_bitmap_list = [];
		
		let actorArmorDataFilter = [];
		
		for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
			let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
			let variableCode = $gameVariables.value(variableData.id);
			let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
			
			if (variableCodeData) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
			}
		}
		
		if (weaponId > 0) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
		}
		
		for (const armor of actor.syncArmors().values()) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", false, armor._actorArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", true, armor._actorListArmorDataList, actorArmorDataFilter);
		}
		
		for (var i = 0; i < actor._generatorFgList.length; i++) {
			let generatorFg = actor._generatorFgList[i];
			let fgImage = generatorFg.img;
			let newColor = generatorFg.newColor;
			let originalColor = generatorFg.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorFg.cd);
			if (actorArmorItem) {
				actor._generatorFgList[i]._fix = true;
				actor._generatorFgList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorFgList[i]._fix_canvasY = actorArmorItem.y;
				fgImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorFgList[i]._fix = false;
			}
			
			let generatorBitmap = ImageManager.loadGeneratorFg(fgImage, newColor, originalColor);
			if (newColor && newColor !== "none") {
				let fun = function() {
					let originalColorRgb = ColorUtils.getColorRgb(originalColor);
					let newColorRgb = ColorUtils.getColorRgb(newColor);
					let isOriginalColorBlack = (originalColor === "black");
					CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
				};
				generatorBitmap.addLoadListener(fun);
			} else {
				let fun = function() {
					CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
				};
				generatorBitmap.addLoadListener(fun);
			}
			this._generatorEx_bitmap_list.push(generatorBitmap);
		}
		
		let bitmap = new Bitmap(ImageManager.faceWidth, ImageManager.faceHeight);
		SunMZ_GeneratorEx.bitmapMerge(bitmap, this._generatorEx_bitmap_list, actor._generatorFgList, actor._fgCanvasWidth, actor._fgCanvasHeight);
		if (this._faceBitmapList[actor._actorId]) {
			this._faceBitmapMkList[actor._actorId] = "Y";
		}
		actor._generatorFg_bitmap_base64Data = bitmap._canvas.toDataURL();
		this._faceBitmapList[actor._actorId] = ImageManager.loadBase64(actor._generatorFg_bitmap_base64Data);
		if (bitmap.isReady()) {
			this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);	
		}
		
	};
	
	//-------------------------------------------------
	//對話顯示(追加參數)
	//-------------------------------------------------
	const alias_SunMZ_GeneratorEx_Game_Message_initialize = Game_Message.prototype.initialize;
	Game_Message.prototype.initialize = function() {
		alias_SunMZ_GeneratorEx_Game_Message_initialize.call(this);
		this.clearActor();
	};
	
	Game_Message.prototype.clearActor = function() {
		this._actor = null;
	};
	
	Game_Message.prototype.setActor = function(actor) {
		this._actor = actor;
	};
	
	const alias_SunMZ_GeneratorEx_Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
	Window_Message.prototype.drawMessageFace = function() {
		const rtl = $gameMessage.isRTL();
		const width = ImageManager.faceWidth;
		const height = this.innerHeight;
		const x = rtl ? this.innerWidth - width - 4 : 4;
		const y = 0;
		if ($gameMessage._actor != null && $gameMessage._actor.isUseGeneratorFG) {
			this.SunMZ_GeneratorEx_drawFace($gameMessage._actor, x, y, width, height);
		} else if ($gameMessage._actor != null) {
			this.drawFace($gameMessage._actor.faceName(), $gameMessage._actor.faceIndex(), x, y, width, height);
		} else {
			alias_SunMZ_GeneratorEx_Window_Message_drawMessageFace.call(this);
		}
	};
	
	Window_Message.prototype.SunMZ_GeneratorEx_drawFace = function (actor, x, y, width, height) {
		this._generatorEx_bitmap_list = [];
		this._generatorEx_bitmap_isMerge = false;
		let actorArmorDataFilter = [];
		//修復存檔機制
		actor.SunMZ_GeneratorEx_RestorationData();
		
		const weapons = actor.syncWeapons();
		const weaponId = weapons[0] ? weapons[0].id : 0;
		
		for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
			let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
			let variableCode = $gameVariables.value(variableData.id);
			let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
			if (variableCodeData) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "variable", "FG", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
			}
		}
		
		if (weaponId > 0) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "weapon", "FG", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
		}
		
		for (const armor of actor.syncArmors().values()) {
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", false, armor._actorArmorDataList, actorArmorDataFilter);
			actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(actor, "armor", "FG", true, armor._actorListArmorDataList, actorArmorDataFilter);
		}

		const salf = this;
		let fun2 = function() {
			if (!salf._generatorEx_bitmap_isMerge && SunMZ_GeneratorEx.isReady(salf._generatorEx_bitmap_list)) {
				setTimeout(function() {
					width = width || ImageManager.faceWidth;
					height = height || ImageManager.faceHeight;
					const pw = ImageManager.faceWidth;
					const ph = ImageManager.faceHeight;
					const sw = Math.min(width, pw);
					const sh = Math.min(height, ph);
					const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
					const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
					const sx = 0;
					const sy = Math.floor((ph - sh) / 2);
					
					for (var i = 0; i < salf._generatorEx_bitmap_list.length; i++) {
						if (actor._generatorFgList[i]._fix) {
							salf.contents.blt(salf._generatorEx_bitmap_list[i], sx + actor._generatorFgList[i]._fix_canvasX, sy + actor._generatorFgList[i]._fix_canvasY, sw, sh, dx, dy);	
						} else {
							salf.contents.blt(salf._generatorEx_bitmap_list[i], sx + actor._generatorFgList[i].x, sy + actor._generatorFgList[i].y, sw, sh, dx, dy);	
						}
					}
					salf._generatorEx_bitmap_isMerge = true;
				}, SunMZ.GeneratorEx.FaceTimeoutNum);
			}
		};

		for (var i = 0; i < actor._generatorFgList.length; i++) {
			let generatorFg = actor._generatorFgList[i];
			let fgImage = generatorFg.img;
			let newColor = generatorFg.newColor;
			let originalColor = generatorFg.orgColor;
			let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorFg.cd);
			if (actorArmorItem) {
				actor._generatorFgList[i]._fix = true;
				actor._generatorFgList[i]._fix_canvasX = actorArmorItem.x;
				actor._generatorFgList[i]._fix_canvasY = actorArmorItem.y;
				fgImage = actorArmorItem.img;
				if (!actorArmorItem.IsInheritColors) {
					newColor = actorArmorItem.newColor;
					originalColor = actorArmorItem.orgColor;
				}
			} else {
				actor._generatorFgList[i]._fix = false;
			}
			let generatorBitmap = ImageManager.loadGeneratorFg(fgImage, newColor, originalColor);
			if (newColor && newColor !== "none") {
				let fun = function() {
					let originalColorRgb = ColorUtils.getColorRgb(originalColor);
					let newColorRgb = ColorUtils.getColorRgb(newColor);
					let isOriginalColorBlack = (originalColor === "black");
					CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
				};
				generatorBitmap.addLoadListener(fun);
			} else {
				let fun = function() {
					CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
				};
				generatorBitmap.addLoadListener(fun);
			}
			generatorBitmap.addLoadListener(fun2);
			salf._generatorEx_bitmap_list.push(generatorBitmap);
		}

	};
	
	//-------------------------------------------------
	//立繪相關
	//-------------------------------------------------
	
	const alias_SunMZ_GeneratorEx_Sprite_Picture_initialize = Sprite_Picture.prototype.initialize;
	Sprite_Picture.prototype.initialize = function(pictureId) {
		alias_SunMZ_GeneratorEx_Sprite_Picture_initialize.call(this, pictureId);
		this._actor = null;
		this._isLoadedGeneratorInfo = false;
		this._isLoadedGenerator = false;
	};
	
	const alias_SunMZ_GeneratorEx_Sprite_Picture_updateBitmap = Sprite_Picture.prototype.updateBitmap;
	Sprite_Picture.prototype.updateBitmap = function() {
		const picture = this.picture();
		if (picture) {
			if (picture._actor != null) {
				this._actor = picture._actor;
				this._isLoadedGeneratorInfo = picture._isLoadedGeneratorInfo;
				this._isLoadedGenerator = picture._isLoadedGenerator;
				if (!this._generatorEx_bitmap_list) {
					this._isLoadedGeneratorInfo = false;
					this._isLoadedGenerator = false;
				}
				this.SunMZ_GeneratorEx_LoadGenerator();
				if (!this._generatorEx_bitmap_isMerge && SunMZ_GeneratorEx.isReady(this._generatorEx_bitmap_list)) {
					SunMZ_GeneratorEx.bitmapMerge(this.bitmap, this._generatorEx_bitmap_list, this._actor._generatorPicList, this._actor._picCanvasWidth, this._actor._picCanvasHeight);
					this._generatorEx_bitmap_isMerge = true;
					this.visible = true;
				} else if (this._generatorEx_bitmap_isMerge) {
					this.visible = true;
				}	
				picture._isLoadedGeneratorInfo = this._isLoadedGeneratorInfo;
				picture._isLoadedGenerator = this._isLoadedGenerator;
			} else {
				alias_SunMZ_GeneratorEx_Sprite_Picture_updateBitmap.call(this);	
			}
		} else {
			alias_SunMZ_GeneratorEx_Sprite_Picture_updateBitmap.call(this);	
		}
	};
	
	Sprite_Picture.prototype.SunMZ_GeneratorEx_LoadGenerator = function () {
		
		if (this._isLoadedGenerator && this._isLoadedGeneratorInfo) {
			return;
		}

		this.bitmap = new Bitmap(this._actor._picCanvasWidth, this._actor._picCanvasHeight);
		this._generatorEx_bitmap_isMerge = false;

		//修復存檔機制
		this._actor.SunMZ_GeneratorEx_RestorationData();
		
		if (!this._isLoadedGeneratorInfo) {
			this._generatorEx_bitmap_list = [];
			this._generatorEx_bitmap_isMerge = false;
			
			let actorArmorDataFilter = [];
			
			const weapons = this._actor.syncWeapons();
			const weaponId = weapons[0] ? weapons[0].id : 0;
			
			for (var i = 0; i < SunMZ.GeneratorEx.VariableDataExList.length; i++) {
				let variableData = SunMZ.GeneratorEx.VariableDataExList[i];
				let variableCode = $gameVariables.value(variableData.id);
				let variableCodeData = SunMZ_Core_Utils.findDataByCode(variableData.varCodeDataList, variableCode);
				if (variableCodeData) {
					actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", "PIC", false, variableCodeData.actorVarDataList, actorArmorDataFilter);
					actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "variable", "PIC", true, variableCodeData.actorListVarDataList, actorArmorDataFilter);
				}
			}
			
			if (weaponId > 0) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", "PIC", false, weapons[0]._actorWeaponDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "weapon", "PIC", true, weapons[0]._actorListWeaponDataList, actorArmorDataFilter);
			}
			
			for (const armor of this._actor.syncArmors().values()) {
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", "PIC", false, armor._actorArmorDataList, actorArmorDataFilter);
				actorArmorDataFilter = SunMZ_GeneratorEx.collectPartInfor(this._actor, "armor", "PIC", true, armor._actorListArmorDataList, actorArmorDataFilter);
			}
			
			for (var i = 0; i < this._actor._generatorPicList.length; i++) {
				let generatorPic = this._actor._generatorPicList[i];
				let picImage = generatorPic.img;
				let newColor = generatorPic.newColor;
				let originalColor = generatorPic.orgColor;
				let actorArmorItem = SunMZ_GeneratorEx.findDataByPartType(actorArmorDataFilter, generatorPic.cd);
				if (actorArmorItem) {
					this._actor._generatorPicList[i]._fix = true;
					this._actor._generatorPicList[i]._fix_canvasX = actorArmorItem.x;
					this._actor._generatorPicList[i]._fix_canvasY = actorArmorItem.y;
					picImage = actorArmorItem.img;
					if (!actorArmorItem.IsInheritColors) {
						newColor = actorArmorItem.newColor;
						originalColor = actorArmorItem.orgColor;
					}
				} else {
					this._actor._generatorPicList[i]._fix = false;
				}
				
				let generatorBitmap = ImageManager.loadGeneratorPic(picImage, newColor, originalColor);
				if (newColor && newColor !== "none") {
					let fun = function() {
						let originalColorRgb = ColorUtils.getColorRgb(originalColor);
						let newColorRgb = ColorUtils.getColorRgb(newColor);
						let isOriginalColorBlack = (originalColor === "black");
						CanvasUtils.putImageRGB(generatorBitmap, newColorRgb.r - originalColorRgb.r, newColorRgb.g - originalColorRgb.g, newColorRgb.b - originalColorRgb.b, generatorBitmap.width, generatorBitmap.height, isOriginalColorBlack);
					};
					generatorBitmap.addLoadListener(fun);
				} else {
					let fun = function() {
						CanvasUtils.putImageRGB(generatorBitmap, 0, 0, 0, generatorBitmap.width, generatorBitmap.height, false);
					};
					generatorBitmap.addLoadListener(fun);
				}
				this._generatorEx_bitmap_list.push(generatorBitmap);
			}
			
			this._isLoadedGeneratorInfo = true;
			
			this.bitmap = new Bitmap(this._actor._picCanvasWidth, this._actor._picCanvasHeight);
			if (this._actor._isGeneratorTvChange) {
				this._generatorEx_bitmap_isMerge = false;
			}
		}

		this._isLoadedGenerator = true;

	};
	
	Game_Screen.prototype.setupActorPicture = function(pictureId, actorId, origin, x, y, scaleX, scaleY, opacity, blendMode) {
		const realPictureId = this.realPictureId(pictureId);
		const picture = new Game_Picture();
		picture.showActorPicture(actorId, origin, x, y, scaleX, scaleY, opacity, blendMode);
		this._pictures[realPictureId] = picture;
	};
	
	Game_Picture.prototype.showActorPicture = function(actorId, origin, x, y, scaleX, scaleY, opacity, blendMode) {
		this._actor = $gameActors.actor(actorId);
		this._isLoadedGeneratorInfo = false;
		this._isLoadedGenerator = false;
		this._name = "";
		this._origin = origin;
		this._x = x;
		this._y = y;
		this._scaleX = scaleX;
		this._scaleY = scaleY;
		this._opacity = opacity;
		this._blendMode = blendMode;
		this.initTarget();
		this.initTone();
		this.initRotation();
	};

	//-------------------------------------------------
	//暫存指令
	//-------------------------------------------------
	const alias_SunMZ_GeneratorEx_Game_Temp_initialize = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function() {
		alias_SunMZ_GeneratorEx_Game_Temp_initialize.call(this);
		this._generatorExFace = false;
		this._actorTvModeArr = [];
		this._actorTvModeArr.push(null);
		for (var i = 1; i < $dataActors.length; i++) {
			this._actorTvModeArr.push({
				actorId: i,
				mode : "tv",
				isHorizontalFlip: false
			});
		}
		this._actorTvMapEvents = [];
	};
	
	Game_Temp.prototype.needCheckEvent = function(eventId) {
		this._actorTvMapEvents.push(eventId);
	};
	
	Game_Temp.prototype.eventChecked = function(eventId) {
		let index = this._actorTvMapEvents.indexOf(eventId);
		if (index > -1) {
			this._actorTvMapEvents.splice(index, 1);
		}
	};
	
	Game_Temp.prototype.isCheckEvent = function(eventId) {
		return this._actorTvMapEvents.includes(eventId);
	};
	
	Game_Temp.prototype.needCheckFace = function() {
		this._generatorExFace = true;
	};
	
	Game_Temp.prototype.faceChecked = function() {
		this._generatorExFace = false;
	};
	
	Game_Temp.prototype.isCheckFace = function() {
		return this._generatorExFace;
	};
	
	Game_Temp.prototype.getActorTvMode = function(actorId) {
		return this._actorTvModeArr[actorId];
	};
	
	Game_Temp.prototype.putActorTvMode = function(actorId, mode, svMotion, isHorizontalFlip) {
		this._actorTvModeArr[actorId].mode = mode;
		this._actorTvModeArr[actorId].svMotion = svMotion;
		this._actorTvModeArr[actorId].isHorizontalFlip = isHorizontalFlip;
	};
	
	//***********************************************
	//暫存指令 - 針對武器紙娃娃與全身紙娃娃的即時替換機制處裡(核心內容)
	//***********************************************
	const alias_SunMZ_Core_Game_Temp_initialize = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function() {
		alias_SunMZ_Core_Game_Temp_initialize.call(this);
		this._generatorExNeedCheckEquip = [];
		this._weaponGeneratorNeedCheckEquip = [];
	};
	
	Game_Temp.prototype.needCheckEquip = function(actorId) {
		if (Imported.SunMZ_GeneratorEx) {
			this._generatorExNeedCheckEquip.push(actorId);
		}
		if (Imported.SunMZ_WeaponGenerator) {
			this._weaponGeneratorNeedCheckEquip.push(actorId);
		}
	};
	
	Game_Temp.prototype.equipChecked = function(type, actorId) {
		let index = -1;
		switch (type) {
			case "generatorEx":
				index = this._generatorExNeedCheckEquip.indexOf(actorId);
				if (index > -1) {
					this._generatorExNeedCheckEquip.splice(index, 1);
				}
				break;
			case "weaponGenerator":
				index = this._weaponGeneratorNeedCheckEquip.indexOf(actorId);
				if (index > -1) {
					this._weaponGeneratorNeedCheckEquip.splice(index, 1);
				}
				break;
		}
	};
	
	Game_Temp.prototype.isCheckEquip = function(type, actorId) {
		switch (type) {
			case "generatorEx":
				return this._generatorExNeedCheckEquip.includes(actorId);
			case "weaponGenerator":
				return this._weaponGeneratorNeedCheckEquip.includes(actorId);
		}
		return false;
	};
	
	//-------------------------------------------------
	//存檔相關
	//-------------------------------------------------
	if (SunMZ.GeneratorEx.IsSaveSync) {
		
		//覆蓋
		DataManager.makeSavefileInfo = function() {
			const info = {};
			info.title = $dataSystem.gameTitle;
			info.characters = $gameParty.charactersForSavefile();
			info.faces = $gameParty.facesForSavefile();
			info.playtime = $gameSystem.playtimeText();
			info.timestamp = Date.now();
			return info;
		};
		
		//覆蓋
		Game_Party.prototype.charactersForSavefile = function() {
			let i = 0;
			return this.battleMembers().map(actor => 
			{
				i++;
				return [
				actor.characterName(),
				actor.characterIndex(),
				actor.isUseGeneratorTV,
				actor._generatorTv_bitmap_base64Data,
				i
			]});
		};
		
		//覆蓋
		Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y) {
			if (info.characters) {
				const characterY = y;
				for (const data of info.characters) {
					if (data[2]) {
						if (this.index() > -1) {
							//這裡要直接讀取不然會有問題
							const bitmap = SunMZ_Bitmap.load(data[3]);
							const windowSavefileListObj = this;
							const fun = function(bitmapObj) {
								if (!SunMZ_Core_Utils.isNotBlank(bitmapObj._isMerge)) {
									windowSavefileListObj.SunMZ_GeneratorEx_drawCharacter(bitmapObj, x + (data[4] * 48), characterY);
									bitmapObj._isMerge = true;	
								}
							};
							bitmap.addLoadListener(fun);
						}
					} else {
						this.drawCharacter(data[0], data[1], x + (data[4] * 48), characterY);	
					}
				}
			}
		};
		
		Window_SavefileList.prototype.SunMZ_GeneratorEx_drawCharacter = function(bitmap, x, y) {
			const salf = this;
			if (bitmap.isReady()) {
				const pw = bitmap.width / 3;
				const ph = bitmap.height / 4;
				const n = 0;
				const sx = pw;
				const sy = 0;
				salf.contents.paintOpacity = 255;
				salf.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
				
			}
		};
		
		Window_SavefileList.prototype.changePaintOpacity = function(enabled) {
			this.contents.paintOpacity = enabled ? 255 : this.translucentOpacity();
		};
		
	}

})();
