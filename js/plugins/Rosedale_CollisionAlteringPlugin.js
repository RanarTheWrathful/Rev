/*:============================================================================
*
*  @target MZ
*
*  @author Chaucer
*
*  @plugindesc | Collision Altering Plugin : Version - 1.17.0 |
*   This plugin completely changes collision detection and adds pixel movement.
*
*  @url http://rosedale-studios.com
*
* @orderBefore Rosedale_CharacterMotions.js
*
*  @help
* ╔════════════════════════════════════╗
* ║ ()()                                                              ()() ║
* ║ (^.^)                    - Rosedale Studios -                    (^.^) ║
* ║c(")(")                                                          (")(")ↄ║
* ╚════════════════════════════════════╝
*
*============================================================================
*  Compatibility Issues (And how to fix them if possible) :
*============================================================================
*
*----------------------------------------------------------------------------
*  Hime_GuestFollowers :
*----------------------------------------------------------------------------
*
*    This plugin should go BELOW Hime_GuestFollowers plugin.
*
*----------------------------------------------------------------------------
* VisuMZ_1_EventsMoveCore :
*----------------------------------------------------------------------------
*
*    This plugin should go BELOW VisuMZ_1_EventsMoveCore plugin. Some
* features of VisuMZ_1_EventsMoveCore may still be broken, such as...
*
* <Sprite Offset Y: +x>
* <Sprite Offset Y: -x>
*
*   To offset map characters, it is recommended to use CTB_SpriteExtras
* instead.
*
*----------------------------------------------------------------------------
* OcRam_Star_Tile_Fix :
*----------------------------------------------------------------------------
*   This plugin is incompatible with the Collision Altering plugin it seems,
* instead, I recommend using TF_Billboard created by Tonbi.
*
*
*----------------------------------------------------------------------------
* OcRam_Time_System( MZ ) :
*----------------------------------------------------------------------------
*   Ensure that OcRam_Time_System.js is placed BELOW this plugin in the
* plugin manager, or the map clock will not display properly.
*
*----------------------------------------------------------------------------
* TSR_Mirror.js :
*----------------------------------------------------------------------------
*      As of version 1.1.0 this plugin is now compatible with TSR_Mirror.js,
*    however, in order for these plugins to work together TSR_Mirror.js must
*    be placed BELOW this plugin! If it is not below this plugin it WILL
*    cause issues!
*
*----------------------------------------------------------------------------
* OcRam_Passages.js
*----------------------------------------------------------------------------
*     As of version 1.1.0 this plugin is now compatible with
*   OcRam_Passages.js, however as OcRam_Passages.js overwrites an
*   important function required to trigger events, OcRam_Passages.js
*   must be placed BELOW this plugin! If it is not placed below this
*   plugin it will cause issues when trying to trigger events!
*
*----------------------------------------------------------------------------
* YEP_EventHitboxResize.js
*----------------------------------------------------------------------------
*     Please ensure that YEP_EventHitboxResize is placed ABOVE this
*   plugin!
*
*----------------------------------------------------------------------------
* YEP_SaveEventLocations.js
*----------------------------------------------------------------------------
*     Please ensure that YEP_SaveEventLocations is placed BELOW this
*   plugin!
*
*----------------------------------------------------------------------------
* Galv_ActionIndicatorsMZ.js
*----------------------------------------------------------------------------
*     Please ensure that Galv_ActionIndicators is placed ABOVE this
*   plugin!
*
*
*----------------------------------------------------------------------------
* Galvs_LayerGraphics.js
*----------------------------------------------------------------------------
*     The order of the plugins should not matter, but it is recommended to
*   place Galv's plugin ABOVE this one.
*
*----------------------------------------------------------------------------
* Rosedale_CharacterMotions.js
*----------------------------------------------------------------------------
*     Please ensure that Rosedale_CharacterMotions is placed BELOW this
*   plugin!
*
*----------------------------------------------------------------------------
* MZPlusPrimeParallax.js
*----------------------------------------------------------------------------
*     Please ensure that MZPlusPrimeParallax is placed ABOVE this
*   plugin!
*
*============================================================================
*  Important Information Regarding Variables :
*============================================================================

*   When storing a characters X and Y data into a variable, the value that
* gets sent to the variable, being being applied, gets rounded to the LOWEST
* whole number. This means that anytime you pass the player's X coordiante,
* and he's standing at a position like... 3.721, after you save the value
* to the variable, the variable will ONLY actually read it as 3, leaving
* out everything else! This can be really bad if you plan to use a characters
* EXACT position, I.E. for a transfer or something else.

*   To combat this issue, I have now added a new plugin command that should
* be activated BEFORE setting the varaibles! If it is enabled,it will force
* the variable to retain the precise value including the decimal values!
* It is highly recommended to turn this off again after, to ensure no other
* variables might recieve decimal places, it's unlikely, but stil, very
* much recommended.
*
*----------------------------------------------------------------------------
* Plugin Commands For Variale rounding :
*----------------------------------------------------------------------------
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ transfer_player mapId A x B y C d D f E    ║
*  ╠════════════╬══════════════════════╣
*  ║                        ║ Transfer the player, allowing to use float ║
*  ║ Description :          ║ values for positioning, and diagonals      ║
*  ║                        ║ for the player direction on transfer.      ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ mapId: replace A with the id of the map to transfer to.              ║
*  ║                                                                      ║
*  ║ x: the x position( can be float I.E. 2.5 ) to transfer to.           ║
*  ║                                                                      ║
*  ║ y: the y position( can be float I.E. 2.5 ) to transfer to.           ║
*  ║                                                                      ║
*  ║ d: the direction the player will face on transfer( CAN be diag ).    ║
*  ║                                                                      ║
*  ║ Below are the available directions that can be used, replace D with  ║
*  ║ the number associated with the direction you want to use.            ║
*  ║                                                                      ║
*  ║ Retain = 5                                                           ║
*  ║ Down-Left = 1                                                        ║
*  ║ Down = 2                                                             ║
*  ║ Down-Right = 3                                                       ║
*  ║ Left = 4                                                             ║
*  ║ Right = 6                                                            ║
*  ║ Up-Left = 7                                                          ║
*  ║ Up = 8                                                               ║
*  ║ Up-Right = 9                                                         ║
*  ║                                                                      ║
*  ║ f: the fadeType to use on transfer.                                  ║
*  ║                                                                      ║
*  ║ Below are the available fade types, replace E with the number        ║
*  ║ associated with the fade type you want to use.                       ║
*  ║                                                                      ║
*  ║ Black = 0                                                            ║
*  ║ White = 1                                                            ║
*  ║ None = 2                                                             ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ <note:below example, transfer to map 5, at x:3.7, y:2.3 and retains  ║
*  ║ the players original direction, and uses NO fade type>               ║
*  ║                                                                      ║
*  ║ transfer_player mapId 5 x 3.7 y 2.3 d 5 f 2                          ║
*  ║                                                                      ║
*  ║ <note:below example, transfer to map 5, at x:5.2, y:7.5 and sets     ║
*  ║ the players direction to down-left, and uses BLACK fade type>        ║
*  ║                                                                      ║
*  ║ transfer_player mapId 5 x 5.2 y 7.5 d 1 f 0                          ║
*  ║                                                                      ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ player_hitbox_rect x A y B w C h D         ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ set players collider to a rectangle, and   ║
*  ║                        ║ set the x, y, width, and height values.    ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ x: replace A with the offset x position of the rectangle collider.   ║
*  ║                                                                      ║
*  ║ y: replace B with the offset y position of the rectangle collider.   ║
*  ║                                                                      ║
*  ║ w: replace C with the width of the rectangle collider.               ║
*  ║                                                                      ║
*  ║ h: replace D with the width of the rectangle collider.               ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ player_hitbox_rect x 0 y 12 w 24 h 24                                ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ player_hitbox_circle x A y B radius C      ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ set players collider to a circle, and      ║
*  ║                        ║ set the x, y, and radius values.           ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ x: replace A with the offset x position of the circle collider.      ║
*  ║                                                                      ║
*  ║ y: replace B with the offset y position of the circle collider.      ║
*  ║                                                                      ║
*  ║ radius: replace C with the radius of the circle collider.            ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ player_hitbox_circle x 0 y 12 radius 12                              ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ follower_hitbox_rect x A y B w C h D       ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ set all followers collider to a rectangle, ║
*  ║                        ║ and set the x, y, width, height values.    ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ x: replace A with the offset x position of the rectangle collider.   ║
*  ║                                                                      ║
*  ║ y: replace B with the offset y position of the rectangle collider.   ║
*  ║                                                                      ║
*  ║ w: replace C with the width of the rectangle collider.               ║
*  ║                                                                      ║
*  ║ h: replace D with the width of the rectangle collider.               ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ follower_hitbox_rect x 0 y 12 w 24 h 24                              ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ follower_hitbox_circle x A y B radius C    ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ set all followers collider to a circle     ║
*  ║                        ║ and set the x, y, and radius values.       ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ x: replace A with the offset x position of the circle collider.      ║
*  ║                                                                      ║
*  ║ y: replace B with the offset y position of the circle collider.      ║
*  ║                                                                      ║
*  ║ radius: replace C with the radius of the circle collider.            ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ follower_hitbox_circle x 0 y 12 radius 12                            ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ event_hitbox_rect id A x B y C w D h E     ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ set an events collider to a rectangle,     ║
*  ║                        ║ and set the x, y, width, height values.    ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ id: replace A with the id of the target event.                       ║
*  ║                                                                      ║
*  ║ x: replace B with the offset x position of the rectangle collider.   ║
*  ║                                                                      ║
*  ║ y: replace C with the offset y position of the rectangle collider.   ║
*  ║                                                                      ║
*  ║ w: replace D with the width of the rectangle collider.               ║
*  ║                                                                      ║
*  ║ h: replace E with the width of the rectangle collider.               ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ event_hitbox_rect id 3 x 0 y 0 w 96 h 48                             ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ event_hitbox_circle x A y B radius C       ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ set an events collider to a circle         ║
*  ║                        ║ and set the x, y, and radius values.       ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ id: replace A with the id of the target event.                       ║
*  ║                                                                      ║
*  ║ x: replace B with the offset x position of the circle collider.      ║
*  ║                                                                      ║
*  ║ y: replace C with the offset y position of the circle collider.      ║
*  ║                                                                      ║
*  ║ radius: replace D with the radius of the circle collider.            ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ event_hitbox_circle id 12 x 0 y 0 radius 32                          ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ disable_rounding                           ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Calling this command will disable rounding.║
*  ║                        ║ when a variable is being set.              ║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ disable_rounding                                                     ║
*  ╚═══════════════════════════════════╝
*
*  ╔════════════╦══════════════════════╗
*  ║ Plugin Command :       ║ enable_rounding                            ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Calling this command will ebable rounding. ║
*  ║                        ║ when a variable is being set.              ║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════���═══╣
*  ║ disable_rounding                                                     ║
*  ╚═══════════════════════════════════╝
*
*============================================================================
*  Instructions :
*============================================================================

*   Without the "Collision_Tool" program this plugin is virtually
* useless, as you will not be able to setup colliders! To find the program
* for your OS, please go to the location you downloaded this plugin from.
*
* Steam : open your DLC folder, and navigate to "Collision Altering Plugin"
* folder, then open the "Plugin&Tools" folder. Then choose the folder that
* is appropriate for your OS and run the executable file within that folder.
*
* Degica Store : Extract all contents of the zip folder and open the created
* folder. Then open the "Plugin&Tools" folder and choose the folder that
* is appropriate for your OS. Then run the executable file within that folder.
*
*   This plugins is basically plug and play aside from note tags/comments
* to enable pixel movement/collision alteration. If the note tag is not
* present on a map default map movement/collision detection will be used.
*
*----------------------------------------------------------------------------
* 8 Directional Sprite Sheets:
*----------------------------------------------------------------------------
*
*    When enabling 8 directional sprite sheets on a character, please follow
*    the format specified below. In this example, we'll assume this sheet
*    uses the "$" symbol in it's name (or only contains a single actor).
*    Assume the arrows in each box are the direction the player faces
*    in each frame of the sprite sheet.
*
*    Default Spritesheet:                 8 Direction Sprite Sheet:
*   ┌─┬─┬─┐                               ┌─┬─┬─┐
*   │↓│↓│↓│                               │↙│↙│↙│
*   ├─┼─┼─┤                               ├─┼─┼─┤
*   │←│←│←│                               │↓│↓│↓│
*   ├─┼─┼─┤                               ├─┼─┼─┤
*   │→│→│→│                               │↘│↘│↘│
*   ├─┼─┼─┤                               ├─┼─┼─┤
*   │↑│↑│↑│                               │←│←│←│
*   └─┴─┴─┘                               ├─┼─┼─┤
*                                                │→│→│→│
*                                                ├─┼─┼─┤
*                                                │↖│↖│↖│
*                                                ├─┼─┼─┤
*                                                │↑│↑│↑│
*                                                ├─┼─┼─┤
*                                                │↗│↗│↗│
*                                                └─┴─┴─┘
*
*----------------------------------------------------------------------------
* Map Note Tags:
*----------------------------------------------------------------------------

*  ╔════════════╦══════════════════════╗
*  ║ Note Tag :             ║ <pixel>                                    ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Enable pixel movement on map with this tag.║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ <pixel>                                                     ���
*  ╚═══════════════════════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Note Tag :             ║ <grid>                                    ║
*  ╠════════════╬══════════════════════╣
*  ║                        ║ Disable pixel movement on map with this   ║
*  ║ Description :          ║ tag( only applicable if "Always Enabled"  ║
*  ║                        ║ parameter is set to true( or on ).        ║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ <grid>                                                     ║
*  ╚═══════════════════════════════════╝

*----------------------------------------------------------------------------
* Actor Note Tags:
*----------------------------------------------------------------------------

*  ╔════════════╦══════════════════════╗
*  ║ Note Tag :             ║ <8dir>                                     ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ With this note tag attached, the actor     ║
*  ║                        ║ will use an 8 directional sprite sheet!    ║
*  ╠════════════╩════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ <8dir>                                                               ║
*  ╚═══════════════════════════════════╝

*----------------------------------------------------------------------------
* Event Comments:
*----------------------------------------------------------------------------

*  ╔════════════╦══════════════════════╗
*  ║ Comment :              ║ <hitbox: X, Y, WIDTH, HEIGHT>                       ║
*  ╠════════════╬══════════════════════╣
*  ║                        ║ Customize the hitbox for the event that    ║
*  ║ Description :          ║ this comment is attached to. Each argument ║
*  ║                        ║ must be seperated with a comma ",".        ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ X : The offset x position of the new hitbox                          ║
*  ║                                                                      ║
*  ║ Y : The offset y position of the new hitbox                          ║
*  ║                                                                      ║
*  ║ WIDTH : The width of the hitbox.                                     ║
*  ║                                                                      ║
*  ║ HEIGHT : The height of the hitbox.                                   ║
*  ║ If only one number is used for WIDTH and HEIGHT,                     ║
*  ║ A Box with the WIDTH and HEIGHT set to that number will be used.     ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ <hitbox : 0, 6, 24, 24>                                              ║
*  ║ <hitbox: 0, 3, 12, 96>                                               ║
*  ║ <hitbox: 5, 5, 48>  <- Here WIDTH and HEIGHT will be set to 48.      ║
*  ╚═══════════════════════════════════╝

*  ╔════════════���══════════════════════╗
*  ║ Comment :              ║ <8dir>                                     ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ With this comment attached, the event      ║
*  ║                        ║ will use an 8 directional sprite sheet!    ║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ <8dir>                                                               ║
*  ╚═══════════════════════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Comment :              ║ <transfer>                                 ║
*  ╠════════════╬══════════════════════╣
*  ║                        ║ With this comment attached, the event      ║
*  ║                        ║ will be read as a transfer event. In short ║
*  ║ Description :          ║ This will require the players collider     ║
*  ║                        ║ center to be WITHIN an event in order for  ║
*  ���                        ║ the event to be triggered.                 ║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ <transfer>                                                           ║
*  ╚═══════════════════════════════════╝

*----------------------------------------------------------------------------
* Move Route Script Call:
*----------------------------------------------------------------------------

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ this.setDestination( X, Y )                ║
*  ╠════════════╬══════════════════════╣
*  ║                        ║ Set a destination for a character to start ║
*  ║ Description :          ║ walking to, the player will walk directly  ║
*  ║                        ║ to the destination (off grid) and with     ║
*  ║                        ║ no path finding used. Collision detection  ║
*  ║                        ║ will be applied. If a collision occurs     ║
*  ║                        ║ the character will attempt to slide around ║
*  ║                        ║ any obstacles. If the character is unable  ║
*  ║                        ║ to continue moving, the move will be       ���
*  ║                        ║ cancelled.                                 ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ X : The X coordinate the character will attempt to move to.          ║
*  ║                                                                      ║
*  ║ Y : The Y coordinate the character will attempt to move to.          ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ this.setDestination( 3.275, 8.5 )                                          ║
*  ║ this.setDestination( 14, 8 )                                         ║
*  ╚═══════════════════════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ character.findPathTo( X, Y )               ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Begin path finding to coordinate X, Y.     ║
*  ║                        ║ Works just like setDestination, but        ║
*  ║                        ║ includes smart path finding to X, Y.       ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ X: coordinate on x axis to path find to.                             ║
*  ║                                                                      ║
*  ║ Y: coordinate on y axis to path find to.                             ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ this.findPathTo( 29, 15 )                                            ║
*  ║ $gamePlayer.findPathTo( 17, 11 )                                     ║
*  ║ $gameMap.event( 5 ).findPathTo( 1, 32 )                              ║
*  ╚═══════════════════════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ character.moveRandom8()                    ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Move randomly in 8 directions.             ║
*  ╠════════════╩══════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ this.moveRandom8()                                                   ��
*  ║ $gamePlayer.moveRandom8()                                            ║
*  ║ $gameMap.event( 5 ).moveRandom8()                                    ║
*  ╚═══════════════════════════════════╝

*----------------------------------------------------------------------------
* Script Calls:
*----------------------------------------------------------------------------

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ subject.distanceTo( CHARACTER )            ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ��� Return the distance, in tiles, between the ║
*  ║                        ║ CHARACTER and the subject.                 ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ CHARACTER : The character to check the distance between.             ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ $gamePlayer.distanceTo( $gameMap.event( 1 ) ) <= 1                   ║
*  ║ $gameMap.event( 3 ).distanceTo( $gameMap.event( 10 ) ) <= 1          ║
*  ╚═══════════════════════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ subject.isOnTile( X, Y, D )                ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Return if the character is on the tile at  ║
*  ║                        ║ X, Y and facing direction of D. This is    ║
*  ║                        ║ best used in a conditional branch script   ║
*  ║                        ║ call.                                      ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ X : The x coordinate of the tile.                                    ║
*  ║                                                                      ║
*  ║ Y : The y coordinate of the tile.                                    ║
*  ║                                                                      ║
*  ║ D : ( OPTIONAL ) the direction required.                             ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ $gamePlayer.isOnTile( 23, 7, 8 )                                     ║
*  ║ $gameMap.event( 3 ).isOnTile( 10, 13 )                               ║
*  ╚════════════════���══════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ subject.moveAtAngle( ANGLE, DISTANCE )     ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Move the character at the angle specified. ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ ANGLE : The angle to move toward ( A number between 0~360 ).         ║
*  ║                                                                      ║
*  ║ DISTANCE : The distance travelled ( In tile size, 1 = 1 tile ).      ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ $gamePlayer.moveAtAngle( 180 )                                       ║
*  ║ $gameMap.event( 3 ).moveAtAngle( 13 )                                ║
*  ╚═══════════════════════════════════╝

*  ╔════════════╦══════════════════════╗
*  ║ Script Call :          ║ subject.chaseTarget( TARGET )              ║
*  ╠════════════╬══════════════════════╣
*  ║ Description :          ║ Make the character chase the target.       ║
*  ╠════════════╩══════════════════════╣
*  ║ Arguments :                                                          ║
*  ╠═══════════════════════════════════╣
*  ║                                                                      ║
*  ║ TARGET : The target character to chase.                              ║
*  ║                                                                      ║
*  ╠═══════════════════════════════════╣
*  ║ Examples :                                                           ║
*  ╠═══════════════════════════════════╣
*  ║ $gamePlayer.chaseTarget( $gameMap.evennt( 1 ) )                      ║
*  ║ $gameMap.event( 3 ).chaseTarget( $gamePlayer )                       ║
*  ╚═══════════════════════════════════╝

*============================================================================
*  Terms Of Use :
*============================================================================

*   This Plugin may be used commercially, or non commercially. This plugin may
*  be extended upon. This plugin may NOT be shared, or passed to others
*  who have not purchased this product.

*============================================================================
*  Version History :
*============================================================================

*  ● Version : 1.0.0
*  ● Date : 20/01/2023
*    ★ Release.

* ● Version : 1.1.0
* ● Date : 07/11/2023
*   ★ Add - parallax map collisions
*   ★ Add - support for counter tags
*   ★ Add - support for terrain tags
*   ★ Add - support for damage floors
*   ��� Add - support TSR_Mirror.js plugin
*   ★ Add - support OcRam_Passagaes.js plugin
*   ★ Add - function to check distance between two events.
*   ★ Add - function to move to a destination( off grid ).
*   ★ Add - 8 direction spritesheets for player, followers, and events.
*   ✩ Fix - below characters priority prevents trigger by action button.
*   ✩ Fix - autorun events not starting after page switch.
*   ✩ Fix - event jitter while map is scrolling.
*   ✩ Fix - event dialog test crashes game.

* ● Version : 1.1.1
* ● Date : 07/14/2023
*   ✩ Fix - parallax colliders not divisible by tile size being misplaced.

* ● Version : 1.2.0
* ● Date : 24/07/2023
*   ★ Add - Jumpable colliders( I.E. jumping off cliffs ).
*   ★ Add - 8 direction notes/comments now read if map is not pixel movement.
*   ✩ Fix - 8 direction support for full size sprite sheets.
*   ✩ Fix - issue with events colliding with invisible followers.

* ● Version : 1.3.1
* ● Date : 28/07/2023
*   ★ Add - <transfer> comment for events( see help file ).
*   ★ Add - Rectangular event colliders.
*   ★ Add - Performance optimizations.
*   ★ Add - Improved jump mechanic.
*   ✩ Fix - improper collision on cliff jumps.
*   ✩ Fix - Collisions with circles and line segments.
*   ✩ Fix - Water tiles are no longer auto-assigned a collider.
*   ✩ Fix - Sometimes event keeps moving after its been started.
*   ✩ Fix - character sprite position accuracy( reduce jitter ).
*   ✩ Fix - Event move routes sometimes stopping after collision.
*   ✩ Fix - Frontmost tile is now the only tile read for a collider.
*   ✩ Fix - Collider data being slightly inaccurate( reduce jitter ).
*   ✩ Fix - Sometimes event keeps moving after the set location command.
*   ✩ Fix - Counter tags not working properly.

* ● Version : 1.3.2
* ● Date : 13/12/2023
*   ✩ Fix - Documentation referencing a "Rosedale_CollisionAlteringGUI.js"
*   ✩ Fix - Colliders priorities not working as intended.
*   ✩ Fix - Diagnonal Movement not working as intended.
*   ✩ Fix - Documentation fors hitbox for events.
*   ✩ Fix - Followers awkward movement.
*
* ● Version : 1.3.3
* ● Date : 18/12/2023

*   ✩ Fix - Fix collision prioriity for water tiles.

* ● Version : 1.3.4
* ● Date : 23/12/2023
*   ✩ Fix - tile passability to more accurately reflect collider layering.
*   ✩ Fix - water tiles impassible for ships.

* ● Version : 1.4.0
* ● Date : 31/12/2023
*   ★ Add - PathManager for path finding
*   ★ Add - script call for path finding a character( see help file )
*   ★ Add - path finding for followers when they get stuck.

* ● Version : 1.4.1
* ● Date : 04/01/2024
*   ✩ Fix - Camera jitter issue with DragonSmoothCamera.js
*   ✩ Fix - Calling menu while moving would not open until player stops.
*   ✩ Fix - Jittering Events/followers when player moves occasionally.
*   ✩ Fix - Performance of path finding.
*   ✩ Fix - Accuracy of path finding.

* ● Version : 1.4.2
* ● Date : 07/01/2024
*   ★ Add - more accurate, and performant follower implementation.
*   ✩ Fix - crash on older versions of MZ or MV(?)
*   ✩ Fix - path finding inaccuracy.

* ● Version : 1.4.3
* ● Date : 09/01/2024
*   ✩ Fix - crash in Rpg Maker MV( sorry for that Q_Q ).
*   ✩ Fix - pathfinding not working in MV.

* ● Version : 1.5.1
* ● Date : 12/01/2024
*   ★ Add - 8 diretional random function( see move route script calls ).
*   ★ Add - Always enabled paramter, if used, pixel movement is always on.
*   ✩ Fix - 8 directional sprites not working with VisuMZ_1_EventsMoveCore.
*   ✩ Fix - negative values could not be applied to circle colliders.
*   ✩ Fix - path finding in move route does not wait for completion.
*   ✩ Fix - "Skip if Cannot Move" is now honored for move routes.
*   ✩ Fix - When triggering an event player keeps moving.
*   ✩ Fix - it is possible to trigger multiple events.
*   ✩ Fix - event touch trigger type did not work.
*   ✩ Fix - improve ray casting calculations.
*   ✩ Fix - optimize path finding.

* ● Version : 1.5.2
* ● Date : 15/01/2024
*   ✩ Fix - issue triggering events from within the center.

* ● Version : 1.6.0
* ● Date : 15/01/2024
*   ★ Add - script call "character.isOnTile(), see script calls section".
*   ★ Add - script call "character.moveAtAngle(), see script calls section".
*   ★ Add - dash speed modifier in plugin parameters.

* ● Version : 1.6.1
* ● Date : 15/01/2024
*   ✩ Fix - step counter continues to increase when walking into a wall.

* ● Version : 1.6.2
* ● Date : 15/01/2024
*   ✩ Fix - issue with camera jitter when moving diagonally.
*   ✩ Fix - incorrect handling of triggering through or below priority events.
*   ✩ Fix - issue where events could continue moving during an event.
*   ✩ Fix - crash in talking to moving event randomly in MV.

* ● Version : 1.6.3
* ● Date : 29/01/2024
*   ★ Add - Update
*   ✩ Fix - debug mode was not working correctly.

* ● Version : 1.6.4
* ● Date : 29/01/2024
*   ✩ Fix - dashspeed can now be set to negative values.
*   ✩ Fix - parallax collisions were ignored in some instances.

* ● Version : 1.6.5
* ● Date : 29/01/2024
*   ✩ Fix - unecessary debug logs were removed.

* ● Version : 1.6.6
* ● Date : 29/01/2024
*   ✩ Fix - debug mode was always active.

* ● Version : 1.6.7
* ● Date : 31/01/2024
*   ✩ Fix - error in jump when collider not present.

* ● Version : 1.6.8
* ● Date : 02/03/2024
*   ✩ Fix - issue with Galv_ActionIndicators.
*   ✩ Fix - walk animation did not play when walking over touch events.
*   ✩ Fix - moveForward and moveBackward does not honor diagonal movements.
*   ✩ Fix - moveBackward does not honor direction fix value.

* ● Version : 1.6.9
* ● Date : 07/02/2024
*   ✩ Fix - issue with moonwalking when using the setDirection function.

* ● Version : 1.6.10
* ● Date : 11/02/2024
*   ✩ Fix - crash when nearing a vehicle.
*   ✩ Fix - touch events overlapped with map collider do not trigger.
*   ✩ Fix - traction cancelled when triggering below priority touch event.

* ● Version : 1.6.11
* ● Date : 12/02/2024
*   ✩ Fix - issue with mouse movement not being handled corerctly.

* ● Version : 1.6.12
* ● Date : 14/02/2024
*   ✩ Fix - collision altering plugin walk cycle skipped over below events.

* ● Version : 1.6.13
* ● Date : 20/02/2024
*   ✩ Fix - issues with OcRam_Passages latest version.

* ● Version : 1.7.0
* ● Date : 23/02/2024
*   ★ Add - Ignorable colliders( or lack thereof ) per tile( see help file ).
*   ★ Add - Compatibility for Galvs_LayerGraphics(MV/MZ).js.
*   ✩ Fix - issue with followers when unboarding a vehicle.
*   ✩ Fix - sliding around player when "Skip if cannot Move" is active.
*   ✩ Fix - endless walk loop when "Skip if cannot Move" is active.
*   ✩ Fix - "Skip if cannot Move" not being honored.
*   ✩ Fix - Misnamed "Jump Switch" parameter.

* ● Version : 1.7.1
* ● Date : 21/03/2024
*   ✩ Fix - error in checking for ignored colliders if data does not exist.

* ● Version : 1.8.0
* ● Date : 15/04/2024
*   ★ Add - Option to use Legacy Follower Mode( the mode that was used before ).
*   ★ Add - Region Restrictions for players, followers, and vehicles.
*   ★ Add - Command to disable rounding of variables( see help file for more ).
*   ★ Add - Command to enable rounding of variables( see help file for more ).
*   ★ Add - Touch Input can now Trigger Events( mouse and touch screen input ).
*   ★ Add - Chunk based Path finding( better performance, but increases time ).
*   ★ Add - More accurate path finding collision detection and ray tracing.
*   ✩ Fix - bug with follower 8 direction sprites & character motions.
*   ✩ Fix - math computation error for PointxRect collision checks.
*   ✩ Fix - incorrectly placed line segments from collision tool.
*   ✩ Fix - incorrect handling of counter tileset tags.
*   ✩ Fix - triggering rectangular events was wonky.
*   ✩ Fix - issue with diagonal walking from set destination.
*   ✩ Fix - followers should not collide with events.

* ● Version : 1.8.1
* ● Date : 14/07/2024
*   ✩ Fix - errors with characters not existing in collision check.
*   ✩ Fix - errors with map not existing in collision check.

* ● Version : 1.8.2
* ● Date : 14/07/2024
*   ✩ Fix - Fix issue with vehicles syncing with player too early
*   ✩ Fix - Fix issue with ship colliders not being read correctly.
*   ✩ Fix - Fix issue followers moving eratically after unboarding vehicle.

* ● Version : 1.9.0
* ● Date : 14/07/2024
*   ★ Add - script call moveAtAngle, updated to allow specifying the distance.
*   ★ Add - ability to disable mouse movement via parameters
*   ★ Add - plugin command to set & resize rect collider for player.
*   ★ Add - plugin command to set & resize circle collider for player.
*   ★ Add - plugin command to set & resize rect collider for followers.
*   ★ Add - plugin command to set & resize circle collider for followers.
*   ★ Add - plugin command to set & resize rect collider for event.
*   ★ Add - plugin command to set & resize circle collider for event.
*   ★ Add - compatibility for OCRam_Time_System.js( MZ ) see help file.
*   ✩ Fix - Issue with vehicle collisions if OcRam_Core installed.
*   ✩ Fix - inaccuracy with the "LineXRect funnction" function.
*   ✩ Fix - mouse movment inaccuracy when screen is zoomed in.
*   ✩ Fix - inaccuracy with the "getRectRaysToward" function.
*   ✩ Fix - follower colliders always set to circle.

* ● Version : 1.10.0
* ● Date : 30/07/2024
*   ★ Add - "<grid>" map note tag, see help file for more info.
*   ★ Add - "chaseTarget" function for events( ONLY events, see help file).
*   ★ Add - Ray cast functions now detect circles as well.
*   ✩ Fix - collision for Rectangle x Polygon( better accuracy & performance ).
*   ✩ Fix - issue with events being untriggerable if player is through.
*   ✩ Fix - followers distance greatly increases when running.

* ● Version : 1.10.1
* ● Date : 16/09/2024
*   ✩ Fix - issue with triggering events.

* ● Version : 1.10.2
* ● Date : 17/09/2024
*   ✩ Fix - bug with triggering through and below priority events.
*   ✩ Remove - unecessary console log used for debugging.

* ● Version : 1.10.3
* ● Date : 17/09/2024
*   ✩ Fix - nearby empty events stopping valid events from starting
*   ✩ Change - raycast for trigger check to 5 rays instead of 3.

* ● Version : 1.10.4
* ● Date : 17/09/2024
*   ✩ Fix - compatibility with MZPlusPrimeParallax.js.

* ● Version : 1.11.0
* ● Date : 18/09/2024
*   ★ Add - support for YEP_EventHitbox
*   ✩ Fix - raycast for event trigger now fires from center outward.
*   ✩ Fix - raycast for circles not working properly.
*   ✩ Fix - unboarding vehicles clipping.
*   ✩ Fix - cannot board vehicles.

* ● Version : 1.11.1
* ● Date : 19/09/2024
*   ✩ Fix - Player got stuck on events when through, via move route.
*   ✩ Fix - disabling mouse not working in MV.

* ● Version : 1.11.2
* ● Date : 19/09/2024
*   ✩ Fix - Placement for YEP_HitboxResize plugin placement missing.

* ● Version : 1.12.0
* ● Date : 20/09/2024
*   ★ Add - Vehicle 8 directional support via plugin parameters.
*   ★ Add - Multiple no jump regions.
*   ✩ Fix - 4 directional vehicles sprite handling for diagonal movement.
*   ✩ Fix - 4 directional characters being set to diagonal directions.
*   ✩ Fix - jumping onto a slippery region sent player flying.
*   ✩ Fix - no jump regions not working properly after 1.8.0..

* ● Version : 1.13.0
* ● Date : 21/09/2024
*   ★ Add - Split Traction( start speed ), and friction( stop speed )..
*   ★ Add - Support for MZPlusPrimeParallax plugin..
*   ✩ Fix - crash on character collisions in some situations.

* ● Version : 1.13.1
* ● Date : 23/09/2024
*   ✩ Fix - error in MZPlusPrimeParallax...
*   ✩ Fix - missing compatibility rules for certain plugins in help file.

* ● Version : 1.13.2
* ● Date : 23/09/2024
*   ✩ Fix - resize event & follower hitbox not working in MV.

* ● Version : 1.13.3
* ● Date : 24/09/2024
*   ✩ Fix - instances where data is not imported properly in older MV projects.
*   ✩ Fix - tile events issue( event w/tile graphic & below priority ).

* ● Version : 1.13.4
* ● Date : 28/09/2024
*   ✩ Fix - restricted jump regions default parameter value was incorrect.
*   ✩ Fix - non-array restricted jump regions now converted to array.
*   ✩ Fix - crash on "event touch" event trigger type.

* ● Version : 1.13.5
* ● Date : 01/10/2024
*   ✩ Fix - debugMode not placed at top of parameters.

* ● Version : 1.14.0
* ● Date : 06/10/2024
*   ★ Add - moveRandom now works in 8 directions( for supported characters ).
*   ★ Add - turnAwayFromCharacter works in 8 directions.
*   ★ Add - moveAwayFromCharacter works in 8 directions.
*   ★ Add - moveTowardCharacter works in 8 directions.
*   ★ Add - turnTowardCharacter works in 8 directions.

* ● Version : 1.14.1
* ● Date : 22/10/2024
*   ✩ Fix - issue with vehicles collisions on looping maps edges.


* ● Version : 1.14.2
* ● Date : 23/10/2024
*   ✩ Fix - issue with moving over events and character motions.
*   ✩ Fix - support for abs motions( coming soon ).

* ● Version : 1.14.3
* ● Date : 24/10/2024
*   ✩ Fix - followers acting strange on looping map edges.
*   ✩ Fix - path finding acting strange on looping map edges.

* ● Version : 1.15.0
* ● Date : 02/11/2024
*   ★ Add - follower distance parameter
*   ✩ Fix - tile collisions being ignored in certain circumstances.
*   ✩ Fix - jump sometimes offsets character sprite.
*   ✩ Fix - jittery diagonal movement finally!

* ● Version : 1.16.0
* ● Date : 03/11/2024
*   ★ Add - Support for "DragonSmoothCamera" plugin.
*   ✩ Fix - colliders being re-initialized per page if without a note tag.
*   ✩ Fix - debug mode was not working properly after last update.
*   ✩ Remove - debug code.

* ● Version : 1.16.1
* ● Date : 04/11/2024
*   ✩ Fix - crash with Galvs_LayerGraphics plugin.

* ● Version : 1.17.0
* ● Date : 19/11/2024
*   ★ Add - Stack Region ID( allows all colliders on tile to be read ).
*   ★ Add - Snap To Pixel parameter( prevents jitter on diagonal movement ).
*   ★ Add - Prevent Normalization parameter( prevent normalized diagonals ).


*============================================================================
*  Contact Me :
*============================================================================

*  If you have questions, about this plugin, or commissioning me, or have
*  a bug to report, please feel free to contact me by any of the below
*  methods.

*  website : https://www.rosedale-studios.com
*  rmw : https://forums.rpgmakerweb.com/index.php?members/chaucer.44456
*  youtube : https://www.youtube.com/channel/UCYA4VU5izmbQvnjMINssshQ/videos
*  email : chaucer(at)rosedale-studios(dot)com
*  discord : https://discord.gg/nexQGb65uP

*============================================================================

* @command disable_rounding
* @text Disable Variable Rounding
* @desc This command disables variable rounding when a value is assigned to a variable.

* @command enable_rounding
* @text Enable Variable Rounding
* @desc This command re-enables variable rounding when a value is assigned to a variable.

* @command transfer_player
* @text Transfer Player Float
* @desc Transfer the player to a new location/map with float precision.

* @arg mapId
* @text Map ID
* @desc The ID of the map to transfer to.
* @default 1
* @type number
* @min 1
* @max 10000

* @arg x
* @text X
* @desc The position on the x axis to transfer the player to.
* @default 1
* @type text

* @arg y
* @text Y
* @desc The position on the Y axis to transfer the player to.
* @default 1
* @type text

* @arg d
* @text Direction
* @desc The direction the player will face on transfer.
* @default 5
* @type select

* @option Retain
* @value 5
* @option DownLeft
* @value 1
* @option Down
* @value 2
* @option DownRight
* @value 3
* @option Left
* @value 4
* @option Right
* @value 6
* @option UpLeft
* @value 7
* @option Up
* @value 8
* @option UpRight
* @value 9

* @arg fadeType
* @text Fade
* @desc Choose what type of fade effect is performed.
* @default Black
* @type select

* @option Black
* @value 0
* @option White
* @value 1
* @option None
* @value 2

* @command player_hitbox_rect
* @text Set Player Hitbox Rect
* @desc Set the hitbox type of the player to a rect, and reposition/resize it.

* @arg x
* @text X
* @desc Offset x of the hitbox of the player.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg y
* @text Y
* @desc Offset y of the hitbox of the player.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg width
* @text Width
* @desc Set the width of the players rectangle collider.
* @default 48
* @type number
* @min 0
* @max 10000

* @arg height
* @text Height
* @desc Set the height of the players rectangle hitbox.
* @default 48
* @type number
* @min 0
* @max 10000

* @command player_hitbox_circle
* @text Set Player Hitbox Circle
* @desc Set the hitbox type of the player to a circle, and reposition/resize it.

* @arg x
* @text X
* @desc Offset x of the circle collider.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg y
* @text Y
* @desc Offset y of the circle collider.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg radius
* @text Radius
* @desc Set the radius of the circle collider of the player.
* @default 48
* @type number
* @min 0
* @max 10000

* @command follower_hitbox_rect
* @text Set Follower Hitbox Rect
* @desc Set the hitbox type of all followers to a rect, and reposition/resize them.

* @arg x
* @text X
* @desc Offset x of the hitbox of the follower.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg y
* @text Y
* @desc Offset y of the hitbox of the follower.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg width
* @text Width
* @desc Set the width of the followers rectangle collider.
* @default 48
* @type number
* @min 0
* @max 10000

* @arg height
* @text Height
* @desc Set the height of the followers rectangle hitbox.
* @default 48
* @type number
* @min 0
* @max 10000

* @command follower_hitbox_circle
* @text Set Follower Hitbox Circle
* @desc Set the hitbox type of all followers to a circle, and reposition/resize them.

* @arg x
* @text X
* @desc Offset x of the circle collider.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg y
* @text Y
* @desc Offset y of the circle collider.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg radius
* @text Radius
* @desc Set the radius of the circle collider of the follower.
* @default 48
* @type number
* @min 0
* @max 10000

* @command event_hitbox_rect
* @text Set Event Hitbox Rect
* @desc Set the hitbox type of the event to a rect, and reposition/resize it.

* @arg id
* @text Event ID
* @desc The ID of the event on the current map to set the hitbox for.
* @default 1
* @type number
* @min 1
* @max 10000

* @arg x
* @text X
* @desc Offset x of the hitbox of the event.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg y
* @text Y
* @desc Offset y of the hitbox of the event.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg width
* @text Width
* @desc Set the width of the events rectangle collider.
* @default 48
* @type number
* @min 0
* @max 10000

* @arg height
* @text Height
* @desc Set the height of the events rectangle hitbox.
* @default 48
* @type number
* @min 0
* @max 10000

* @command event_hitbox_circle
* @text Set Event Hitbox Circle
* @desc Set the hitbox type of the event to a circle, and reposition/resize it.

* @arg id
* @text Event ID
* @desc The ID of the event on the current map to set the hitbox for.
* @default 1
* @type number
* @min 1
* @max 10000

* @arg x
* @text X
* @desc Offset x of the circle collider.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg y
* @text Y
* @desc Offset y of the circle collider.
* @default 0
* @type number
* @min -10000
* @max 10000

* @arg radius
* @text Radius
* @desc Set the radius of the circle collider of the event.
* @default 48
* @type number
* @min 0
* @max 10000

* @param generalSettings
* @text GENERAL SETTING:
* @desc
* @default
* @type text

* @param debugMode
* @text Debug Mode
* @desc In debug mode colliders for characters and any colliders near the player will be rendered on screen.
* @default false
* @type boolean
* @parent generalSettings

* @param alwaysEnabled
* @text Always Enabled
* @desc Should this plugin always be enabled on every map by default?
* @default false
* @type boolean
* @parent generalSettings

* @param disableMouseMovement
* @text Disable Mouse Movement
* @desc When turned on, mouse movement will no longer function.
* @default false
* @type boolean
* @parent generalSettings

* @param pathSearchSize
* @text Path Find Search Size
* @desc Used to prevent path finding lag, but searches are slower( 0 is disabled, 256 is max search size ).
* @default 50
* @type number
* @min 0
* @max 256
* @parent generalSettings

* @param tractionRegions
* @text Traction Regions
* @desc Specify traction based on region, this allows creating icy or slippery surfaces
* @default []
* @type struct<RegionTraction>[]
* @parent generalSettings

* @param preventNormalization
* @text Prevent Normalization
* @desc Should diagonal movements be normalized( diagonal speed will move faster if enabled ).
* @default false
* @type boolean
* @parent generalSettings

* @param snapToPixels
* @text Snap To Pixels
* @desc When the player moves via input, snap movement to pixel coordinate to prevent map jitter.
* @default false
* @type boolean
* @parent generalSettings

* @param stackRegion
* @text Stack Colliders Region
* @desc When this region ID is placed on a tile, ALL colliders on said tile will be read, instead of the top most collider.
* @default -1
* @type number
* @min -1
* @max 255
* @parent generalSettings

* @param playerSettings
* @text PLAYER SETTINGS:
* @desc
* @default
* @type text

* @param playerCollider
* @text Player Collider
* @desc Specify the size and postion of the collider.
* @default {"x":"0","y":"0","radius":"24"}
* @type struct<Circle>
* @parent playerSettings

* @param followerMode
* @text Follower Mode
* @desc Direct: followers will follow the dfirect path of the player; Legacy: followers will loosely follow the player.
* @default 0
* @type select
* @option direct
* @value 0
* @option legacy
* @value 1
* @parent playerSettings

* @param enable8Dir
* @text Enable 8 directonal movement
* @desc Should the player be able to move in diagonally.
* @default true
* @type boolean
* @parent playerSettings

* @param dashSpeed
* @text Dash Modifier
* @desc How much EXTRA speed will be added when running (default is 1).
* @default 1
* @type number
* @min -2.00
* @max 2.00
* @decimals 2
* @parent playerSettings

* @param followerDistance
* @text Follower Distance
* @desc How far from the player will followers be( in tiles ) before following the player.
* @default 1.00
* @type number
* @min 0.01
* @max 10.00
* @decimals 2
* @parent playerSettings

* @param jumpSettings
* @text JUMP SETTINGS:
* @desc
* @default
* @type text

* @param jumpSe
* @text Edge Jump SE
* @desc Sound effect played when a character jumps off an edge.
* @default {"name":"","volume":"90","pitch":"100","pan":"0"}
* @type struct<Audio>
* @parent jumpSettings

* @param noJumpRegions
* @text No Jump Regions
* @desc Specify a region that the player will not be able to jump to (Set to -1 to disable).
* @default []
* @type number[]
* @min 1
* @max 255
* @parent jumpSettings

* @param jumpEnabledSwitch
* @text Jump Switch
* @desc Specify a switch that, when enabled, will allow the player to jump.
* @default 0
* @type number
* @min 0
* @parent jumpSettings

* @param vehicleSettings
* @text VEHICLE SETTINGS:
* @desc
* @default
* @type text

* @param boat8Dir
* @text 8 Directional Boat
* @desc Does the boat use an 8 directional sprite.
* @default false
* @type boolean
* @parent vehicleSettings

* @param ship8Dir
* @text 8 Directional Ship
* @desc Does the ship use an 8 directional sprite.
* @default false
* @type boolean
* @parent vehicleSettings

* @param airship8Dir
* @text 8 Directional Airship
* @desc Does the airship use an 8 directional sprite.
* @default false
* @type boolean
* @parent vehicleSettings

* @param regionRestrictions
* @text REGION RESTRICTIONS:
* @desc Do not edit this section.
* @default
* @type text

* @param characterRestrictedRegions
* @text Character Restricted Regions
* @desc List any regions that players & events will not be able to pass( regions will be a fully impassible tile ).
* @default
* @type number[]
* @min 1
* @max 255
* @parent regionRestrictions

* @param playerRestrictedRegions
* @text Player Restricted Regions
* @desc List any regions that the player will not be able to pass( regions will be a fully impassible tile ).
* @default
* @type number[]
* @min 1
* @max 255
* @parent regionRestrictions

* @param eventRestrictedRegions
* @text Event Restricted Regions
* @desc List any regions that events will not be able to pass( regions will be a fully impassible tile ).
* @default
* @type number[]
* @min 1
* @max 255
* @parent regionRestrictions

*/

/*~struct~Audio:

* @param name
* @text File
* @desc The name of the sound effect.
* @default
* @type file
* @dir /audio/se/

* @param volume
* @text Volume
* @desc Volume level of the sound effect.
* @default 90
* @type number
* @min 0
* @max 100

* @param pitch
* @text Pitch
* @desc The pitch of the sound effect.
* @default 100
* @type number
* @min 50
* @max 150

* @param pan
* @text Pan
* @desc The pan of the volume.
* @default 0
* @type number
* @min -100
* @max 100

*/

/*~struct~RegionTraction:

* @param regionId
* @text Region ID
* @desc The ID of the region that will have the traction altering effects.
* @default 1
* @type number
* @min 1
* @max 255

* @param traction
* @text Traction
* @desc The start speed( or traction ) on this region.
* @default 1.0000
* @type number
* @min 0.0001
* @max 1.0000
* @decimals 4

* @param friction
* @text Friction
* @desc the stop speed( or friction ) on this region.
* @default 1.0000
* @type number
* @min 0.0000
* @max 1.0000
* @decimals 4

*/

/*~struct~Circle:

* @param x
* @text X
* @desc The offset x position of the circle.
* @default 0
* @type number
* @min -1000
* @max 1000

* @param y
* @text Y
* @desc The offset y position of the circle.
* @default 0
* @type number
* @min -1000
* @max 1000

* @param radius
* @text Radius
* @desc The radius of the circle.
* @default 24
* @type number
* @min 6
* @max 100

*/

//=============================================================================
var Imported = Imported || {};
var SDragon = SDragon || {};
Imported['Collision Altering Plugin'.toUpperCase()] = true;
//=============================================================================
var Chaucer = Chaucer || {};
Chaucer.CAP = {};
//=============================================================================

//=============================================================================
// PathManager :
//=============================================================================

//=============================================================================
class PathManager
{ // PathManager

//=============================================================================
  constructor()
  { // Called on object creation.
//=============================================================================

    throw new Error( 'This is a static class!' );

  }

//=============================================================================
  static createGrid( start, end, character )
  { // create a grid with start and end goal in mind.
//=============================================================================

    const grid = [];
    const width = $gameMap.width();
    const height = $gameMap.height();

    let startX = start.x < end.x ? start.x : end.x;
    let startY = start.y < end.y ? start.y : end.y;
    let endX = start.x > end.x ? start.x : end.x;
    let endY = start.y > end.y ? start.y : end.y;

    let max = ( Math.max( endX - startX, endY - startY ) ).clamp( 5, 12 );

    startX = ( startX - max ).clamp( 0, width );
    startY = ( startY - max ).clamp( 0, height );
    endX = ( endX + max ).clamp( 0, width );
    endY = ( endY + max ).clamp( 0, height );

    for ( let x = 0, length1 = endX - startX; x <= length1; x++ ) {
      grid[x] = [];
      for ( let y = 0, length2 = endY - startY; y <= length2; y++ ) {
        grid[x][y] = new Node( startX + x, startY + y );
        grid[x][y].colliders = character.mapCollidersAtPos( startX + x, startY + y );
      }
    }

    grid.start = new Vector2( startX, startY );
    grid.end = new Vector2( endX, endY );
    grid.characters = character.getCharacterColliders();
    grid.startNode = this.findNodeAtPosition( start, grid );
    grid.endNode = this.findNodeAtPosition( end, grid );
    grid.currentNode = grid.startNode;
    grid.searching = [grid.startNode];
    grid.searched  = [];
    grid.path = [];
    grid.path.status = 'searching';

    this.createRaysForGrid( grid, character );

    return grid;

  }

//=============================================================================
  static createRaysForGrid( grid, character )
  { // create all rays that will be used in this grid.
//=============================================================================

    const tw = $gameMap.tileWidth();
    const collider = character.getColliderAt( new Vector2( 0, 0 ) );
    const center = Vector2.reversed( Vector2.divide( collider.center, tw ) );

    let v = {
      1: { start: center, end: Vector2.add( center, new Vector2( -1, 1 ) ) },
      2: { start: center, end: Vector2.add( center, new Vector2( 0, 1 ) ) },
      3: { start: center, end: Vector2.add( center, new Vector2( 1, 1 ) ) },
      4: { start: center, end: Vector2.add( center, new Vector2( -1, 0 ) ) },
      6: { start: center, end: Vector2.add( center, new Vector2( 1, 0 ) ) },
      7: { start: center, end: Vector2.add( center, new Vector2( -1, -1 ) ) },
      8: { start: center, end: Vector2.add( center, new Vector2( 0, -1 ) ) },
      9: { start: center, end: Vector2.add( center, new Vector2( 1, -1 ) ) },
    }

    grid.rays = {
      1: this.getRaysForPath( v[1].start, v[1].end, character ),
      2: this.getRaysForPath( v[2].start, v[2].end, character ),
      3: this.getRaysForPath( v[3].start, v[3].end, character ),
      4: this.getRaysForPath( v[4].start, v[4].end, character ),
      6: this.getRaysForPath( v[6].start, v[6].end, character ),
      7: this.getRaysForPath( v[7].start, v[7].end, character ),
      8: this.getRaysForPath( v[8].start, v[8].end, character ),
      9: this.getRaysForPath( v[9].start, v[9].end, character )
    }

  }

//=============================================================================
  static findNodeAtPosition( position, grid )
  { // find a node at the position specified.
//=============================================================================

    const { start, end } = grid;
    const x = position.x - start.x;
    const y = position.y - start.y;

    if ( !grid[x] ) return null;
    return grid[x][y] || null;

  }

//=============================================================================
  static heuristic( a, b )
  { // determine distance between two nodes.
//=============================================================================

    const x = Math.abs( a.x - b.x );
    const y = Math.abs( a.y - b.y );
    return x + y

  }

//=============================================================================
  static collidedWithChar( rays, collider, colliders )
  { // return if any colllision's with characters occured.
//=============================================================================

    let subject = null;
    if ( collider._eventId ) {
      subject = collider._eventId < 0 ? $gamePlayer : $gameMap.event( collider._eventId );

    } else if ( collider._vehicleType ) {
      subject = $gameMap.vehicle( collider._vehicleType );

    }
    const isChase = !!subject._targetObject
    return colliders.some( c => {

      let char = null;
      if ( c._eventId ) {
        char = c._eventId < 0 ? $gamePlayer : $gameMap.event( c._eventId );
        if ( !char || !char.isNormalPriority() ) return false;

      } else if ( c._vehicleType ) {
        char = $gameMap.vehicle( c._vehicleType );
        if ( !char || !char.isNormalPriority() ) return false;

      }
      if ( isChase && char == subject._targetObject ) return false;
      if ( !!CollisionManager.rayCastShortest( rays[0], c ) ) return true;
      if ( !!CollisionManager.rayCastShortest( rays[1], c ) ) return true;
      if ( !!CollisionManager.rayCastShortest( rays[2], c ) ) return true;
      if ( !!CollisionManager.testCollision( c, collider ) ) return true;

      return false;

    } );

  }

//=============================================================================
  static isCollidedWithMap( rays, collider, colliders, isEnd, isChase, grid )
  { // Definition.
//=============================================================================

    return colliders.some( c => {

      if ( c ) {
        if ( !!CollisionManager.rayCastShortest( rays[0], c ) ) return true;
        if ( !!CollisionManager.rayCastShortest( rays[1], c ) ) return true;
        if ( !!CollisionManager.rayCastShortest( rays[2], c ) ) return true;
        if ( !!CollisionManager.testCollision( c, collider ) ) return true;
      }

      return false;

    } );

  }

//=============================================================================
  static getShapeRadius( collider, start, end  )
  { // return radius to use based on start and end.
//=============================================================================

    let radius = collider.radius || 0;
    if ( !radius ) {

      const { width, height } = collider;

      const sx = Math.abs( start.x - end.x ) * width;
      const sy = Math.abs( start.y - end.y ) * height;

      if ( sx && !sy ) {
        radius = sx;

      } else if ( sy && !sx ) {
        radius = sy;
      } else {
        radius = Math.sqrt( sx * sx + sy * sy );

      }

    }

    return radius - 0.0001;

  }

//=============================================================================
  static getRaysForPath( start, end, character )
  { // return two rays to determine collisions along the path.
//=============================================================================

    const vec2 = Vector2.subtract( end, start );
    const tw = $gameMap.tileWidth();
    let length = vec2.x && vec2.y ? Math.sqrt( tw * tw + tw * tw ) : tw;
    let count = 3;
    let rays = character.getRaysToward( count, vec2, length, start );

    for ( let i = 0, l = rays.length; i < l; i++ ) {
      rays[i].origin = Vector2.clone( rays[i]._start );
    };

    return rays;

  }

//=============================================================================
  static fetchMapCollidersIn( minX, minY, maxX, maxY, character )
  { // fetch map colliders between the tiles provided.
//=============================================================================

    let results = [];
    for ( let i = minY, l0 = maxY; i <= l0; i++ ) {
      for ( let j = minX, l1 = maxX; j <= l1; j++ ) {
        results = results.concat( character.mapCollidersAtPos( j, i ) );
      };
    };

    return results;

  }

//=============================================================================
  static getRaysFromDirection( vec2, position, grid )
  { // return the appropriate rays from the direction vector provided.
//=============================================================================

    let d = 0;
    let rays = null;

    if ( vec2.x && vec2.y ) {
      if ( vec2.x == -1 && vec2.y == 1 ) d = 1
      if ( vec2.x == 1 && vec2.y == 1 ) d = 3
      if ( vec2.x == -1 && vec2.y == -1 ) d = 7
      if ( vec2.x == 1 && vec2.y == -1 ) d = 9

    } else if ( vec2.x ) {
      d = vec2.x > 0 ? 6 : 4;

    } else if ( vec2.y ) {
      d = vec2.y > 0 ? 2 : 8;

    }
    if ( !d ) return rays;

    rays = grid.rays[d];

    for ( let i = 0, l = rays.length; i < l; i++ ) {
      rays[i]._start = Vector2.add( position, rays[i].origin );
    };

    return rays;

  }

//=============================================================================
  static canMoveToNode( character, last, node, grid )
  { // return if the chraracter can move to the node in the grid.
//=============================================================================

    const isStart = Vector2.equals( grid.startNode, last )
    const coordinate = isStart ? character.position : last;
    const collider = character.getColliderAt( node );
    const center = collider.center;
    const direction = Vector2.subtract( coordinate, node );
    const magnitude = Math.round( direction.magnitude * $gameMap.tileWidth() );

    let rays = this.getRaysFromDirection( direction, center, grid );
// TODO: I ma here...
    rays = rays || this.getRaysForPath( coordinate, node, character );

    rays.forEach( ray  => {
      ray._end.magnitude = magnitude;
    } );

    let minX = Math.min( last.x, node.x );
    let minY = Math.min( last.y, node.y );
    let maxX = Math.max( last.x, node.x );
    let maxY = Math.max( last.y, node.y );

    const c0 = this.fetchMapCollidersIn( minX, minY, maxX, maxY, character );
    const c1 = grid.characters;

    const isFinal = Vector2.equals( grid.endNode, node );
    const isChase = !!character._targetObject;

    if ( this.collidedWithChar( rays, collider, c1 ) )  {
      return false;
    }


    if ( isChase && isFinal ) {
      if ( character.canMoveToTarget( character._targetObject, 5  , last ) ) {
        return true;
      }
    }

    return !this.isCollidedWithMap( rays, collider, c0, isFinal, isChase, grid );

  }

//=============================================================================
  static pushToNeighbors( node, grid, searching, searched, character )
  { // Definition.
//=============================================================================

    for ( let x = node.x - 1, length = node.x + 1; x <= length; x++ ) {
      for ( let y = node.y - 1, length = node.y + 1; y <= length; y++ ) {

        if ( x == node.x && y == node.y ) continue;

        const position = new Vector2( x, y );
        const neighbor = this.findNodeAtPosition( position, grid );
        let gScore = 1;

        if ( neighbor ) {
          const dx = Math.abs( node.x - neighbor.x );
          const dy = Math.abs( node.y - neighbor.y );
          if ( dx + dy == 2 ) gScore = 1.4142135623730951;
        }

        gScore += node.g;

        if ( !neighbor ) continue;

        if ( !this.canMoveToNode( character, node, neighbor, grid ) ) {
          // if ( node.x - neighbor.x == 0 || node.y - neighbor.y == 0 ) {
          //   searched.push( neighbor );
          // }

        } else if ( !searched.includes( neighbor ) ) {
          searching.push( neighbor );
          searched.push( neighbor );
          neighbor.g = gScore;
          neighbor.h = this.heuristic( neighbor, node )
          neighbor.f = neighbor.g + neighbor.h;
            neighbor.from = node;

        } else if ( searching.includes( neighbor ) )  {
          if ( gScore < neighbor.g ) {
            neighbor.g = gScore;
            neighbor.h = this.heuristic( neighbor, grid.endNode )
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.from = node;
          }

        }
      }
    }

  }

//=============================================================================
  static async findPath( character, end, chunkSize, grid = null )
  { // find a path to the goal specified.
//=============================================================================

    let start = Vector2.round( character.position );
    end = Vector2.round( end );
    grid = grid || this.createGrid( start, end, character );
    const { startNode, endNode, searched, searching } = grid;
    let path = grid.path;

    let n = 0;
    let checked = 0;
    chunkSize = chunkSize || Chaucer.CAP.params.pathSearchSize;

    if ( !endNode ) return path;

    while ( searching.length > 0 ) {

      if ( searching[n] ) {
        for ( let i = 0, length = searching.length; i < length; i++ ) {
          if ( searching[i].f < searching[n].f ) n = i;
        }

      } else {
        n = searching.indexOf( searching.sort( ( a, b ) => a.f - b.f )[0] );

      }

      let currentNode = searching[n];

      if ( currentNode === endNode ) {
        path.status = 'complete';
        let node = currentNode;
        path.push( node );
        while ( node.from ) {
          path.push( node.from ); node = node.from;
        };
        break;
      }

      searched.push( currentNode );
      const nodeIndex = searching.indexOf( currentNode );
      searching.splice( nodeIndex, 1 );
      this.pushToNeighbors( currentNode, grid, searching, searched, character );
      checked++;

      if ( chunkSize > 0 && checked >= chunkSize ) {
        setTimeout( function() {
          this.findPath( character, end, chunkSize, grid )
        }.bind( this ), 17 );
        break;
      }

    }

    if ( character.x != end.x || character.y != end.y ) {
      if ( start.x == end.x && start.y == end.y ) {
        path.push( path[0] );
      }
    }

    if ( path.status !== 'complete' && searching.length == 0 ) {
      path.status = 'fail';
    }

    if ( path.status == 'complete' && path.oncomplete ) {
      this._path.oncomplete();
    }

    return path;

  }

//=============================================================================
  static async testNextMove( character )
  { // test the next move of the character.
//=============================================================================

    const path = character._path;
    const node = path[path.length - 1];
    const last = character.position;

    const collider = character.getColliderAt( node );
    const rays = this.getRaysForPath( last, node, character );

    let minX = Math.min( last.x, node.x );
    let minY = Math.min( last.y, node.y );
    let maxX = Math.max( last.x, node.x );
    let maxY = Math.max( last.y, node.y );

    const c0 = this.fetchMapCollidersIn( minX, minY, maxX, maxY, character );
    const c1 = character.getCharacterColliders();

    if ( this.collidedWithChar( rays, collider, c1 ) )  {
      return false;
    }

    return !this.isCollidedWithMap( rays, collider, c0 );

  }

}

//=============================================================================
window.PathManager = PathManager;
//=============================================================================

//=============================================================================
// Math :
//=============================================================================


//=============================================================================
Math.radToDeg = function( radians )
{ // change radians to degrees.
//=============================================================================

  return radians * 180 / Math.PI;

}

//=============================================================================
Math.degToRad = function( degrees )
{ // change degrees to radians.
//=============================================================================

  return degrees * Math.PI / 180;

}

//=============================================================================
class Vector2
{ // Vector2

//=============================================================================
constructor( x = 0, y = 0 )
{ // Called on object creation.
//=============================================================================

  const type = x.constructor.name;
  if ( Vector2.isArray( x ) ) {
    y = x[1];
    x = x[0];
  } else if ( Vector2.isObject( x ) ) {
    y = x.y;
    x = x.x;
  }

  this.x = x;
  this.y = y;

}

//=============================================================================
// PROPERTIES :
//=============================================================================

//=============================================================================
get x()
{ // return the value of x for this object.
//=============================================================================

  return this._x || 0;

}

//=============================================================================
set x( value )
{ // set the value of x for this object.
//=============================================================================

  this._x = value;

}

//=============================================================================
get y()
{ // return the value of y for this object.
//=============================================================================

  return this._y || 0;

}

//=============================================================================
set y( value )
{ // set the value of y for this object.
//=============================================================================

  this._y = value;

}

//=============================================================================
get length()
{ // return the length( non square root ).
//=============================================================================

  if ( this.x == 0 && this.y == 0 ) return 0;
  if ( this.x == 0 && this.y != 0 ) return Math.abs( this.y * this.y );
  if ( this.x != 0 && this.y == 0 ) return Math.abs( this.x * this.x );

  return this.x * this.x + this.y * this.y;

}

//=============================================================================
get magnitude()
{ // return the magnitude of the vector.
//=============================================================================

  if ( this.x == 0 && this.y == 0 ) return 0;
  if ( this.x == 0 && this.y != 0 ) return Math.abs( this.y );
  if ( this.x != 0 && this.y == 0 ) return Math.abs( this.x );

  return Math.sqrt( this.length );

}

//=============================================================================
set magnitude( value )
{ // return the magnitude of the sprite.
//=============================================================================

  if ( this.x != 0 && this.y == 0 ) {
    this.x = this.x < 0 ? -value : value;
    this.y = 0;
    return;
  }

  if ( this.x == 0 && this.y != 0 ) {
    this.x = 0;
    this.y = this.y < 0 ? -value : value;
    return;
  }

  const radians = this.radians - Math.PI / 2;

  let nx = Math.cos( radians );
  let ny = Math.sin( radians );

  if ( Math.abs( nx ) < Number.EPSILON ) nx = 0;
  if ( Math.abs( ny ) < Number.EPSILON ) ny = 0;

  this.x = nx * value;
  this.y = ny * value;

}

//=============================================================================
get radians()
{ // return the angle of the vector in radians.
//=============================================================================

  return Math.atan2( this.y, this.x ) + Math.PI / 2;

}

//=============================================================================
set radians( value )
{ // set the angle of this vector in radians.
//=============================================================================

  const magnitude = this.magnitude;
  const angle = value - Math.PI / 2;

  let nx = Math.cos( angle );
  let ny = Math.sin( angle );

  if ( Math.abs( nx ) < Number.EPSILON ) nx = 0;
  if ( Math.abs( ny ) < Number.EPSILON ) ny = 0;

  this.x = nx * magnitude;
  this.y = ny * magnitude;

}

//=============================================================================
get angle()
{ // return the angle of the vector in radians.
//=============================================================================

  return Math.radToDeg( this.radians ).mod( 360 );

}

//=============================================================================
set angle( value )
{ // set the angle of this vector in radians.
//=============================================================================

  this.radians = Math.degToRad( value );

}

//=============================================================================
// PROTOTYPE :
//=============================================================================

//=============================================================================
set( x, y )
{ // set the x and y value of the vector.
//=============================================================================

  this.x = x;
  this.y = y;

}

//=============================================================================
// STATIC :
//=============================================================================

//=============================================================================
static zero()
{ // return a blank vector.
//=============================================================================

  return new Vector2( 0, 0 );

}

//=============================================================================
static up()
{ // return a vector facing up.
//=============================================================================

  return new Vector2( 0, -1 );

}

//=============================================================================
static down()
{ // return a vector facing down.
//=============================================================================

  return new Vector2( 0, 1 );

}

//=============================================================================
static right()
{ // return a new vector facing right.
//=============================================================================

  return new Vector2( 1, 0 );

}

//=============================================================================
static left()
{ // return a new vector facing left.
//=============================================================================

  return new Vector2( -1, 0 );

}

//=============================================================================
static isArray( value )
{ // return if the value is an array.
//=============================================================================

  return value.constructor.name == 'Array';

}

//=============================================================================
static isObject( value )
{ // return if the value is a vector or point or object.
//=============================================================================

  const type = value.constructor.name;

  if ( type == 'Point' ) return true;
  if ( type == 'Object' ) return true;
  if ( type == 'Vector2' ) return true;

  return false;

}

//=============================================================================
  static round( vec2 )
  { // return the vector2 with rounded values.
//=============================================================================

    return new Vector2( Math.round( vec2.x ), Math.round( vec2.y ) );

  }

//=============================================================================
static add( vec2a, vec2b )
{ // add two vector2's together.
//=============================================================================

  const x = vec2a.x + vec2b.x;
  const y = vec2a.y + vec2b.y;

  return new Vector2( x, y );

}

//=============================================================================
static subtract( vec2a, vec2b )
{ // add two vector2's together.
//=============================================================================

  const x = vec2a.x - vec2b.x;
  const y = vec2a.y - vec2b.y;

  return new Vector2( x, y );

}

//=============================================================================
static multiply( vec2, value )
{ // multiply a vector by the value passed.
//=============================================================================

  const out = new Vector2( vec2.x, vec2.y );

  if ( Vector2.isArray( value ) ) { // Array
    out.x *= value[0];
    out.y *= value[1];

  } else if ( Vector2.isObject( value ) ) { // Vector
    out.x *= value.x;
    out.y *= value.y;

  } else { // Number
    out.x *= value;
    out.y *= value;

  }

  return out;

}

//=============================================================================
static divide( vec2, value )
{ // multiply a vector by the value passed.
//=============================================================================

  const out = new Vector2( vec2.x, vec2.y );

  if ( Vector2.isArray( value ) ) { // Array
    out.x /= value[0];
    out.y /= value[1];

  } else if ( Vector2.isObject( value ) ) { // Vector
    out.x /= value.x;
    out.y /= value.y;

  } else { // Number
    out.x /= value;
    out.y /= value;

  }

  return out;

}

//=============================================================================
static dot( vec2a, vec2b )
{ // return dot product of two vectors.
//=============================================================================

  return vec2a.x * vec2b.x + vec2a.y * vec2b.y;

}

//=============================================================================
static cross( vec2a, vec2b )
{ // return the cross product of two vectors.
//=============================================================================

  return vec2a.x * vec2b.y - vec2a.y * vec2b.x;

}

//=============================================================================
static angleBetween( vec2a, vec2b )
{ // return the angle btween two vectors.
//=============================================================================

  return vec2a.angle - vec2b.angle;

}

//=============================================================================
static angleTo( vec2a, vec2b )
{ // return the angle between two vectors.
//=============================================================================

  const x = vec2a.x - vec2b.x;
  const y = vec2a.y - vec2b.y;

  return Math.radToDeg( Math.atan2( y, x ) + Math.PI / 2 );

}

//=============================================================================
static normalized( vec2 )
{ // return the vector provided as a normal.
//=============================================================================

  let x, y;
  if ( ( vec2.x && !vec2.y ) || ( !vec2.x && vec2.y ) ) {
    x = Math.sign( vec2.x );
    y = Math.sign( vec2.y );

  } else {
    const magnitude = vec2.magnitude;
    x = ( vec2.x / magnitude ) || 0;
    y = ( vec2.y / magnitude ) || 0;

  }

  return new Vector2( x, y );

}

//=============================================================================
static equals( vec2a, vec2b )
{ // return if two vectors are equal to one another.
//=============================================================================

  const x = vec2a.x - vec2b.x;
  const y = vec2a.y - vec2b.y;

  if ( Math.abs( x ) > 0.0000000001 ) return false;
  if ( Math.abs( y ) > 0.0000000001 ) return false;

  return true;

}

//=============================================================================
static distanceBetween( vec2a, vec2b )
{ // return the distance between two vectors.
//=============================================================================

  const x = vec2a.x - vec2b.x;
  const y = vec2a.y - vec2b.y;

  return Math.sqrt( x * x + y * y );

}

//=============================================================================
static reversed( vec2 )
{ // return a vector2 in the opposite direction.
//=============================================================================

  return new Vector2( -vec2.x, -vec2.y );

}

//=============================================================================
static clone( vec2 )
{ // return an exact copy of the vector provided.
//=============================================================================

  return new Vector2( vec2.x, vec2.y );

}

//=============================================================================
static projectOnto( vec2a, vec2b )
{ // project vector onto another.
//=============================================================================

  const dp1 = Vector2.dot( vec2b, vec2b );

  if ( dp1 <= 0 ) return new Vector2( 0, 0 );

  const dp2 = Vector2.dot( vec2a, vec2b );
  const n = dp2 / dp1;

  return new Vector2( vec2b.x * n, vec2b.y * n );

}

}

//=============================================================================
window.Vector2 = Vector2;
window.Vector = Vector2;
//=============================================================================

//=============================================================================
// Node :
//=============================================================================

//=============================================================================
class Node extends Vector2
{ // Node

//=============================================================================
  constructor( x, y )
  { // Called on object creation.
//=============================================================================

    super( x, y );

    this.from = null;
    this.f = 0;
    this.g = 0;
    this.h = 0;

  }

}

//=============================================================================
window.Node = Node;
//=============================================================================

//=============================================================================
// Segment :
//=============================================================================

//=============================================================================
class Segment
{ // Segment

//=============================================================================
constructor( x, y, vx, vy )
{ // Called on object creation.
//=============================================================================

  this._start = new Vector2( x, y );
  this._end = new Vector2( vx, vy );

}

//=============================================================================
// PROPERTIES :
//=============================================================================

//=============================================================================
get aabb()
{ // return an axis aligned bounding box for this segment.
//=============================================================================

  const x1 = this._start.x;
  const y1 = this._start.y;
  const x2 = this._start.x + this._end.x;
  const y2 = this._start.y + this._end.y;

  const x = Math.min( x1, x2 );
  const y = Math.min( y1, y2 );
  const width = Math.max( x1, x2 );
  const height = Math.max( y1, y2 );

  return new Rect( x, y, width - x, height - y );

}

//=============================================================================
  get center()
  { // return the center of the line.
//=============================================================================

    return CollisionManager.getLineCenter( this );

  }

//=============================================================================
get x()
{ // return the position start x position.
//=============================================================================

  return this._start.x;

}

//=============================================================================
set x( value )
{ // set the position start x position.
//=============================================================================

  this._start.x = value;

}

//=============================================================================
get y()
{ // return the position start y position.
//=============================================================================

  return this._start.y;

}

//=============================================================================
set y( value )
{ // set the position start y position.
//=============================================================================

  this._start.y = value;

}

//=============================================================================
get vx()
{ // return the end vx position.
//=============================================================================

  return this._end.x;

}

//=============================================================================
set vx( value )
{ // set the end vx position.
//=============================================================================

  this._end.x = value;

}

//=============================================================================
get vy()
{ // return the end vy position.
  //=============================================================================

  return this._end.y;

}

//=============================================================================
set vy( value )
{ // set the end vy position.
  //=============================================================================

  this._end.y = value;

}

//=============================================================================
get surfaceNormal()
{ // return the surfaceNormal of the segment.
//=============================================================================

  const magnitude = this._end.magnitude;
  const x = this.vy / magnitude;
  const y =  -this.vx / magnitude;

  if ( this.polygon && this.polygon.isCCW ) return new Vector2( -x, -y );

  return new Vector2( x, y );

}

//=============================================================================
// STATIC :
//=============================================================================


//=============================================================================
static projectOnto( seg1, seg2 )
{ // project a segment onto another.
//=============================================================================

  const a = Vector2.clone( seg1._start );
  const b = Vector2.projectOnto( seg1._end, seg2._end );
  return new Segment( a.x, a.y, b.x, b.y );

}

//=============================================================================
// PROTOTYPE :
//=============================================================================

//=============================================================================
  divide( scalar )
  { // divide the size by scalar provided.
//=============================================================================

    this.x /= scalar;
    this.y /= scalar;
    this.vx /= scalar;
    this.vy /= scalar;

  }

//=============================================================================
  multiply( scalar )
  { // divide the size by scalar provided.
//=============================================================================

    this.x *= scalar;
    this.y *= scalar;
    this.vx *= scalar;
    this.vy *= scalar;

  }

//=============================================================================
  normalSign( vec2 )
  { // return if the point is to the left or right of this line segment.
//=============================================================================

    const vec2a = this._end;
    const vec2b = Vector2.subtract( vec2, this._start );
    let sign = Math.sign( Vector2.cross( vec2a, vec2b ) ) || 1;

    if ( this.polygon && !this.polygon.isCCW ) {
      sign = -sign;
    }

    return sign;

  }

//=============================================================================
  getSurfaceNormal( vec2 )
  { // get the surface normal based on the position of vec2.
//=============================================================================

    return Vector2.multiply( this.surfaceNormal, this.normalSign( vec2 ) );

  }

}

//=============================================================================
window.Segment = Segment;
//=============================================================================

//=============================================================================
// Rect :
//=============================================================================

//=============================================================================
class Rect
{ // Rect

//=============================================================================
constructor( x, y, width, height )
{ // Called on object creation.
//=============================================================================

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.angle = 0;

}

//=============================================================================
  get center()
  { // return the center of the rectangle.
//=============================================================================

    return new Vector2( this.x + this.width / 2, this.y + this.height / 2 );

  }

//=============================================================================
get aabb()
{ // return the aabb based on the shape.
//=============================================================================

  return this;

}

//=============================================================================
// PROPERTIES :
//=============================================================================

//=============================================================================
get points()
{ // return the points for this rectangle.
//=============================================================================

  return [
    new Vector2( 0, 0 ),
    new Vector2( this.width, 0 ),
    new Vector2( 0 + this.width, 0 ),
    new Vector2( 0, this.height ),
    new Vector2( 0 + this.width, 0 + this.height ),
    new Vector2( -this.width, 0 ),
    new Vector2( 0, 0 + this.height ),
    new Vector2( 0, -this.height ),
  ]

}

//=============================================================================
get rotatedPoints()
{ // return the rotated points for this shape.
//=============================================================================

  const points = this.points;
  const { x, y, width, height } = this;
  const center = new Vector2( width / 2, height / 2 );
  const angle = this.angle;

  for ( let i = 0, l = points.length; i < l; i += 2 ) {

    const p1 = Vector2.subtract( points[i + 0], center );
    p1.x = p1.x * Math.cos( angle ) - p1.y * Math.sin( angle );
    p1.y = p1.x * Math.sin( angle ) + p1.y * Math.cos( angle );
    points[i] = Vector2.add( p1, center );

    const p2 = Vector2.subtract( points[i + 1], center );
    p2.x = p2.x * Math.cos( angle ) - p2.y * Math.sin( angle );
    p2.y = p2.x * Math.sin( angle ) + p2.y * Math.cos( angle );
    points[i] = Vector2.add( p2, center );

  }

}

//=============================================================================
// PROTOTYPE :
//=============================================================================

//=============================================================================
divide( scalar )
{ // divide the size by scalar provided.
//=============================================================================

  this.width /= scalar;
  this.height /= scalar;

}

//=============================================================================
multiply( scalar )
{ // divide the size by scalar provided.
//=============================================================================

  this.width *= scalar;
  this.height *= scalar;

}

}

//=============================================================================
window.Rect = Rect;
//=============================================================================

//=============================================================================
// Circle :
//=============================================================================

//=============================================================================
class Circle
{ // Circle

//=============================================================================
constructor( x, y, radius )
{ // Called on object creation.
//=============================================================================

  this.x = x;
  this.y = y;
  this.radius = radius;

}

//=============================================================================
// PROPERTIES :
//=============================================================================

//=============================================================================
  get center()
  { // return the center of the rectangle.
//=============================================================================

    return new Vector2( this.x, this.y );

  }

//=============================================================================
  get aabb()
  { // return the width of the circle.
//=============================================================================

    const x = this.x - this.radius;
    const y = this.y - this.radius;
    const width = this.radius * 2;
    const height = this.radius * 2;

    return new Rect( x, y, width, height );

  }

//=============================================================================
  get points()
  { // return the points of this collider.
//=============================================================================

    return [
      new Vector2( 0, 0 ),
      new Vector2( this.radius, 0 )
    ];

  }

//=============================================================================
// PROTOTYPE :
//=============================================================================

//=============================================================================
divide( scalar )
{ // divide the size by scalar provided.
//=============================================================================

  this.radius /= scalar;

}

//=============================================================================
multiply( scalar )
{ // multiply the size by scalar provided.
//=============================================================================

  this.radius *= scalar;

}

}

//=============================================================================
window.Circle = Circle;
//=============================================================================

//=============================================================================
// Polygon :
//=============================================================================

//=============================================================================
class Polygon
{ // Polygon

//=============================================================================
constructor( segments = [] )
{ // Called on object creation.
//=============================================================================

  this._x = 0;
  this._y = 0;
  this._points = [];

  for ( let i = 0, l = segments.length; i < l; i++ ) {

    const seg = segments[i];

    this._points.push( new Vector2( seg[0], seg[1] ) );
    this._points.push( new Vector2( seg[2], seg[3] ) );

  }

}

//=============================================================================
// PROPERTIES :
//=============================================================================

//=============================================================================
  get center()
  { // return the center of the polygon.
//=============================================================================

    return CollisionManager.getPolygonCenter( this );

  }

//=============================================================================
  get aabb()
  { // return axis aligned bounding box.
//=============================================================================

    const rects = CollisionManager.segmentsFromShape( this ).map( seg => {
      return seg.aabb;
    } );

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for ( let i = 0, l = rects.length; i < l; i++ ) {

      const x1 = rects[i].x;
      const y1 = rects[i].y;
      const x2 = rects[i].x + rects[i].width;
      const y2 = rects[i].y + rects[i].height;

      if ( x1 < minX ) minX = x1;
      if ( y1 < minY ) minY = y1;
      if ( x2 > maxX ) maxX = x2;
      if ( y2 > maxY ) maxY = y2;

    }

    return new Rect( minX, minY, maxX - minX, maxY - minY );

  }

//=============================================================================
get x()
{ // return the position on x axis.
//=============================================================================

  return this._x;

}

//=============================================================================
set x( value )
{ // return the position on x axis.
//=============================================================================

  this._x = value;

}

//=============================================================================
get y()
{ // return the position on y axis.
//=============================================================================

  return this._y;

}

//=============================================================================
set y( value )
{ // return the position on y axis.
//=============================================================================

  this._y = value;

}

//=============================================================================
get points()
{ // return the points for this polygon.
//=============================================================================

  return this._points

}

//=============================================================================
// PROTOTYPE :
//=============================================================================

//=============================================================================
divide( scalar )
{ // divide the size by scalar provided.
//=============================================================================

  this._points = this._points.map( n => Vector.divide( n, scalar ) );

}

//=============================================================================
multiply( scalar )
{ // divide the size by scalar provided.
//=============================================================================

  this._points = this._points.map( n => Vector2.multiply( n, scalar ) );

}

}

//=============================================================================
window.Polygon = Polygon
//=============================================================================

//=============================================================================
// CollisionManager :
//=============================================================================

//=============================================================================
class CollisionManager
{ // CollisionManager

//=============================================================================
constructor()
{ // Called on object creation.
//=============================================================================

  throw new Error( "This is a static class!" );

}

//=============================================================================
// STATIC :
//=============================================================================

//=============================================================================
static isPoint( shape )
{ // return if the shape is a segment.
//=============================================================================

  return shape.constructor.name == 'Vector2';

}

//=============================================================================
static isSegment( shape )
{ // return if the shape is a segment.
//=============================================================================

  return shape.constructor.name == 'Segment';

}

//=============================================================================
static isRect( shape )
{ // return if the shape is a rectangle.
//=============================================================================

  return shape.constructor.name == 'Rect';

}

//=============================================================================
static isCircle( shape )
{ // return if the shape is a circle.
//=============================================================================

  return shape.constructor.name == 'Circle';

}

//=============================================================================
static isPolygon( shape )
{ // return if the shape is a circle.
//=============================================================================

  return shape.constructor.name == 'Polygon';

}

//=============================================================================
static isValidShape( shape )
{ // Definition.
//=============================================================================

  if ( !shape ) return false;
  if ( this.isSegment( shape ) ) return true;
  if ( this.isRect( shape ) ) return true;
  if ( this.isCircle( shape ) ) return true;
  if ( this.isPolygon( shape ) ) return true;

  return false;

}

//=============================================================================
static segmentsFromShape( shape )
{ // return segments from th shape provided.
//=============================================================================

  if ( !this.isValidShape( shape ) ) return [];
  if ( this.isSegment( shape ) ) return [shape];

  const segments = [];
  const points = shape.points;

  for ( let i = 0, l = points.length; i < l; i += 2 ) {

    const { x:x, y:y } = Vector2.add( points[i], shape );
    const { x:vx, y:vy } = Vector2.clone( points[i + 1] );
    const segment = new Segment( x, y, vx, vy );

    segments.push( segment );
    segment.polygon = shape;

  }

  return segments;

}

//=============================================================================
  static aabbCollided( a, b )
  { // return if the axis aligned bounding boxes are collided.
//=============================================================================

    if ( !a || !b ) return false;

    const r1 = a.aabb || a;
    const r2 = b.aabb || b;

    const x = r1.x < r2.x + r2.width && r1.x + r1.width > r2.x;
    const y = r1.y < r2.y + r2.height && r1.y + r1.height > r2.y;

    return x && y;

  }

//=============================================================================
  static isInsideShape( c, p )
  { // return if the point is inside the polygon.
//=============================================================================

    // let hits1 = [];
    // let hits2 = [];
    //
    // const segments = this.segmentsFromShape( p );
    // const ray1 = new Segment( c.x, c.y, 0, c.radius * 500 );
    // const ray2 = new Segment( c.x, c.y, 0, c.radius * 500 );
    //
    // for ( let i = 0, l = segments.length; i < l; i++ ) {
    //
    //   const hit1 = CollisionManager.testCollision( ray1, segments[i] );
    //   const hit2 = CollisionManager.testCollision( ray2, segments[i] );
    //   if ( hit1 ) hits1.push( hit1 );
    //   if ( hit2 ) hits2.push( hit2 );
    //
    // }
    //
    // return !!( hits1.length % 2 ) && !!( hits2.length % 2 );

  }

//=============================================================================
  static testCollisions( shape, shapes )
  { // test collision against multiple shapes.
//=============================================================================

    let hits = [];

    for ( let i = 0, l = shapes.length; i < l; i++ ) {

      const hit = this.testCollision( shape, shapes[i] );
      if ( hit ) hits.push( hit );

    }

    return hits;

  }

//=============================================================================
static testCollision( shape1, shape2 )
{ // test for collision between two shapes.
//=============================================================================

if ( !this.isValidShape( shape1 ) || !this.isValidShape( shape2 ) ) {
    return null;

  } else if ( !this.aabbCollided( shape1, shape2 ) ) {
    return null;

  } else if ( this.isSegment( shape1 ) && this.isSegment( shape2 ) ) {
    return this.LineXLine( shape1, shape2 );

  } else if ( this.isSegment( shape1 ) && this.isRect( shape2 ) ) {
    return this.LineXRect( shape1, shape2 );

  } else if ( this.isSegment( shape2 ) && this.isRect( shape1 ) ) {
    return this.LineXRect( shape2, shape1 );

  } else if ( this.isSegment( shape1 ) && this.isPolygon( shape2 ) ) {
    return this.LineXPolygon( shape1, shape2 );

  } else if ( this.isSegment( shape2 ) && this.isPolygon( shape1 ) ) {
    return this.LineXPolygon( shape2, shape1, true );

  } else if ( this.isSegment( shape1 ) && this.isCircle( shape2 ) ) {
    return this.LineXCircle( shape1, shape2 );

  } else if ( this.isSegment( shape2 ) && this.isCircle( shape1 ) ) {
    return this.LineXCircle( shape2, shape1, true );

    } else if ( this.isPolygon( shape1 ) && this.isRect( shape2 ) ) {
      return this.PolygonXRect( shape1, shape2 );

    } else if ( this.isPolygon( shape2 ) && this.isRect( shape1 ) ) {
      return this.PolygonXRect( shape2, shape1 );

  } else if ( this.isCircle( shape1 ) && this.isRect( shape2 ) ) {
    return this.CircleXRect( shape1, shape2 );

  } else if ( this.isCircle( shape2 ) && this.isRect( shape1 ) ) {
    return this.CircleXRect( shape2, shape1, true );

  } else if ( this.isCircle( shape1 ) && this.isPolygon( shape2 ) ) {
    return this.CircleXPolygon( shape1, shape2 );

  } else if ( this.isCircle( shape2 ) && this.isPolygon( shape1 ) ) {
    return this.CircleXPolygon( shape2, shape1, true );

  } else if ( this.isPoint( shape1 ) && this.isCircle( shape2 ) ) {
    return this.PointXCircle( shape1, shape2 );

  } else if ( this.isPoint( shape2 ) && this.isCircle( shape1 ) ) {
    return this.PointXCircle( shape2, shape1 );

  } else if ( this.isCircle( shape1 ) && this.isCircle( shape2 ) ) {
    return this.CircleXCircle( shape1, shape2 );

  } else if ( this.isRect( shape1 ) && this.isRect( shape2 ) ) {
    return this.RectxRect( shape1, shape2 );

  } else if ( this.isPolygon( shape1 ) && this.isPolygon( shape2 ) ) {
    return this.PolygonxPolygon( shape1, shape2 );

  }

  return null;

}

//=============================================================================
static LineXLine( a, b )
{ // check for collision between two lines.
//=============================================================================

  let hit = null;
  const cross = Vector2.cross( a._end, b._end );

  const i1 = ( ( b.x - a.x ) * a.vy - ( b.y - a.y ) * a.vx ) / cross;
  const i2 = ( ( b.x - a.x ) * b.vy - ( b.y - a.y ) * b.vx ) / cross;

  if ( i2 >= 0 && i2 <= 1 && i1 >= 0 && i1 <= 1 ) {

    const offset = Vector2.multiply( new Vector2( a.vx, a.vy ), i2 );

    let overlap = Vector2.subtract( a._end, offset );
    let normal = b.getSurfaceNormal( a._start );

    hit = { overlap, normal };

  }

  if ( hit ) {
    hit.a = a;
    hit.b = b;
  }

  return hit;

}

//=============================================================================
static LineXPolygon( s, p, reversed )
{ // get collision of a line and a poygon.
//=============================================================================

  let hit = null;
  let a = this.segmentsFromShape( p );

  for ( let i = 0, l = a.length; i < l; i++ ) {

    if ( !this.aabbCollided( s.aabb, a[i].aabb ) ) continue;
    const temp = this.LineXLine( s, a[i] );

    if ( !hit )
      hit = temp;

    else if ( temp && temp.overlap.magnitude > hit.overlap.magnitude )
      hit = temp;

  }

  if ( hit && reversed ) {
    hit.overlap = Vector2.reversed( hit.overlap );
    hit.a = p;
    hit.b = s;

  } else if ( hit ) {
    hit.a = s;
    hit.b = p;

  }

  return hit;

}

//=============================================================================
static rayCastShortest( s, p )
{ // get collision of a line and a poygon.
//=============================================================================

  let hit = null;
  const lineXLine = this.LineXLine;

  if ( !this.aabbCollided( s, p ) ) return hit;

  if ( CollisionManager.isCircle( p ) ) {

    const circle = p;
    const segment = s;

    const { _start: start, _end: end } = segment;
    const { x: cx, y: cy, radius:r } = circle;

    const v1 = start;
    const v2 = Vector2.add( start, end );

    const delta = Vector2.subtract( v2, v1 );
    const a = delta.length;
    const b = 2 * ( delta.x * ( v1.x - cx ) + delta.y * ( v1.y - cy ) );
    const c = ( v1.x - cx ) * ( v1.x - cx ) + ( v1.y - cy ) * ( v1.y - cy ) - r * r

    const discriminant = b * b - 4 * a * c;

    if ( discriminant < 0 ) return null;

    const sqrtDiscriminant = Math.sqrt( discriminant );

    const t1 = ( -b + sqrtDiscriminant ) / ( 2 * a );
    const t2 = ( -b - sqrtDiscriminant ) / ( 2 * a );

    $gameTemp.debugDrawShape( segment );
    $gameTemp.debugDrawShape( circle );

    if ( 0 <= t2 && t2 <= 1 ) { // entry point.
      const ix = v1.x + t2 * delta.x;
      const iy = v1.y + t2 * delta.y;
      const intersection = new Vector2( ix, iy );
      const normal = new Vector2( ix - cx, iy - cy );

      return {
        a: segment,
        b: circle,
        normal: Vector2.normalized( normal ),
        overlap: Vector2.subtract( v2, intersection )
      }
    }

    return null;

  } else {
    let a = this.segmentsFromShape( p );

    for ( let i = 0, l = a.length; i < l; i++ ) {

      if ( !this.aabbCollided( s, a[i] ) ) continue;

      const temp = lineXLine( s, a[i] );
      if ( !hit )
      hit = temp;

      else if ( temp && temp.overlap.magnitude < hit.overlap.magnitude )
      hit = temp;

    }

    if ( hit ) {
      hit.a = s;
      hit.b = p;
    }

  }

  return hit;

}

//=============================================================================
static rayCastLongest( s, p )
{ // get collision of a line and a poygon.
//=============================================================================

  let hit = null;
  const lineXLine = this.LineXLine;

  if ( !this.aabbCollided( s, p ) ) return hit;

  if ( CollisionManager.isCircle( p ) ) {

    const circle = p;
    const segment = s;

    const { _start: start, _end: end } = segment;
    const { x: cx, y: cy, radius:r } = circle;

    const v1 = start;
    const v2 = Vector2.add( start, end );

    const delta = Vector2.subtract( v2, v1 );
    const a = delta.length;
    const b = 2 * ( delta.x * ( v1.x - cx ) + delta.y * ( v1.y - cy ) );
    const c = ( v1.x - cx ) * ( v1.x - cx ) + ( v1.y - cy ) * ( v1.y - cy ) - r * r

    const discriminant = b * b - 4 * a * c;

    if ( discriminant < 0 ) return null;

    const sqrtDiscriminant = Math.sqrt( discriminant );

    const t1 = ( -b + sqrtDiscriminant ) / ( 2 * a );
    const t2 = ( -b - sqrtDiscriminant ) / ( 2 * a );

    if (0 <= t1 && t1 <= 1) { // exit point.
      const ix = v1.x + t1 * delta.x;
      const iy = v1.y + t1 * delta.y;
      const intersection = new Vector2( ix, iy );
      const normal = new Vector2( ix - cx, iy - cy );

      return {
        a: segment,
        b: circle,
        normal: Vector2.normalized( normal ),
        overlap: Vector2.subtract( v2, intersection )
      }
    }

  } else {
    let a = this.segmentsFromShape( p );


    for ( let i = 0, l = a.length; i < l; i++ ) {

      if ( !this.aabbCollided( s, a[i] ) ) continue;
      if ( Vector2.dot( a[i].surfaceNormal, s._end ) > 0 ) continue;

      const temp = lineXLine( s, a[i] );

      if ( !hit )
        hit = temp;

      else if ( temp && temp.overlap.magnitude > hit.overlap.magnitude )
        hit = temp;

    }

    if ( hit ) {
      hit.a = s;
      hit.b = p;
    }

  }

  return hit;

}
//=============================================================================
static LineXCircle( l, c, reversed )
{ // return collision between a line and a circle.
//=============================================================================

  let hit = null;

  const s = new Segment( l.x, l.y, c.x - l.x, c.y - l.y );
  const p = Segment.projectOnto( s, l );

  const l2 = new Segment( c.x, c.y, p.x + p.vx - c.x, p.y + p.vy - c.y );
  const l2Mag = l2._end.magnitude;
  const dp = Vector2.dot( p._end, l._end );
  const pMag = p._end.magnitude;
  const lMag = l._end.magnitude;

  if ( l2Mag < c.radius ) { // line collision is occuring.

    if ( lMag >= pMag && dp >= 0 ) {  // line collision.

      const overlap = Vector2.up();
      const normal = l.getSurfaceNormal( c );

      overlap.magnitude = c.radius - l2Mag;
      overlap.angle = normal.angle + 180;

      hit = { id: 0, a: c, b: l, overlap, normal };

    } else { // edge collision.

      const vec2 = dp < 0 ? l._start : Vector2.add( l._start, l._end );

      hit = CollisionManager.PointxCircle( vec2, c, reversed );

      if ( hit ) {
        hit.a = c;
        hit.b = l;
        hit.id = 0;

      }

    }

  }
  if ( hit && reversed ) hit.overlap = Vector2.reversed( hit.overlap );
  return hit;

}

//=============================================================================
static PointxCircle( p, c, reversed )
{ // compar collision between a point( vector ) and a circle.
//=============================================================================

  let hit = null;
  let delta = Vector2.subtract( p, c );
  if ( delta.magnitude < c.radius ) {

    delta.magnitude = c.radius - delta.magnitude;

    hit = {};
    hit.a = c;
    hit.b = p;
    if ( reversed ) {
      hit.normal = Vector2.normalized( delta );
      hit.overlap = Vector2.reversed( delta );
    } else {
      hit.normal = Vector2.reversed( Vector2.normalized( delta ) );
      hit.overlap = delta;
    }
    hit._edge = true;

  }

  return hit;

}

//=============================================================================
  static pointInShape( p, s )
  { // return if the point is in the shape.
//=============================================================================

    if ( this.isRect( p ) ) {
      p = p.center;
    } else if ( this.isPolygon( p ) || this.isSegment( p ) ) {
      p = this.getPolygonCenter( p );

    }

    if ( this.isCircle( s ) ) {
      return this.pointInCircle( p, s );


    } else if ( this.isRect( s ) ) {
      return this.pointInRect( p, s );

    } else if ( this.isPolygon( s ) ) {
      return this.pointInPolygon( p, s );
    }

    return false;

  }

//=============================================================================
  static pointInPolygon( point, poly )
  { // return if a point is within a polygon.
//=============================================================================

    const segments = this.segmentsFromShape( poly );

    let { x, y } = point;
    let inside = false;

    for ( let i = 0, j = segments.length - 1; i < segments.length; j = i++ ) {
      var xi = segments[i].x, yi = segments[i].y;
      var xj = segments[j].x, yj = segments[j].y;

      var intersect = ( ( yi > y ) !== ( yj > y ) ) && ( x < ( ( xj - xi ) * ( y - yi ) / ( yj - yi ) + xi ) );

      if (intersect) inside = !inside;
    }

    return inside;

  }

//=============================================================================
  static pointInRect( p, r )
  { // compar collision between a point( vector ) and a circle.
//=============================================================================

    const { x, y, width, height } = r;
    return p.x > x && p.x < x + width && p.y > y && p.y < y + height;

  }

//=============================================================================
  static pointInCircle( p, c )
  { // Definition.
//=============================================================================

    const len = Vector2.subtract( p, c ).magnitude;

    return len <= c.radius;

  }

//=============================================================================
  static pointOnLine( p, l )
  { // return if the point is within a line segment.
//=============================================================================

    const vec2 = new Vector2( p.x - l.x, p.y - l.y );
    const s = new Segment( l.x, l.y, vec2.x, vec2.y );

    const proj = Segment.projectOnto( s, l )
    const m0 = l._end.magnitude;
    const m1 = proj._end.magnitude;
    const dp = Vector2.dot( l._end, proj._end );

    return m1 >= 0.0000000001 && m0 - m1 >= 0.0000000001 && Math.abs( dp ) >= 0.0000000001;

  }

//=============================================================================
  static isPolyRect( polygon )
  { // return if polygon is a rectangle.
//=============================================================================

    const segments = this.segmentsFromShape( polygon ).filter( s => s._end.magnitude > 0 );

    if ( segments.length != 4 ) return false;

    return segments.every( l => ( l._end.angle % 90 ) == 0 )

  }

//=============================================================================
  static isCCW( polygon )
  { // return if polygon is counte clockwise.
//=============================================================================

    const segments =  this.segmentsFromShape( polygon );
    const s = segments.shift();

    const start = new Vector2( s.x + s.vx * 0.5, s.y + s.vy * 0.5 );
    const direction = Vector2.clone( s._end );

    let hitCount = 0;

    direction.magnitude = 500;
    direction.angle += 90;

    const ray = new Segment( start.x, start.y, direction.x, direction.y );

    for ( let i = 0, l = segments.length; i < l; i++ ) {
      if (  CollisionManager.LineXLine( ray, segments[i] ) ) hitCount++;
    };

    return ( hitCount % 2 ) == 0
  }

//=============================================================================
  static flipPolygon( collider )
  { // flip the polygon to counter clockwise.
//=============================================================================

    for ( let i = 0, l = collider._points.length; i < l; i += 2 ) {
      collider._points[i + 0].x += collider._points[i + 1].x;
      collider._points[i + 0].y += collider._points[i + 1].y;
      collider._points[i + 1].x = -collider._points[i + 1].x;
      collider._points[i + 1].y = -collider._points[i + 1].y;
    };

  }

//=============================================================================
  static LineXRect( l, r, reversed )
  { // return a collision between a line segment and a rectangle.
//=============================================================================

    let start = new Vector2( Math.round( l.x ), Math.round( l.y ) );
    let end = new Vector2( Math.round( l.x + l.vx ), Math.round( l.y + l.vy ) );
    let hits = [];

    if ( !this.aabbCollided( r, l ) ) return null;

    const points = [start, end];
    for ( let i = 0, l = points.length; i < l; i++ ) {
      let hit = this.PointxRect( start, r, l );
      if ( hit && hit.overlap.magnitude >= 0.0000000001 ) {
        hit._edge = true;
        hit.b = l;

        return hit;

      }
    };

    const sNormal = l.surfaceNormal;
    const lMag = l._end.magnitude;
    const c = r.center;

    const s = new Segment( l.x, l.y, c.x - l.x, c.y - l.y );
    const p = Segment.projectOnto( s, l );
    const l2 = new Segment( c.x, c.y, p.x + p.vx - c.x, p.y + p.vy - c.y );

    if ( Math.round( Vector2.dot( sNormal, l2._end ) ) >= 0 ) return null;

    for ( let i = 0, len = 4; i < len; i++ ) {
      const x = r.x + ( i % 2 ) * r.width;
      const y = r.y + Math.floor( i / 2 ) * r.height;

      const s = new Segment( l.x, l.y, x - l.x, y - l.y );
      const p = Segment.projectOnto( s, l );
      const l2 = new Segment( x, y, p.x + p.vx - x, p.y + p.vy - y );
      const dp = Math.round( Vector2.dot( p._end, l._end ) );
      const pMag = p._end.magnitude;
      let diff = lMag - pMag;

      if ( dp <= 0 || diff <= 0.01 ) continue;

      if ( Math.round( sNormal.angle - l2._end.angle ) == 0 ) {
        const polygon = l.polygon;
        let hit = {};
        hit.a = r;
        hit.b = l;
        hit.normal = sNormal;
        hit.overlap = new Vector2( -l2._end.x, -l2._end.y );
        return hit;
      }

    };

    return null;

  }

  // TODO: create a line of sight/hearing plugin.
  // TODO: better follower jump system( jump should occur one at a time ).

//=============================================================================
  static getLineCenter( line )
  { // return the center of a line segment.
//=============================================================================

    const start = line._start;
    const end = line._end;

    const x = start.x + end.x * 0.5;
    const y = start.y + end.y * 0.5;

    return new Vector2( x, y  );
  }

//=============================================================================
  static getPolygonCenter( polygon )
  { // return the center point of a polygon.
//=============================================================================

    if ( this.isCircle( polygon ) ) return new Vector2( polygon.x, polygon.y );
    if ( this.isSegment( polygon ) ) return this.getLineCenter( polygon );

    const vertices = polygon._points;
    const numVertices = vertices.length;

    let sum = new Vector2( 0, 0 );

    for ( let i = 0, l = numVertices; i < l; i++ ) {
      const vertex = vertices[i];
      const n = new Vector2( Math.abs( vertex.x ), Math.abs( vertex.y ) );
      sum = Vector2.add( sum, n );
    };
    const center = Vector2.divide( sum, numVertices );
    return Vector2.add( center, new Vector2( polygon._x, polygon._y ) )

  }

//=============================================================================
  static PolygonXRect( p, r, reversed )
  { // return a collision between a polygon and a rectangle.
//=============================================================================

    const segments = this.segmentsFromShape( p );
    const center = this.getPolygonCenter( p );

    let hit = null;

    if ( this.isPolyRect( p ) ) {
      const hit = this.RectxRect( r, p.aabb, reversed, segments );
      if ( hit ) hit.b = p;
      return hit;
    }

    let hits = [];
    for ( let i = 0, l = segments.length; i < l; i++ ) {
      if ( !this.aabbCollided( r, segments[i].aabb ) ) continue;
      const hit = this.LineXRect( segments[i], r, reversed );

      if ( hit ) {
        hits.push( hit );
        hit.c = segments[i];
        hit.id = i;
        hit.b = p;
      }
    };

    hit = this.getShortestHit( hits );

    if ( !hit && this.pointInPolygon( r.center, p ) ) {
      hit = this.getInnerRectCollision( r, p );
      if ( hit ) hit.b = p;
    };

    if ( reversed ) {
      hit.normal = Vector2.reversed( hit.normal );
      hit.overlap = Vector2.reversed( hit.overlap );
    }

    return hit;

  }

//=============================================================================
  static getInnerRectCollision( r, p )
  { // return inner collision of polygon and a rectangle.
//=============================================================================
    const center = r.center;
    const segments = this.segmentsFromShape( p );
    let distance = Infinity;
    let best = null;
    let hit = null;

    for ( let i = 0, l = segments.length; i < l; i++ ) {
      const lineCenter = CollisionManager.getLineCenter( segments[i] );
      const magnitude = Vector2.subtract( lineCenter, center ).magnitude;
      if ( magnitude < distance ) {
        distance = magnitude;
        best = segments[i];
      };
    };

    if ( best ) {
      const axis = best.surfaceNormal;

      let min = Vector2.dot( new Vector2( r.x, r.y ), axis );
      let max = min;

      const l0 = new Segment( best.x, best.y, center.x - best.x, center.y - best.y );
      const p = Segment.projectOnto( l0, best );
      const l1 = new Segment( center.x, center.y, p.x + p.vx - center.x, p.y + p.vy - center.y );
      const cp = new Vector2( l1.x + l1.vx, l1.y + l1.vy );

      for ( let i = 1, l = 4; i < l; i++ ) {
        const x = r.x + ( i % 2 ) * r.width;
        const y = r.y + Math.floor( i / 2 ) * r.height;
        const dp = Vector2.dot( new Vector2( x, y ), axis );

        if ( min >= dp ) min = dp;
        if ( max <= dp ) max = dp;

      };

      const dp = Vector2.dot( cp, axis )

      hit = {};
      hit.normal = axis;
      hit.overlap = Vector2.reversed( Vector2.multiply( axis, dp - min ) );
      hit.a = r;
      hit.b = p;

    }

    return hit;

  }

//=============================================================================
  static CircleXRect( c, r, reversed, segments )
  { // return the collision results of a circle and rectangle.
//=============================================================================

    const rc = r.center;

    const dx = c.x - rc.x;
    const dy = c.y - rc.y;

    let collidedX = c.x >= r.x && c.x <= r.x + r.width;
    let collidedY = c.y >= r.y && c.y <= r.y + r.height;
    let hit;
    if ( collidedX && collidedY ) {

      if ( Math.abs( dx ) > Math.abs( dy ) ) {
        collidedY = false;

      } else {
        collidedX = false;

      }

    }
    segments = segments || this.segmentsFromShape( r );
    let top;
    let left;
    let right;
    let bottom;

    for ( let i = 0, l = segments.length; i < l; i++ ) {

      if ( segments[i].vx && !segments[i].vy ) {
        top = !top || top.x > segments[i].x ? segments[i] : top;
        top = !top || top.x > segments[i].x ? segments[i] : top;
        bottom = !bottom || bottom.x < segments[i].x ? segments[i] : bottom;
        bottom = !bottom || bottom.x < segments[i].x ? segments[i] : bottom;

      } else if ( segments[i].vy && !segments[i].vx ) {
        left = !left || left.x > segments[i].x ? segments[i] : left;
        left = !left || left.x > segments[i].x ? segments[i] : left;
        right = !right || right.x < segments[i].x ? segments[i] : right;
        right = !right || right.x < segments[i].x ? segments[i] : right;

      }

    };

    if ( collidedX ) {

      if ( dy > 0 ) {
        hit = {};
        hit.a = c;
        hit.b = r;
        hit.overlap = new Vector2( 0, dy - ( c.radius + r.height / 2 ) )
        hit.normal = new Vector2( 0, 1 );
        hit.id = segments.indexOf( bottom );
      } else {
        hit = {};
        hit.a = c;
        hit.b = r;
        hit.overlap = new Vector2( 0, ( c.radius + r.height / 2 ) - Math.abs( dy ) )
        hit.normal = new Vector2( 0, -1 );
        hit.id = segments.indexOf( top );

      }

    } else if ( collidedY ) {

      if ( dx > 0 ) {
        hit = {};
        hit.a = c;
        hit.b = r;
        hit.overlap = new Vector2( dx - ( c.radius + r.width / 2 ), 0 )
        hit.normal = new Vector2( 1, 0 );
        hit.id = segments.indexOf( right );

      } else {
        hit = {};
        hit.a = c;
        hit.b = r;
        hit.overlap = new Vector2( ( c.radius + r.width / 2 ) - Math.abs( dx ), 0 )
        hit.normal = new Vector2( -1, 0 );
        hit.id = segments.indexOf( left );

      }

    } else {
      let hits = [];
      const aabb = c.aabb;

      const points = [
        new Vector2( r.x, r.y ),
        new Vector2( r.x + r.width, r.y ),
        new Vector2( r.x + r.width, r.y + r.height ),
        new Vector2( r.x, r.y + r.height )
      ];

      for ( let i = 0, l = points.length; i < l; i++ ) {
        if ( !this.pointInRect( points[i], aabb ) ) continue;
        const dist = Vector2.normalized( Vector2.subtract( points[i], c ) );
        const mag = Vector2.subtract( points[i], c ).magnitude;
        if ( mag < c.radius ) {
          hits.push( {
            a: c, b: r,
            overlap: Vector2.multiply( dist, c.radius - mag ),
            normal: Vector2.reversed( dist )
          } )

          hit = this.getLongestHit( hits );
        }
      };


    }

    if ( hit && reversed ) {
      hit.overlap = Vector2.reversed( hit.overlap );
      hit.normal = Vector2.reversed( hit.normal );
      let { a, b } = hit;
      hit.a = b;
      hit.b = a;
    }
    return hit;

  }

//=============================================================================
static CircleXPolygon( c, p, reversed )
{ // return collision between a circle and a polygon.
//=============================================================================

  let hits = [];

  const segments = this.segmentsFromShape( p );

  for ( let i = 0, l = segments.length; i < l; i++ ) {

    if ( !this.aabbCollided( segments[i], c ) ) continue;

    if ( this.isPolyRect( p ) ) {
      const hit = this.CircleXRect( c, p.aabb, reversed, segments );
      if ( hit ) {
        hit.c = hit.b;
        hit.b = p;
      }
      return hit;
    }

    let temp = this.LineXCircle( segments[i], c, reversed );
    if ( temp ) { temp.b = p; temp.id = i; hits.push( temp ); };

  }

  let hit = this.getLongestHit( hits );

  if ( this.pointInShape( c, p ) ) {

    if ( !hit ) {
      hit = this.getInnerCircleCollision( c, segments );

      if ( hit ) hit.b = p;

    } else {
      hit.overlap = Vector2.reversed( hit.overlap );
      hit.overlap.magnitude = c.radius * 2 - hit.overlap.magnitude;
      hit.normal = Vector2.reversed( hit.normal );

    }

  }

  return hit;

}

//=============================================================================
static getInnerCircleCollision( c, segments )
{ // resolve an inner collision without contact.
//=============================================================================

  const hits = [];

  for (let i = 0, l = segments.length; i < l; i++) {

    let end = Vector2.reversed( segments[i].getSurfaceNormal( c ) );
    end = Vector2.multiply( end, 250 );
    const ray = new Segment( c.x, c.y, end.x, end.y );
    const hit = CollisionManager.testCollision( ray, segments[i] );

    if ( hit ) { hit.id = i; hits.push( hit ); };

  }

  const hit = this.getLongestHit( hits );

  if ( hit ) {

    hit.normal = Vector2.reversed( hit.normal );
    hit.overlap = Vector2.subtract( hit.a._end, hit.overlap );
    hit.overlap = Vector2.reversed( hit.overlap );
    hit.overlap.magnitude += c.radius;

  }

  return hit;

}

//=============================================================================
static CircleXCircle( c1, c2 )
{ // compare collision between two circles.
//=============================================================================

  let hit = null;

  const delta = new Vector2( c2.x - c1.x, c2.y - c1.y );
  const normal = Vector2.normalized( delta );
  const total = c1.radius + c2.radius;
  const magnitude = delta.magnitude;

  if ( total - magnitude > Number.EPSILON ) {

    hit = {};
    hit.a = c1;
    hit.b = c2;
    hit.overlap = new Vector2( 0, total - magnitude );
    hit.normal = Vector2.reversed( normal );
    hit.overlap.angle = normal.angle;

  }

  return hit;

}

//=============================================================================
  static PointxRect( point, rect, line )
  { // return collisin between a point and a rect.
//=============================================================================

    let hit = null;
    const center = rect.center;
    const { x:px, y:py } = point;
    const { x, y, width, height } = rect;
    const n = 0.000001;
    if ( px >= x && px <= x + width && py >= y && py <= y + height ) {

      const dx = px - center.x;
      const dy = py - center.y;


      const signX = Math.sign( dx );
      const overlapX = ( ( width / 2 ) - Math.abs( dx ) ) * signX;

      const signY = Math.sign( dy );
      const overlapY = ( ( ( height + n ) / 2 ) - Math.abs( dy ) ) * signY;

      if ( Math.abs( dx ) <= ( width / 2 ) && Math.abs( dy ) <= ( height / 2 ) ) {
      // if ( Math.abs( overlapX ) > 0.0000000001 && Math.abs( overlapY ) > 0.0000000001 ) {

        hit = {};
        hit.a = rect;
        hit.b = point;
        if ( Math.abs( dx ) >= Math.abs( dy ) ) {
          hit.overlap = new Vector2( overlapX, 0 );
          hit.normal = new Vector2( -signX, 0 );
        } else {
          hit.normal = new Vector2( 0, signY );
          hit.overlap = new Vector2( 0, overlapY );
          if ( line && Math.abs( Math.abs( dx ) - Math.abs( dy ) ) < 0.0001 ) {
            hit.normal = new Vector2( -signX, 0 );
            hit.overlap = new Vector2( overlapX, 0 );

          }

      }

      }

    }

    if ( hit && hit.overlap.magnitude < 0.000001 ) return null;

    return hit;

  }

//=============================================================================
  static RectxRect( r1, r2, reversed, segments )
  { // return a collision between two rectangles.
//=============================================================================

    let hit = null;
    const { x:x1, y:y1, width:w1, height:h1 } = r1;
    const { x:x2, y:y2, width:w2, height:h2 } = r2;

    if (x1 > x2 + w2 || x1 + w1 < x2 || y1 > y2 + h2 || y1 + h1 < y2 ) {
      return hit;
    }

    segments = segments || this.segmentsFromShape( r2 );
    let top;
    let left;
    let right;
    let bottom;

    for ( let i = 0, l = segments.length; i < l; i++ ) {

      if ( segments[i].vx && !segments[i].vy ) {
        top = !top || top.x > segments[i].x ? segments[i] : top;
        top = !top || top.x > segments[i].x ? segments[i] : top;
        bottom = !bottom || bottom.x < segments[i].x ? segments[i] : bottom;
        bottom = !bottom || bottom.x < segments[i].x ? segments[i] : bottom;

      } else if ( segments[i].vy && !segments[i].vx ) {
        left = !left || left.x > segments[i].x ? segments[i] : left;
        left = !left || left.x > segments[i].x ? segments[i] : left;
        right = !right || right.x < segments[i].x ? segments[i] : right;
        right = !right || right.x < segments[i].x ? segments[i] : right;

      }

    };

    const overlapX = Math.min( ( x1 + w1 ) - x2, ( x2 + w2 ) - x1 );
    const overlapY = Math.min( (y1 + h1 ) - y2, ( y2 + h2 ) - y1 );

    hit = {};
    hit.a = r1;
    hit.b = r2;

    if (overlapX < overlapY) {

      if ( x1 < x2 ) {
        hit.overlap = new Vector2( overlapX, 0 );
        hit.normal = new Vector2( -1, 0 );
        hit.id = segments.indexOf( left );
      } else {
        hit.overlap = new Vector2( -overlapX, 0 );
        hit.normal = new Vector2( 1, 0 );
        hit.id = segments.indexOf( right );

      }

    } else {

      if ( y1 < y2 ) {
        hit.overlap = new Vector2( 0, overlapY );
        hit.normal = new Vector2( 0, -1 );
        hit.id = segments.indexOf( top );
      } else {
        hit.overlap = new Vector2( 0, -overlapY );
        hit.normal = new Vector2( 0, 1 );
        hit.id = segments.indexOf( bottom );

      }

    }

    return hit;

  }

//=============================================================================
static PolygonxPolygon( p1, p2 )
{ // return collision betweeen two polygons.
//=============================================================================

  // TODO: this needs a proper implementation.

}

//=============================================================================
static getShortestHit( hits )
{ // return the best possible collision source from a list of collisions.
//=============================================================================

  const n = 0.000001;

  hits = hits.filter( hit => hit.overlap.magnitude > n );

  return hits.sort( ( a, b ) => {

    const diff = a.overlap.magnitude - b.overlap.magnitude;

    if ( diff == 0 ) {
      return Number( b._edge || false ) - Number( a._edge || false );

    } else {
      return diff;

    }

  } )[0] || null;

}

//=============================================================================
  static getLongestHit( hits )
  { // return the best possible collision source from a list of collisions.
//=============================================================================

    const n = 0.000001;

    hits = hits.filter( hit => hit.overlap.magnitude > n );

    return hits.sort( ( a, b ) => {
      const diff = b.overlap.magnitude - a.overlap.magnitude;

      if ( diff == 0 ) {
        return Number( b._edge || false ) - Number( a._edge || false );

      } else {
        return diff;

      }

    } )[0] || null;

  }

//=============================================================================
  static expandShape( shape, amount )
  { // expand the shapes size by amount specified.
//=============================================================================

    if ( this.isCircle( shape ) ) {
      shape.radius += amount;

    } else if ( this.isRect( shape ) ) {
      shape.width += amount;
      shape.height += amount;
    }

  }

}

//=============================================================================
window.CollisionManager = CollisionManager;
//=============================================================================

//=============================================================================
// Debug_Layer :
//=============================================================================

//=============================================================================
class Debug_Layer extends PIXI.Container
{ // Debug_Layer

//=============================================================================
constructor()
{ // Called on object creation.
//=============================================================================

  super();
  this._graphic = new PIXI.Graphics();
  this._graphic.lineStyle( 1, 0xffffff, 1 );
  this.addChild( this._graphic );

}

//=============================================================================
drawLineCollider( line, color = 0xffffff )
{ // draw the line line.
//=============================================================================

  const screen = $gameScreen;
  const scale = screen.zoomScale();

  const px = $gamePlayer.x;
  const dx = $gameMap._displayX;
  const mx = $gameMap.width();

  const py = $gamePlayer.y;
  const dy = $gameMap._displayY;
  const my = $gameMap.height();

  let x = line.x - ( px < dx ? dx - mx : dx ) * $gameMap.tileWidth();
  let y = line.y - ( py < dy ? dy - my : dy ) * $gameMap.tileHeight();
  let sx = x + line.vx;
  let sy = y + line.vy;

  let scaleX = screen.zoomX() * ( scale - 1 ) / scale;
  let scaleY = screen.zoomY() * ( scale - 1 ) / scale;

  this._graphic.lineStyle( 1, color, 1 );
  this._graphic.moveTo(  x - scaleX, y - scaleY );
  this._graphic.lineTo( sx - scaleX, sy - scaleY );

}

//=============================================================================
drawCircleCollider( circle, color = 0xff00ff )
{ // draw a circle collider.
//=============================================================================

  const screen = $gameScreen;
  const scale = screen.zoomScale();

  const px = $gamePlayer.x;
  const dx = $gameMap._displayX;
  const mx = $gameMap.width();

  const py = $gamePlayer.y;
  const dy = $gameMap._displayY;
  const my = $gameMap.height();

  let scaleX = screen.zoomX() * ( scale - 1 ) / scale;
  let scaleY = screen.zoomY() * ( scale - 1 ) / scale;

  const { x, y, radius } = circle;
  const ox = ( px < dx ? dx - mx : dx ) * $gameMap.tileWidth();
  const oy = ( py < dy ? dy - my : dy ) * $gameMap.tileHeight();

  this._graphic.lineStyle( 1, color, 1 );
  this._graphic.beginFill( color, 0 );
  this._graphic.drawCircle( x - ox - scaleX, y - oy - scaleY, radius - 1 );
  this._graphic.endFill();

}

//=============================================================================
drawRectangleCollider( rect, color = 0xff00ff )
{ // draw a circle collider.
//=============================================================================

  const screen = $gameScreen;
  const scale = screen.zoomScale();

  const px = $gamePlayer.x;
  const dx = $gameMap._displayX;
  const mx = $gameMap.width();

  const py = $gamePlayer.y;
  const dy = $gameMap._displayY;
  const my = $gameMap.height();

  let scaleX = screen.zoomX() * ( scale - 1 ) / scale;
  let scaleY = screen.zoomY() * ( scale - 1 ) / scale;

  const { x, y, width, height } = rect;
  const ox = ( px < dx ? dx - mx : dx ) * $gameMap.tileWidth();
  const oy = ( py < dy ? dy - my : dy ) * $gameMap.tileHeight();

  this._graphic.lineStyle( 1, color, 0 );
  this._graphic.beginFill( color, 0.5 );
  this._graphic.drawRect( x - ox - scaleX, y - oy - scaleY, width, height );
  this._graphic.endFill();

}

//=============================================================================
drawPolygonCollider( polygon, color = 0xff0000 )
{ // draw a polygon collider.
//=============================================================================

  const segments = CollisionManager.segmentsFromShape( polygon );

  for ( let i = 0, l = segments.length; i < l; i++ ) {
    if ( segments[i] ) this.drawLineCollider( segments[i], color );
  }

}

//=============================================================================
drawShape( shape, color )
{ // draw the shape provided.
//=============================================================================

  if ( CollisionManager.isSegment( shape ) ) {
    this.drawLineCollider( shape, color );

  } else if ( CollisionManager.isCircle( shape ) ) {
    this.drawCircleCollider( shape, color );

  } else if ( CollisionManager.isPolygon( shape ) ) {
    this.drawPolygonCollider( shape, color );

  } else if ( CollisionManager.isRect( shape )  ) {
    this.drawPolygonCollider( shape, color );

  } else if ( shape.constructor.name === 'Rectangle' ) {
    // this._graphic.lineStyle( 1, color, 0 );
    // this._graphic.beginFill( color, 1 );
    // this._graphic.drawRect( x - ox - scaleX, y - oy - scaleY, radius - 1 );
    this.drawRectangleCollider( shape, color );
    // this._graphic.endFill();
  }

}

// always ensure this is the last object on the screen.
//------------------------------------------------------------------------
update() {
//------------------------------------------------------------------------
  if ( this.parent ) {

    const screen = $gameScreen;

    if ( screen ) {
      const scale = screen.zoomScale();

      this.scale.set( scale, scale );

    }

    let last = this.parent.children.length - 1;
    if ( this.parent.children.indexOf( this ) < last )
      this.parent.addChild( this );
  }
};
}

//=============================================================================
window.Debug_Layer = Debug_Layer;
//=============================================================================
( function ( $ ) { // CONFIG:


//=============================================================================
// Create functions specific for my code if it does not already exist!
// WARNING: DO NOT EDIT BELOW THIS LINE!!!
//=============================================================================

//-----------------------------------------------------------------------------
Chaucer.parseArgs = Chaucer.parseArgs || function ( args )
{ // compare the current version with the target version.
//-----------------------------------------------------------------------------

  const obj = {};
  for ( var i = 0, l = args.length; i < l; i += 2 ) {
    obj[args[i]] = args[i + 1];
  }

  return obj;

};

//-----------------------------------------------------------------------------
  Chaucer.compareVersion = Chaucer.compareVersion || function ( current, target )
  { // compare the current version with the target version.
//-----------------------------------------------------------------------------

    const v1 = current.split( '.' );
    const v2 = target.split( '.' );
    for ( let i = 0, l = v1.length; i < l; i++ ) {
      if ( v1[i] < v2[i] ) return -1; // version is lower!
      if ( v1[i] > v2[i] ) return 1; // version is higher!
    }

    return 0; // same version!

  };

//-----------------------------------------------------------------------------
  Chaucer.parse = Chaucer.parse || function( data )
  { // recursively parse any data passed in.
//-----------------------------------------------------------------------------
    try {
      data = JSON.parse( data );

    } catch ( err ) {
      data = data;

    } finally {

      if ( typeof data === 'object' ) {

        for ( const key in data ) {
          data[key] = Chaucer.parse( data[key] );
        };

      };

    };

    return data;

  };

//-----------------------------------------------------------------------------
  Chaucer.makePluginInfo = Chaucer.makePluginInfo || function ( $, n )
  { // Create plugin info for the object provided.
//-----------------------------------------------------------------------------

    for ( var i = 0, l = $plugins.length; i < l; i++ ) {

      if ( !$plugins[i].description.match( n ) ) continue;

      $.author = 'Chaucer';
      $.name = RegExp.$1;
      $.version = RegExp.$2;
      $.pluginName = $plugins[i].name;
      $.params = Chaucer.parse( $plugins[i].parameters );
      $.commands = {};
      $.alias = {};

    };

  };

//============================================================================
  //Create plugin information.
//============================================================================

  const identifier =  /(Collision Altering Plugin) : Version - (\d+\.\d+\.\d+)/;
  // $._nameError = 'Collision Altering Plugin was unable to load! Please revert any changes back to normal!';


  Chaucer.makePluginInfo( $, identifier );

  if ( !$.name ) throw new Error( $.nameError );

//=============================================================================

//-----------------------------------------------------------------------------
$.registerPluginCommand = function ( command, fn )
{ // compare the current version with the target version.
//-----------------------------------------------------------------------------

if ( Utils.RPGMAKER_NAME === 'MV' )
  $.commands[command] = fn;

else if ( Utils.RPGMAKER_NAME === 'MZ' )
  PluginManager.registerCommand( $.pluginName, command, fn );

};

//-----------------------------------------------------------------------------
$.alias = function ( className, method, fn, isStatic )
{ // use this method to quickly alias a method of a particular class.
//-----------------------------------------------------------------------------

  let key = `${className.name}.${( isStatic ? '' : 'prototype.' ) + method}`;
  let object = ( isStatic ? className : className.prototype );

  if ( $.alias[key] ) throw new Error( `${key} already aliased!` );

  $.alias[key] = object[method];

  let fnString = fn.toString();
  let instances = fnString.match( /\$\.alias\((.*?)\)/g );

  for ( let i = 0, len = instances.length; i < len; i++ ) {

    let old = instances[i];
    let args = ['this'].concat( old.match( /\((.*?)\)/ )[1].split( ',' ) );
    let next = `$.alias["${key}"].call(` + args.join( ',' ) + ')';

    fnString = fnString.replace( old, next );

  }

  eval( `${key} = ` + fnString );

};

//-----------------------------------------------------------------------------
$.expand = function ( className, method, fn, isStatic )
{ // use this method to quickly alias a method of a particular class.
//-----------------------------------------------------------------------------

  const obj = isStatic ? className : className.prototype;
  obj[method] = fn;

};

//-----------------------------------------------------------------------------
$.expandCollisionInfo = function()
{ // expand collision info based on tile size
//-----------------------------------------------------------------------------

  const w = $dataSystem.tileSize || 48;
  const h = $dataSystem.tileSize || 48;

  for ( let key in $collisionInfo ) {
    const tileset = $collisionInfo[key];

    for ( let key2 in tileset ) {
      const data = tileset[key2];

      if ( !data || !data.collider ) continue;

      if ( data.collider.constructor.name == 'Object' ) {
        let collider = data.collider;
        if ( !collider['@'] && collider.constructor ) collider['@'] = collider.constructor.name;
        data.collider = Object.assign( new window[collider['@']](), collider );

      }

      if ( CollisionManager.isSegment( data.collider ) ) {
        if ( !data.collider._start ) { // compatibility w/ old colliders.
          data.collider._start = new Vector2( data.collider._x, data.collider._y );
          data.collider._end = data.collider._vector;
        }

        const { x, y, vx, vy } = data.collider;
        data.collider = new Segment( x * w, y * h, vx * w, vy * h );

        data.collider.x = Math.round( data.collider.x );
        data.collider.y = Math.round( data.collider.y );
        data.collider.vx = Math.round( data.collider.vx );
        data.collider.vy = Math.round( data.collider.vy );

      } else if ( CollisionManager.isPolygon( data.collider ) ) {
        data.collider._points = data.collider._points.map( point => {
          let x = Math.round( point._x * w );
          let y = Math.round( point._y * h );

          return new Vector2( x, y );

        } );
        data.collider.isCCW = false;
        if ( CollisionManager.isCCW( data.collider ) ) {
          CollisionManager.flipPolygon( data.collider );

        }

      }

    }

  }

};
//=============================================================================
// MV SPECIFIC CODE :
//=============================================================================

  if ( Utils.RPGMAKER_NAME === 'MV' ) {

//-----------------------------------------------------------------------------
    $.alias( Game_Interpreter, 'pluginCommand', function( command, args ) {
//-----------------------------------------------------------------------------

      $.alias( command, args );

      command = command.toLowerCase();
      if ( $.commands[command] ) {
        $.commands[command].call( this, Chaucer.parseArgs( args ) );
      }
    } );

  }


//=============================================================================
// ALIASED CODE BELOW THIS LINE!
//=============================================================================

//=============================================================================
// Scene_Boot :
//=============================================================================

if ( Utils.RPGMAKER_NAME === 'MV' ) {

  //-----------------------------------------------------------------------------
    $.alias( Scene_Boot, 'isReady', function()
    { // Aliased isReady of class Scene_Boot.
  //-----------------------------------------------------------------------------

      const value = $.alias();

      if ( value ) Chaucer.CAP.expandCollisionInfo();

      return value;

    }, false );

}

//-----------------------------------------------------------------------------
$.alias( Scene_Boot, 'onDatabaseLoaded', function( object )
{ // Aliased onLoad of class DataManager.
//-----------------------------------------------------------------------------

  $.alias( object );
  Chaucer.CAP.expandCollisionInfo();

}, false );


//=============================================================================
// DataManager :
//=============================================================================

window.$collisionInfo = null;

DataManager._databaseFiles.push( {
  name: "$collisionInfo", src: "CollisionInfo.json"
} );

//-----------------------------------------------------------------------------
$.alias( DataManager, 'loadDataFile', function( name, src )
{ // Aliased loadDataFile of class DataManager.
//-----------------------------------------------------------------------------

  if ( name === "$collisionInfo" ) {

    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;

    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
      if ( xhr.status < 400 ) {
        window[name] = JsonEx.parse( xhr.responseText );
        DataManager.onLoad(window[name]);
      }
    };
    xhr.onerror = function() {
      $collisionInfo = {};
    };
    window[name] = null;
    xhr.send();

  } else {
    $.alias( name, src );

  }


}, true );

//=============================================================================
// Game_Interpreter :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Interpreter, 'updateWaitMode', function()
  { // Aliased updateWaitMode of class Game_Interpreter.
//-----------------------------------------------------------------------------

    let waiting = false;
    let isMV = Utils.RPGMAKER_NAME == 'MV';

    if ( this._waitMode == 'route' ) {
      character = isMV ? this._character : this.character( this._characterId );
      waiting = character && ( character._path || character.hasDestination() || character._targetObject );
      if ( isMV && !character ) this._waitMode = '';
    }

    return waiting || $.alias();

  }, false );

//=============================================================================
// Game_Variables :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Variables, 'initialize', function()
  { // Aliased initialize of class Game_Variables.
//-----------------------------------------------------------------------------

    $.alias();
    this._useRounding = true;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Variables, 'enableRounding', function()
  { // enable rounding of variables.
//-----------------------------------------------------------------------------

    this._useRounding = true;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Variables, 'disableRounding', function()
  { // disable rounding from being used when setting variables.
//-----------------------------------------------------------------------------

    this._useRounding = false;

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Variables, 'setValue', function( variableId, value )
  { // Aliased setValue of class Game_Variables.
//-----------------------------------------------------------------------------

    if ( !this._useRounding ) {
      if (variableId > 0 && variableId < $dataSystem.variables.length) {
          this._data[variableId] = value;
          this.onChange();
      }

    } else {
      $.alias( variableId, value );

    }

  }, false );

//=============================================================================
// Game_Map :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'tileEventsXy', function( x, y )
  { // Aliased tileEventsXy of class Game_Map.
//-----------------------------------------------------------------------------

    if ( !this._tileEvents ) this.refresh();
    return $.alias( x, y );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'characterRestrictedRegions', function()
  { // return regions that restrict all chawracter movement.
//-----------------------------------------------------------------------------

    return ( $dataMap.meta.characterrestrictedregions || '' ).split( ',' ).filter( n => !!n ).map( Number );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'eventRestrictedRegions', function()
  { // return event specific region restrictions.
//-----------------------------------------------------------------------------

    return ( $dataMap.meta.eventrestrictedregions || '' ).split( ',' ).filter( n => !!n ).map( Number );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'playerRestrictedRegions', function()
  { // regions that are restricted specifically for the player.
//-----------------------------------------------------------------------------

    return ( $dataMap.meta.playerrestrictedregions || '' ).split( ',' ).filter( n => !!n ).map( Number );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'isLadder', function( x, y )
  { // Aliased isLadder of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      x = Math.round( x );
      y = Math.round( y );
    }

    return $.alias( x, y );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'isBush', function( x, y )
  { // Aliased isBush of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      x = Math.round( x );
      y = Math.round( y );
    }

    return $.alias( x, y );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'isCounter', function( x, y )
  { // Aliased isCounter of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      x = Math.round( x );
      y = Math.round( y );
    }

    return $.alias( x, y );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'isDamageFloor', function( x, y )
  { // Aliased isDamageFloor of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      x = Math.round( x );
      y = Math.round( y );
    }

    return $.alias( x, y );


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'terrainTag', function( x, y )
  { // Aliased terrainTag of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      x = Math.round( x );
      y = Math.round( y );
    }

    return $.alias( x, y );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'regionId', function( x, y )
  { // Aliased regionId of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      x = Math.round( x );
      y = Math.round( y );
    }

    return $.alias( x, y );

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Map, 'update', function( sceneActive )
{ // Aliased update of class Game_Map.
//-----------------------------------------------------------------------------

  $gameTemp.clearDebugLayer();
  $.alias( sceneActive );

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Map, 'isPixelMovement', function()
{ // return if the current map is using pixel movement.
//-----------------------------------------------------------------------------

  if ( !$dataMap || !$dataMap.meta ) return false;
  if ( Chaucer.CAP.params.alwaysEnabled ) return true;

  return $dataMap.meta.pixel;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Map, 'getFullRectTile', function( x, y )
{ // Definition.
//-----------------------------------------------------------------------------

  const tw = $gameMap.tileWidth();
  const th = $gameMap.tileHeight();

  return new Rect( x * tw, y * th, tw, th );

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'layerColliderData', function()
  { // return a list of all layer names for collider data.
//-----------------------------------------------------------------------------

    const data = [];
    let list = this.layerConfig ? this.layerConfig() : {};
    for ( let key in list ) {
      if ( !list[key].graphic ) continue;
      data.push( {
        data: $collisionInfo['[LAYER]' + list[key].graphic],
        name: list[key].graphic,
        z: list[key].z
      } );
    };

    return data.sort( ( a, b ) => a.z - b.z ).filter( n => !!n.data );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'layerTileCollider', function( x, y )
  { // get the most valid ollider for all layers with galvs layer plugin.
//-----------------------------------------------------------------------------

    const mw = $gameMap.width();
    const mh = $gameMap.height();
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    let layers = this.layerColliderData();
    let collider = null;
    let id = -1;

    for ( let i = 0, l = layers.length; i < l; i++ ) {
      let bitmap = ImageManager.loadLayerGraphic( layers[i].name );
      const pWidth = Math.ceil( bitmap.width / th );
      const pId = x.mod( mw ) + ( y.mod( mh ) * pWidth ) ;
      let data = layers[i].data[pId];

      if ( data && data.collider && !data.ignored ) collider = data.collider;

    };

    if ( !collider ) return collider;

    if ( Utils.RPGMAKER_NAME == 'MZ' ) {
      collider = Object.assign( new window[collider.constructor.name](), collider );

    } else {
      if ( !collider['@'] && collider.constructor ) collider['@'] = collider.constructor.name;
      collider = Object.assign( new window[collider['@']](), collider );

    }

    if ( CollisionManager.isSegment( collider ) ) {
      collider._start = Vector2.clone( collider._start );
      collider._end = Vector2.clone( collider._end );
    }

    collider.x = collider.x + x * tw +  ( collider._ox || 0 );
    collider.y = collider.y + y * th +  ( collider._oy || 0 );
    collider._regionId = $gameMap.regionId( x, y );
    collider._tileId = id;

    return collider;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'parallaxCollider', function( x, y )
  { // return the collider for the parallax on map.
//-----------------------------------------------------------------------------

    const mw = $gameMap.width();
    const mh = $gameMap.height();
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    const parallax = $gameMap.parallaxName();
    const layerCollider = $gameMap.layerTileCollider( x, y );
    const bitmap = ImageManager.loadParallax( parallax );
    const pWidth = Math.ceil( bitmap.width / th );
    const pId = x.mod( mw ) + ( y.mod( mh ) * pWidth ) ;

    if ( Imported.  PrimeParallax && this.getPrimeCollidersAt ) {
      const primeCollider = this.getPrimeCollidersAt( x, y );
      if ( primeCollider ) return primeCollider
    }
    if ( layerCollider )  return layerCollider;

    if ( $collisionInfo[parallax] && $collisionInfo[parallax][pId] ) {

      let data = $collisionInfo[parallax][pId].collider;

      if ( data ) {

        let collider = null;

        if ( Utils.RPGMAKER_NAME == 'MV' ) {
          collider = Object.assign( new window[data.constructor.name](), data );

        } else {
          if ( !data['@'] && data.constructor ) data['@'] = data.constructor.name;
          collider = Object.assign( new window[data['@']](), data );

        }

        if ( CollisionManager.isSegment( collider ) ) {
          collider._start = Vector2.clone( collider._start );
          collider._end = Vector2.clone( collider._end );
        }

        collider.x = data.x + x * tw +  ( collider._ox || 0 );
        collider.y = data.y + y * th +  ( collider._oy || 0 );
        collider._regionId = $gameMap.regionId( x, y );
        collider._tileId = pId;

        return collider;

      }

    }

    return null;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Map, 'tileCollider', function( id, x, y, debug )
{ // return the collider for the tile id at x and y.
//-----------------------------------------------------------------------------

  const tilesetId = $gameMap.tilesetId();

  const mw = $gameMap.width();
  const mh = $gameMap.height();
  const tw = $gameMap.tileWidth();
  const th = $gameMap.tileHeight();

  if ( $collisionInfo[tilesetId] && $collisionInfo[tilesetId][id] ) {

    let data = $collisionInfo[tilesetId][id].collider;

    if ( data ) {

      let collider = null;

      if ( Utils.RPGMAKER_NAME == 'MV' ) {
        collider = Object.assign( new window[data.constructor.name](), data );

      } else {
        if ( !data['@'] && data.constructor ) data['@'] = data.constructor.name;
        collider = Object.assign( new window[data['@']](), data );

      }

      if ( CollisionManager.isSegment( collider ) ) {
        collider._start = Vector2.clone( collider._start );
        collider._end = Vector2.clone( collider._end );
      }

      collider.x = data._x + x * tw +  ( collider._ox || 0 );
      collider.y = data._y + y * th +  ( collider._oy || 0 );
      collider._regionId = $gameMap.regionId( x, y );
      collider._tileId = id;

      return collider;

    }

  }

  return null;


}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Map, 'boatCollider', function( id, x, y )
{ // return the collider for the tile id at x and y.
//-----------------------------------------------------------------------------

  const tilesetId = $gameMap.tilesetId();

  let tx = x.mod( $gameMap.width() );
  let ty = y.mod( $gameMap.height() );

  const tw = $gameMap.tileWidth();
  const th = $gameMap.tileHeight();

  if ( !$gameMap.isBoatPassable( tx, ty ) ) return this.getFullRectTile( x, y );

  if ( [2048, 2096, 2240, 2336, 2432, 2528, 2624, 2720].includes( id ) ) {
    return null;
  }

  if ( $collisionInfo[tilesetId] && $collisionInfo[tilesetId][id] ) {
    let data = $collisionInfo[tilesetId][id].collider;

    if ( data ) {

      let collider = Object.assign( new window[data['@']](), data );

      collider.x = data.x + x * tw +  ( collider._ox || 0 );
      collider.y = data.y + y * th +  ( collider._oy || 0 );

      return collider;

    }

  }

  return null;


}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'shipCollider', function( id, x, y )
  { // return the collider for the tile id at x and y.
//-----------------------------------------------------------------------------

    const tilesetId = $gameMap.tilesetId();

    let tx = x.mod( $gameMap.width() );
    let ty = y.mod( $gameMap.height() );

    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();

    if ( !$gameMap.isShipPassable( tx, ty ) ) return this.getFullRectTile( x, y );

    if ( [2048, 2096, 2240, 2336, 2432, 2528, 2624, 2720].includes( id ) ) {
      return null;
    }

    if ( $collisionInfo[tilesetId] && $collisionInfo[tilesetId][id] ) {
      let data = $collisionInfo[tilesetId][id].collider;

      if ( data ) {

        let collider = Object.assign( new window[data['@']](), data );

        collider.x = data.x + x * tw +  ( collider._ox || 0 );
        collider.y = data.y + y * th +  ( collider._oy || 0 );

        return collider;

      }

    }

    return null;


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'adjustX', function( x )
  { // Aliased pixelAdjustX of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      return this.pixelAdjustX( x )

    } else {
      return $.alias( x );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'pixelAdjustX', function( x )
  { // adjust X for pixel movement.
//-----------------------------------------------------------------------------

    const tw = $gameMap.tileWidth();
    const displayX = Math.round( this._displayX * tw ) / tw;
    x = Math.round( x * tw ) / tw;
    if (
      this.isLoopHorizontal() &&
        x < displayX - (this.width() - this.screenTileX()) / 2
    ) {
        return x - displayX + $dataMap.width;
    } else {
        return x - displayX;
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'adjustY', function( y )
  { // Aliased pixelAdjustY of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      return this.pixelAdjustY( y )

    } else {
      return $.alias( y );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'pixelAdjustY', function( y )
  { // adjust YT for pixel movement.
//-----------------------------------------------------------------------------

    const th = $gameMap.tileWidth();
    const displayY = Math.round( this._displayY * th ) / th;
    y = Math.round( y * th ) / th;
    if (
        this.isLoopVertical() &&
        y < displayY - (this.height() - this.screenTileY()) / 2
    ) {
        return y - displayY + $dataMap.height;
    } else {
        return y - displayY;
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'canvasToMapX', function( x )
  { // Aliased canvasToMapX of class Game_Map.
//-----------------------------------------------------------------------------

    if ( this.isPixelMovement() ) {
      return this.canvasToPixelMapX( x );

    } else {
      return $.alias( x );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'canvasToPixelMapX', function( x )
  { // return pixel coordinate rather than a rounded tile coordinate.
//-----------------------------------------------------------------------------

    const zoom = $gameScreen.zoomScale();
    const zx = $gameScreen.zoomX() / zoom;

    const tileWidth = this.tileWidth();
    const originX = this._displayX * tileWidth;

    const mapX = ( ( zx + originX + x / zoom ) / tileWidth );
    return ( this.roundX( mapX ) - 0.5 );

  }, false );


//-----------------------------------------------------------------------------
  $.alias( Game_Map, 'canvasToMapY', function( y )
  { // Aliased canvasToMapY of class Game_Map.
//-----------------------------------------------------------------------------

  if ( this.isPixelMovement() ) {
    return this.canvasToPixelMapY( y );

  } else {
    return $.alias( y );

  }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'canvasToPixelMapY', function( y )
  { // return pixel coordinate rather than a rounded tile coordinate.
//-----------------------------------------------------------------------------

    const zoom = $gameScreen.zoomScale();
    const zy = $gameScreen.zoomY() / zoom;
    const tileHeight = this.tileHeight();

    const originY = ( this._displayY * tileHeight );

    const mapY = ( ( zy + originY + y / zoom ) / tileHeight );
    return ( this.roundY( mapY ) - 0.5 );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'isColliderIgnored', function( id )
  { // return if the tile is ignored.
//-----------------------------------------------------------------------------

    if ( $collisionInfo[this._tilesetId] ) {
      if ( $collisionInfo[this._tilesetId][id] ) {
        return !!$collisionInfo[this._tilesetId][id].ignored;
      }
    }

    return false;

  }, false );
if ( Imported.PrimeParallax ) {

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'getPrimeLayers', function()
  { // return all prime parallax prime layers.
//-----------------------------------------------------------------------------

    const layers = Object.keys( PARALLAX_LAYERS );

    return layers.map( layer => {
      const data = $gameMap.getLayer( PARALLAX_LAYERS[layer] );
      if ( !data ) return null;
      const {_imageFolder:folder, _imageName:name } = data;
      return folder.replace( `img/${PARAMS.folderName}/`, '[PRIME]' ) + name;
    } ).filter( n => { return !!n } );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Map, 'getPrimeCollidersAt', function( x, y )
  { // return the mz plus prime parallax colliders.
//-----------------------------------------------------------------------------

    let colliders = [];
    const mw = $gameMap.width();
    const mh = $gameMap.height();
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    const layers = this.getPrimeLayers();
    const id = x.mod( mw ) + ( y.mod( mh ) * mw );

    for ( let i = 0, l = layers.length; i < l; i++ ) {
      const list = $collisionInfo[layers[i]];
      const data = list && list[id] ? list[id].collider || null : null;
      if ( data ) {
        let collider = null;

        if ( Utils.RPGMAKER_NAME == 'MV' ) {
          collider = Object.assign( new window[data.constructor.name](), data );

        } else {
          if ( !data['@'] && data.constructor ) data['@'] = data.constructor.name;
          collider = Object.assign( new window[data['@']](), data );

        }

        if ( CollisionManager.isSegment( collider ) ) {
          collider._start = Vector2.clone( collider._start );
          collider._end = Vector2.clone( collider._end );
        }

        collider.x = data.x + x * tw +  ( collider._ox || 0 );
        collider.y = data.y + y * th +  ( collider._oy || 0 );
        collider._regionId = $gameMap.regionId( x, y );
        collider._tileId = id;

        colliders.push( collider );

      }
    };

    return colliders[colliders.length - 1] || null;

  }, false );

}
//=============================================================================
// Game_Character :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'turnTowardCharacter', function( character )
  { // Aliased turnTowardCharacter of class Game_Character.
//-----------------------------------------------------------------------------

    if ( this.is8DirSprite() ) {
      this.turnTowardCharacter8( character );

    } else {
      $.alias( character );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'turnTowardCharacter8', function( character )
  { // move toward the character in 8 directions.
//-----------------------------------------------------------------------------

    const vec2 = new Vector2( this.deltaXFrom( character.x ), this.deltaYFrom( character.y ) );
    const d = this.getDirectionFromVector( vec2 );

    this.setDirection( this.reverseDir( d ) );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'turnAwayFromCharacter', function( character )
  { // Aliased turnAwayFromCharacter of class Game_Character.
//-----------------------------------------------------------------------------

    if ( this.is8DirSprite() ) {
      this.turnAwayFromCharacter8( character );

    } else {
      $.alias( character );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'turnAwayFromCharacter8', function( character )
  { // move toward the character in 8 directions.
//-----------------------------------------------------------------------------

    const vec2 = new Vector2( this.deltaXFrom( character.x ), this.deltaYFrom( character.y ) );
    const d = this.reverseDir( this.getDirectionFromVector( vec2 ) );

    this.setDirection( this.reverseDir( d ) );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'moveTowardCharacter', function( character )
  { // Aliased moveTowardCharacter of class Game_Character.
//-----------------------------------------------------------------------------

    if ( this.is8DirSprite() ) {
      this.moveTowardCharacter8( character );

    } else {
      $.alias( character );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'moveTowardCharacter8', function( character )
  { // move toward the character in 8 directions.
//-----------------------------------------------------------------------------

    const vec2 = new Vector2( this.deltaXFrom( character.x ), this.deltaYFrom( character.y ) );
    const d = this.reverseDir( this.getDirectionFromVector( vec2 ) );
    if ( d % 2 == 1 ) {
      const horz = ( d == 1 || d == 7 ) ? 4 : 6;
      const vert = ( d == 3 || d == 1 ) ? 2 : 8;

      this.moveDiagonally( horz, vert );
    } else {
      this.moveStraight( d );
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'moveAwayFromCharacter', function( character )
  { // Aliased moveAwayFromCharacter of class Game_Character.
//-----------------------------------------------------------------------------

    if ( this.is8DirSprite() ) {
      this.moveAwayFromCharacter8( character );

    } else {
      $.alias( character );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'moveAwayFromCharacter8', function( character )
  { // move toward the character in 8 directions.
//-----------------------------------------------------------------------------

    const vec2 = new Vector2( this.deltaXFrom( character.x ), this.deltaYFrom( character.y ) );
    const d = this.reverseDir( this.getDirectionFromVector( vec2 ) );

    if ( d % 2 == 1 ) {
      const horz = ( d == 1 || d == 7 ) ? 6 : 4;
      const vert = ( d == 3 || d == 1 ) ? 8 : 2;

      this.moveDiagonally( horz, vert );
    } else {
      this.moveStraight( this.reverseDir( d ) );
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'moveRandom', function()
  { // Aliased moveRandom of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( this.is8DirSprite() ) {
      this.moveRandom8();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'moveRandom8', function()
  { // Aliased moveRandom of class Game_Character.
//-----------------------------------------------------------------------------

    if ( Chaucer.CAP.params.enable8Dir ) {

      const directions = [1, 2, 3, 4, 6, 7, 8, 9];
      const dir = directions[Math.randomInt( 8 )];

      if ( dir % 2 == 0 ) {
          this.moveStraight( dir );

      } else {
        let down = [1, 3];
        let left = [1, 7];
        const horz = left.indexOf( dir ) >= 0 ? 4 : 6;
        const vert = down.indexOf( dir ) >= 0 ? 2 : 8;
        this.moveDiagonally( horz, vert );
      }

    } else {
      this.moveRandom();

    }


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'moveForward', function()
  { // Aliased moveForward of class Game_Character.
//-----------------------------------------------------------------------------

    if ( this.direction() % 2 == 1 ) {
      this.moveForwardDiagonal();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'moveForwardDiagonal', function()
  { // move the character forward diagonally.
//-----------------------------------------------------------------------------

    let horz, vert = 0;
    const lastDirectionFix = this.isDirectionFixed();
    this.setDirectionFix(true);
    horz = [7, 1].includes( this.direction() ) ? 4 : 6;
    vert = [1, 3].includes( this.direction() ) ? 2 : 8;
    this.moveDiagonally( horz, vert );
    this.setDirectionFix(lastDirectionFix);



  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Character, 'moveBackward', function()
  { // Aliased moveBackward of class Game_Character.
//-----------------------------------------------------------------------------

    const lastDirectionFix = this.isDirectionFixed();

    if ( this.direction() % 2 == 1 ) {
      this.moveBackwardDiagonal();
    } else {
      $.alias();

    }

    this.setDirectionFix( true );
    this._destination.directionFix = lastDirectionFix;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'moveBackwardDiagonal', function()
  { // move backwards diagonally.
//-----------------------------------------------------------------------------

    let horz, vert = 0;
    const lastDirectionFix = this.isDirectionFixed();
    this.setDirectionFix(true);
    horz = [7, 1].includes( this.direction() ) ? 6 : 4;
    vert = [1, 3].includes( this.direction() ) ? 8 : 2;
    this.moveDiagonally( horz, vert );
    this.setDirectionFix(lastDirectionFix);

  }, false );

//=============================================================================
// Game_CharacterBase :
//=============================================================================

//-----------------------------------------------------------------------------
Object.defineProperties( Game_CharacterBase.prototype, {
//-----------------------------------------------------------------------------
  position: {

    // Get Position :
    get: function() {
      return new Vector2( this._realX, this._realY );
    },

    // Set Position :
    set: function( value ) {
      this._x = this._realX = value.x; this._y = this._realY = value.y;
    }

  }

} );

//-----------------------------------------------------------------------------
$.alias( Game_CharacterBase, 'initMembers', function()
{ // Aliased initMembers of class Game_CharacterBase.
//-----------------------------------------------------------------------------

  const tw = $gameMap ? $gameMap.tileWidth() : 48;
  const th = $gameMap ? $gameMap.tileHeight() : 48;

  $.alias();

  this._path = null;
  this._colliderType = 'rectangle';
  this._8dirSprite = false;
  this._requestThrough = null;
  this.colliderOffset = new Vector2( 0, 0 );
  this.acceleration = new Vector2( 0, 0 );
  this.velocity = new Vector2( 0, 0 );
  this._travelDistance = 1;
  this._traction = 1;
  this._friction= 1;
  this._moveHistory = [];
  this.colliders = {
    rectangle: new Rect( 0, 0, tw, th, 3, 3 ),
    circle: new Circle( 0, 0, tw / 2 )
  }
  this._destination = null;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'moveHistorySize', function()
  { // return the full size of move history in pixels.
//-----------------------------------------------------------------------------

    let total = new Vector2( 0, 0 );

    for ( let i = 1, l = this._moveHistory.length; i < l; i++ ) {

      const a = this._moveHistory[i - 1]
      const b = this._moveHistory[i]
      const c = Vector2.subtract( b, a );
      if ( c.x > $gameMap.width() / 2 ) c.x -= $gameMap.width();
      if ( c.x < -$gameMap.width() / 2 ) c.x += $gameMap.width();
      if ( c.y > $gameMap.height() / 2 ) c.y -= $gameMap.height();
      if ( c.y < -$gameMap.height() / 2 ) c.y += $gameMap.height();

      total.x += Math.abs( c.x );
      total.y += Math.abs( c.y );
    };

    return total.magnitude;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'setColliderType', function( type )
  { // set the collider type.
//-----------------------------------------------------------------------------

    if ( type == 'circle' ) this._colliderType = 'circle';
    if ( type == 'rectangle' ) this._colliderType = 'rectangle';

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'realMoveSpeed', function()
  { // Aliased realMoveSpeed of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.pixelRealMoveSpeed();

    } else {
      return $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'pixelRealMoveSpeed', function()
  { // return the real move speed for pixel movement.
//-----------------------------------------------------------------------------

    let n = $.params.dashSpeed;

    if ( isNaN( n ) ) n = 1.0;
    return this._moveSpeed + ( this.isDashing() ? n : 0 )

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_CharacterBase, 'setPosition', function( x, y )
{ // Aliased setPosition of class Game_CharacterBase.
//-----------------------------------------------------------------------------

  if ( $gameMap && $gameMap.isPixelMovement() ) {
    this.setPixelPosition( x, y );

  } else {
    $.alias( x, y );

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'setPixelPosition', function( x, y )
{ // set the pixel position of the character.
//-----------------------------------------------------------------------------

  this._x = x;
  this._y = y;
  this._realX = x;
  this._realY = y;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'repositionColliders', function( position, debug )
{ // position the colliders to the players current location.
//-----------------------------------------------------------------------------

  const { circle, rectangle } = this.colliders;
  const px = ( position.x + 0.5 ) * $gameMap.tileWidth();
  const py = ( position.y + 0.5  ) * $gameMap.tileHeight();

  // circle collider.
  circle.x = px + ( circle._ox || 0 );
  circle.y = py + ( circle._oy || 0 );

  // rectangle.
  rectangle.x = px - rectangle.width / 2 + ( rectangle._ox || 0 );
  rectangle.y = py - rectangle.height / 2 + ( rectangle._oy || 0 );

  rectangle._eventId = this._eventId;
  circle._eventId = this._eventId;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getCollider', function()
{ // return the current collider.
//-----------------------------------------------------------------------------

  this.repositionColliders( this.position );

  if ( this.isColliderRect() ) {
    const { x, y, width, height } = this.colliders.rectangle;
    const rectangle = new Rect( x, y, width, height );
    rectangle._eventId = this.colliders.rectangle._eventId

    return rectangle;

  } else {
    const { x, y, radius } = this.colliders.circle;
    const circle = new Circle( x, y, radius );
    circle._eventId = this.colliders.circle._eventId

    return circle;

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getColliderAt', function( position, debug )
{ // return the current collider.
//-----------------------------------------------------------------------------


  this.repositionColliders( position, debug );

  if ( this.isColliderRect() ) {
    const { x, y, width, height } = this.colliders.rectangle;
    const rectangle = new Rect( x, y, width, height );
    rectangle._eventId = this.colliders.rectangle._eventId

    return rectangle;

  } else {
    const { x, y, radius } = this.colliders.circle;
    const circle = new Circle( x, y, radius );
    circle._eventId = this.colliders.circle._eventId;

    return circle;

  }

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'tileColliderDataObj', function( x, y )
  { // return collider tile object data format.
//-----------------------------------------------------------------------------


    let tx = x.mod( $gameMap.width() );
    let ty = y.mod( $gameMap.height() );
    // if ( x < 0 ) tx += $gameMap.width();
    // if ( y < 0 ) ty += $gameMap.height();
    // if ( x >= $gameMap.width() ) tx -= $gameMap.width();
    // if ( y >= $gameMap.height() ) ty -= $gameMap.height();
    let allTiles = $gameMap.allTiles( tx, ty );

    let obj = {
      x: x,
      y: y,
      ids: allTiles.filter( n => n > 0 && !$gameMap.isColliderIgnored( n ) ),
      region: $gameMap.regionId( tx, ty ),
      parallax: null
    };

    this.convertDataToColliders( obj );

    return obj;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'convertDataToColliders', function( obj )
  { // Definition.
//-----------------------------------------------------------------------------

    let { x, y } = obj;
    let restrictedRegions = this.restrictedRegions();
    let regionValid = obj.region && restrictedRegions.includes( obj.region );

    obj.parallax = $gameMap.parallaxCollider( x, y );
    obj.region = regionValid ? $gameMap.getFullRectTile( x, y ) : null;

    obj.ids.forEach(( id, i ) => {

      const { TILE_ID_A1:a1, TILE_ID_A2:a2, TILE_ID_A3:a3, TILE_ID_A4:a4 } = Tilemap;
      let auto = Tilemap.isAutotile( id );
      obj.ids[i] = auto ? Math.floor( ( id - a1 ) / 48 ) * 48 + a1 : id;

    })
    obj.ids = obj.ids.map( n => $gameMap.tileCollider( n, x, y ) );

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'mapCollidersAtPos', function( x, y )
{ // return tile data for the tile at x and y.
//-----------------------------------------------------------------------------

  const { TILE_ID_A1 } = Tilemap;

  if ( !$dataMap ) return [$gameMap.getFullRectTile( x, y )];

  const parallax = $gameMap.parallaxName();
  const tile = this.tileColliderDataObj( x, y );
  const regionId = $gameMap.regionId( x, y );

  if ( tile.region ) return [tile.region];
  if ( tile.parallax ) return [tile.parallax];
  const tileColliders = tile.ids;

  const flags = $gameMap.tilesetFlags();
  const best = tileColliders.filter( c => !!c )[0];
  const first = tileColliders[0];
  const bit = 0xF;

  if ( regionId == $.params.stackRegion ) {
    return tileColliders.filter( c => !!c );
  }

  if ( best && !first ) {
    if ( ( flags[tile.ids[0]] & 0x10 ) === 0 ) return [tileColliders[0]];
  }

  return [tileColliders[0]].filter( c => !!c );

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getMapColliders', function()
{ // get map colliders.
//-----------------------------------------------------------------------------

  let colliders = [];

  if ( this.isThrough() ) return colliders;

  const aabb = this.getColliderAt( this.position ).aabb;
  const tw = $gameMap.tileWidth();
  const th = $gameMap.tileHeight();
  const center = aabb.center;

  const x = Math.floor( aabb.x / tw ) - 1;
  const y = Math.floor( aabb.y / th ) - 1;
  const w = Math.ceil( ( aabb.x + aabb.width ) / tw );
  const h = Math.ceil( ( aabb.y + aabb.height ) / th );

  for ( var i = x; i <= w; i++ ) {
    for ( var j = y; j <= h; j++ ) {
      colliders = colliders.concat( this.mapCollidersAtPos( i, j ) );
    }
  }

  return colliders;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getMapCollidersInRect', function( rect )
{ // get map colliders between two points.
//-----------------------------------------------------------------------------

  let colliders = [];

  const tw = $gameMap.tileWidth();
  const th = $gameMap.tileHeight();

  const x = Math.floor( rect.x / tw ) - 1;
  const y = Math.floor( rect.y / th ) - 1;
  const w = Math.ceil( ( rect.x + rect.width ) / tw ) + 1;
  const h = Math.ceil( ( rect.y + rect.height ) / th ) + 1;

  for ( var i = x; i <= w; i++ ) {
    for ( var j = y; j <= h; j++ ) {
      colliders = colliders.concat( this.mapCollidersAtPos( i, j ) );
    }
  }

  return colliders;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'distanceTo', function( character )
  { // return the distance from this character to the character specified.
//-----------------------------------------------------------------------------

    const x = Math.abs( this.x - character.x );
    const y = Math.abs( this.y - character.y );

    return x + y;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'allCharacters', function()
{ // return all characters in a single array.
//-----------------------------------------------------------------------------

  const player = [$gamePlayer];
  const events = $gameMap.events();
  // const followers = $gamePlayer._followers._data.filter( f => !!f.actor() );
  const vehicles = $gameMap.vehicles().filter( v => v._mapId == $gameMap.mapId() );

  return events.concat( vehicles ).concat( player );//.concat( followers );

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getCharacterColliders', function()
{ // return character colliders.
//-----------------------------------------------------------------------------

  if ( !this.isNormalPriority() ) return [];

  const characters = this.allCharacters().filter( char => {
      if ( !char || char === this ) return false;
      if ( char.isThrough() ) return false;
      if ( Imported.OcRam_Passages ) {
        if ( char._higherLevel != this._higherLevel ) return false;
      }
      return true;
   } );

  return characters.map( char => { return char.getCollider(); } );

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getValidColliders', function()
{ // get all valid colliders.
//-----------------------------------------------------------------------------

  let colliders = this.getMapColliders().concat( this.getCharacterColliders() );

  if ( Imported.OcRam_Passages ) {
    colliders = colliders.concat( this.ocRamPassageColliders() );
  }

  return colliders;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'setTravelDistance', function( value )
{ // set the travel distance when using the "move straight" command.
//-----------------------------------------------------------------------------

  this._travelDistance = value;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'setDestination', function( x, y )
  { // set a new destination for the character.
//-----------------------------------------------------------------------------

    let vec2 = new Vector2( x, y );

    if ( x.constructor.name == 'Vector2' ) vec2 = x;

    const start = this.position;
    const last = this.position;
    const end = vec2;
    const acceleration = Vector2.normalized( Vector2.subtract( end, start ) );

    this._destination = { start, last, end, acceleration };
    this.setDirectionFromVector( acceleration );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'setDirectionFromVector', function( vec2 )
  { // set the destination based on the vector provided.
//-----------------------------------------------------------------------------

    let direction = this.getDirectionFromVector( vec2 ) || this.direction();
    this.setDirection( direction );

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'clearDestination', function()
{ // clear the current destination.
//-----------------------------------------------------------------------------

    if ( this._destination ) {

      const lastDirectionFix = this._destination.directionFix;

      this._destination = null;

      if ( lastDirectionFix !== undefined ) this.setDirectionFix( lastDirectionFix );

    }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'hasDestination', function()
{ // return if the character has a destination.
//-----------------------------------------------------------------------------

  return !!this._destination;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'destinationReached', function()
  { // return if the destination has been reached.
//-----------------------------------------------------------------------------

    if ( !this._destination ) return false;
    return Vector2.equals( this._destination.end, this.position );

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_CharacterBase, 'isMoving', function()
{ // Aliased isMoving of class Game_CharacterBase.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    return this.isPixelMoving();

  } else {
    return $.alias();

  }
}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'isPixelMoving', function()
{ // return if character is moving in pixel movement.
//-----------------------------------------------------------------------------

  if ( this.acceleration.x != 0 || this.acceleration.y != 0 ) {
    return true;
  }

  // if ( this._path && this._path.status == 'searching' ) return true;
  return !!this.hasDestination();

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getTraction', function()
{ // return the characters traction or starting speed.
//-----------------------------------------------------------------------------

  const x = Math.round( this.x );
  const y = Math.round( this.y );
  const list = $.params.tractionRegions;
  const regionId = this.regionId();
  const data = list.find( data => data.regionId == regionId );

  if ( this.isJumping() ) return 1;
  // TODO: tie in the characters friction/traction.
  return data ? data.traction : 1;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getFriction', function()
  { // return the characters frition or stopping speed.
//-----------------------------------------------------------------------------

    const x = Math.round( this.x );
    const y = Math.round( this.y );
    const list = $.params.tractionRegions;
    const regionId = $gameMap.regionId( x, y );
    const data = list.find( data => data.regionId == regionId );

    if ( this.isJumping() ) return 1;
    // TODO: tie in the characters friction/traction!
    return data ? ( data.friction || data.traction ) : 1;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'accelerationSpeed', function()
{ // return the amount of speed when accelerating.
//-----------------------------------------------------------------------------

  return this.distancePerFrame() * this.getTraction();

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'decelerationSpeed', function()
{ // return the amount of speed when accelerating.
//-----------------------------------------------------------------------------

  return this.distancePerFrame() * this.getFriction();

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_CharacterBase, 'moveStraight', function( d )
{ // Aliased moveStraight of class Game_CharacterBase.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.pixelMoveStraight( d );

  } else {
    $.alias( d );

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'pixelMoveStraight', function( d )
{ // move straight for pixel movement.
//-----------------------------------------------------------------------------

  const distance = this._travelDistance;
  const x = this.x + ( d == 4 ? -1 : d == 6 ? 1 : 0 ) * distance;
  const y = this.y + ( d == 8 ? -1 : d == 2 ? 1 : 0 ) * distance;

  this.setDirection( d );
  this.setDestination( new Vector2( x, y ) );

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_CharacterBase, 'moveDiagonally', function( horz, vert )
{ // Aliased moveStraight of class Game_CharacterBase.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.pixelMoveDiagonally( horz, vert );

  } else {
    $.alias( horz, vert );

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'pixelMoveDiagonally', function( horz, vert )
{ // move straight for pixel movement.
//-----------------------------------------------------------------------------

  const distance = this._travelDistance;

  const x = this.x + ( horz == 4 ? -1 : horz == 6 ? 1 : 0 ) * distance;
  const y = this.y + ( vert == 8 ? -1 : vert == 2 ? 1 : 0 ) * distance;

  if (this._direction === this.reverseDir(horz)) {
      this.setDirection(horz);
  }
  if (this._direction === this.reverseDir(vert)) {
      this.setDirection(vert);
  }

  this.setDestination( new Vector2( x, y ) );
  this._destination.isDiag = true;
}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'isSliding', function()
{ // return if the character is sliding.
//-----------------------------------------------------------------------------

  return !this.isMoving() && ( this.velocity.x || this.velocity.y );

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'refreshBushDepth', function()
  { // Aliased refreshBushDepth of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelRefreshBushDepth();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'pixelRefreshBushDepth', function()
  { // refresh bush depth for pixel movement.
//-----------------------------------------------------------------------------

    if (
      this.isNormalPriority() &&
      !this.isObjectCharacter() && this.isOnBush() && !this.isJumping()
    ) {

      if ( Utils.RPGMAKER_NAME == 'MZ' ) {
        this._bushDepth = $gameMap.bushDepth();

      } else {
        this._bushDepth = 12;

      }

    } else {
      this._bushDepth = 0;

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase , 'isOnLadder', function( x, y )
  { // Aliased isOnLadder of class Game_CharacterBas .
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.isPixelOnLadder( x, y );

    } else {
      $.alias( x, y );

    }


  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isPixelOnLadder', function( /*x, y*/ )
  { // return if the character is currently on a ladder.
//-----------------------------------------------------------------------------

    const collider = this.getColliderAt( this.position );
    const { x, y } = collider.center;
    const radius = collider.radius || collider.height / 2;

    const tx = Math.round( x / $gameMap.tileWidth() - 0.5 );
    const ty0 = Math.round( ( y + radius ) / $gameMap.tileHeight() - 0.5 );
    const ty1 = Math.round( ( y - radius ) / $gameMap.tileHeight() - 0.5 );

    return $gameMap.isLadder( tx, ty0 ) || $gameMap.isLadder( tx, ty1 );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'isOnBush', function( x, y )
  { // Aliased isOnBush of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.isPixelOnBush( x, y );

    } else {
      return $.alias( x, y );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isPixelOnBush', function( /*x, y*/ )
  { // retrn if the character is on a bush.
//-----------------------------------------------------------------------------

    const { x, y } = this.getColliderAt( this.position ).center;
    const tx = Math.round( x / $gameMap.tileWidth() - 0.5 );
    const ty = Math.round( y / $gameMap.tileHeight() - 0.5 );

    return $gameMap.isBush( tx, ty );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'terrainTag', function()
  { // Aliased terrainTag of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.pixelTerrainTag();

    } else {
      return $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'pixelTerrainTag', function()
  { // return the pixel terrain tag.
//-----------------------------------------------------------------------------

    const { x, y } = this.getColliderAt( this.position ).center;
    const tx = Math.round( x / $gameMap.tileWidth() - 0.5 );
    const ty = Math.round( y / $gameMap.tileHeight() - 0.5 );

    return $gameMap.terrainTag( tx, ty );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'regionId', function()
  { // Aliased regionId of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.pixelRegionId();

    } else {
      return $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'pixelRegionId', function()
  { // return the region id on pixel movement map.
//-----------------------------------------------------------------------------


    const { x, y } = this.getColliderAt( this.position ).center;
    const tx = Math.round( x / $gameMap.tileWidth() - 0.5 );
    const ty = Math.round( y / $gameMap.tileHeight() - 0.5 );

    return $gameMap.regionId( tx, ty );

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_CharacterBase, 'update', function()
{ // Aliased update of class Game_CharacterBase.
//-----------------------------------------------------------------------------

  const pxlMovement = $gameMap.isPixelMovement();
  if ( pxlMovement ) this.updateVelocity();
  $.alias();
  if ( pxlMovement ) this.updateDestination();
  if ( pxlMovement && this.isSliding() ) this.updateSlide();
  if ( pxlMovement && this._path ) this.updatePath();

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isCharacterInPath', function( path )
  { // return if any character is in the next move in the path.
//-----------------------------------------------------------------------------

    const node = path[path.length - 1];
    const c = this.getColliderAt( node, true );
    const characters = this.allCharacters();
    for ( let i = 0, l = characters.length; i < l; i++ ) {
      if ( characters[i] == this ) continue;
      if ( this.isThrough() || characters[i].isThrough() ) continue;
      if ( this.isNormalPriority() != characters[i].isNormalPriority() ) continue;
      const r = characters[i].getCollider();
      if ( CollisionManager.aabbCollided( c, r ) ) return true;
    };

    return false;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'updatePath', function()
  { // update the characters path.
//-----------------------------------------------------------------------------

    if ( !this.isMoving() && !this.hasDestination() ) {

      if ( this._path.newPath ) {
        if ( this._path.newPath.status == 'searching' ) return this.resetStopCount();
        if ( this._path.newPath.status == 'complete' ) {
          this._path = this._path.newPath;

        } else if ( this._path.newPath.status == 'fail' ) {
          if ( this.isCharacterInPath( this._path ) ) {
            return this.resetStopCount();
          }
          this._path.newPath = null;
          this._path.status = 'execute';

        }
      }
      if ( this._path.status == 'searching' ) return this.resetStopCount();
      if ( this._path.status == 'fail' ) return this._path = undefined;
      if ( this._path.status == 'complete' ) {
        this._path.status = 'execute';
        this._path.pop();
        if ( this._path.length == 0 ) {
          return this._path.status = 'fail';
        }
        return;
      }

      if ( this.isCharacterInPath( this._path ) ) {
        if ( this._path.newPath ) return;
        const moveRoute = this._moveRoute;
        this._path.status = 'searching';
        const { x, y } = this._path[0];
        this.findPathTo( x, y, this._path );
        return;
      }

      const node = this._path.pop();
      this.setDestination( new Vector2( node.x, node.y ) );

      if ( this._path.length == 0 ) this._path = null;

    }

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'updateSlide', function()
{ // update sliding.
//-----------------------------------------------------------------------------

  if ( !this.isJumping() ) {
    this.updateVelocityX();
    this.updateVelocityY();
    this.updateMove();
  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'updateVelocity', function()
{ // Definition.
//-----------------------------------------------------------------------------

  this.updateVelocityX();
  this.updateVelocityY();

  const dpf = this.distancePerFrame();
  const magnitude = this.velocity.magnitude;
  this.velocity.magnitude = ( magnitude ).clamp( 0, dpf );

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'updateDestination', function()
  { // update the destination.
//-----------------------------------------------------------------------------

    const destination = this._destination;
    if ( destination ) {
      let end = Vector2.clone( destination.end );
      end.x = end.x.mod( $gameMap.width() );
      end.y = end.y.mod( $gameMap.height() );

      if ( Vector2.equals( this.position, end ) ) {
        this.clearDestination();
        this.refreshBushDepth();
      }

    } else if ( this.isRequestingThrough() && !this._followers.areGathering() ) {
      if ( this._vehicleGettingOn || this._vehicleGettingOff ) return;
      this.setThrough( this._requestThrough );
      this.clearThroughRequest();
    }

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'updateVelocityX', function()
{ // update velocity on the x axis.
//-----------------------------------------------------------------------------

  const ax = this.acceleration.x;
  const vx = this.velocity.x;
  const svx = Math.sign( vx );
  const sax = Math.sign( ax );

  const opposite = svx > 0 && sax < 0 || svx < 0 && sax > 0;

  if ( ax ) this.velocity.x += ax;

  if ( !ax || opposite ) {
    const dx = this.decelerationSpeed() * svx;
    const min = svx > 0 ? 0 : -this.distancePerFrame();
    const max = svx > 0 ? this.distancePerFrame() : 0;

    this.velocity.x = ( this.velocity.x - dx ).clamp( min, max );

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'updateVelocityY', function()
{ // update velocity on the y axis.
//-----------------------------------------------------------------------------

  const ay = this.acceleration.y;
  const vy = this.velocity.y;

  const svy = Math.sign( vy );
  const say = Math.sign( ay );

  const opposite = svy > 0 && say < 0 || svy < 0 && say > 0;

  if ( ay ) this.velocity.y += ay;

  if ( !ay || opposite ) {
    const dy = this.decelerationSpeed() * svy;
    const min = svy > 0 ? 0 : -this.distancePerFrame();
    const max = svy > 0 ? this.distancePerFrame() : 0;

    this.velocity.y = ( this.velocity.y - dy ).clamp( min, max );

  }

}, false );
// TODO: add region id to allow stacked colliders.

// -----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'updateMove', function()
  { // Aliased updateMove of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {

      if ( !this.isJumping() ) this.updatePixelMove();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'updatePixelMove', function()
  { // update pixel based movement.
//-----------------------------------------------------------------------------

    const last = this.position;

    if ( this.hasDestination() ) {
      this.updateDestinationMove();

    } else {
      this.updateVelocityMove();

    }

    this._isMoved = true;
    this._collisionXCharacter = false;
    this.detectCollision( last );
    this.clampPositionToMap();

    if ( Math.abs( this.position.x - last.x ) < Number.EPSILON )
      this.velocity.x = 0;

    if ( Math.abs( this.position.y - last.y ) < Number.EPSILON )
      this.velocity.y = 0;

    if ( this.hasDestination() ) this.recalculateDestination( last );

    const stepSize = Vector2.subtract( this.position, last ).magnitude;
    const lastStepSize = Math.floor( $gameParty._steps );

    if ( this._isMoved ) {

      this.increaseSteps( stepSize );

      if ( Math.floor( $gameParty._steps ) != lastStepSize ) {
        $gameParty.onPlayerWalk();
      }

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'jump', function( xPlus, yPlus )
  { // Aliased jump of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    $.alias( xPlus, yPlus );
    this._jumpCount = Math.round( this._jumpCount );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'updateJump', function()
  { // Aliased updateJump of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    $.alias();
    if ( $gameMap.isPixelMovement() && this._jumpCount === 0 ) {
      this.clearDestination();
      this._moveHistory = [];
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'recalculateDestination', function( last )
  { // recalculate the destination acceleration direction after collision.
//-----------------------------------------------------------------------------

    if ( this.hasDestination() ) {

      const delta = Vector2.subtract( last, this.position );

      if ( Vector2.dot( delta, this._destination.acceleration ) > 0 ) {
        this.clearDestination();

      } else if ( delta.magnitude < ( 0.25 / $gameMap.tileWidth() ) ) {
        let hit = this._lastCollision;
        const character = hit ? this.characterFromCollision( hit ) : null;
        const route = this._moveRoute;

        if ( !character || character && ( !route || route.skippable ) ) {
          this.clearDestination();
        }

      } else if ( !this.destinationReached() ) {
        const { end } = this._destination;
        let acceleration = Vector2.subtract( end, this.position );

        acceleration = Vector2.normalized( acceleration );

        this._destination.acceleration = acceleration;
        this.setDirectionFromVector( Vector2.reversed( delta ) );

      }

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'clampPositionToMap', function()
  { // clamp the players position to the map.
//-----------------------------------------------------------------------------

    const minX = 0;
    const maxX = $gameMap.width() - 1;
    const minY = 0;
    const maxY = $gameMap.height() - 1;

    if ( $gameMap.isLoopHorizontal() ) {
      this._x = ( this._x ).mod( maxX + 1 )
      this._realX = ( this._realX ).mod( maxX + 1 )

    } else {
      this._x = ( this._x ).clamp( minX, maxX );
      this._realX = ( this._realX ).clamp( minX, maxX );

    }

    if ( $gameMap.isLoopVertical() ) {
      this._y = ( this._y ).mod( maxY + 1 );
      this._realY = ( this._realY ).mod( maxY + 1 );

    } else {
      this._y = ( this._y ).clamp( minY, maxY );
      this._realY = ( this._realY ).clamp( minY, maxY );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Character, 'ocRamRegionCollider', function( x, y )
  { // return if the region is blocked via ocram pasage plugin.
//-----------------------------------------------------------------------------

    const $ = OcRam.Passages.parameters;
    const coverId = Number( $['Cover Region ID'] );
    const blockedId = Number( $['Block Region ID'] );
    const overpassId = Number( $['Overpass Region ID'] );
    const overheadId = Number( $['Overhead Region ID'] );
    const underpassId = Number( $['Underpass Region ID'] );
    const autoCoverId = Number( $['Cover Autotile Region ID'] );
    const blockedHighLowId = Number( $['Block High-Low Region ID'] );
    const nextRegion = $gameMap.regionId( x, y );
    const regionId = this.regionId();
    const isHighLevel = this._higherLevel;
    const isCover = ( regionId == coverId || regionId == autoCoverId );

    let blocked = false;
    if ( nextRegion == blockedId ) {
      blocked = true;

    } else {
      if ( isHighLevel ) {
        if ( isCover ) {

          if ( nextRegion == underpassId ) blocked = true;
        }

        if ( regionId == blockedHighLowId && nextRegion == underpassId ) {
            blocked = true;
        }
      } else {
        if ( isCover && ( nextRegion == overpassId || nextRegion == 0 ) ) {
          blocked = true;
        }
        if ( nextRegion == overheadId ) blocked = true;
      }

    }

    const rx = Math.round( x );
    const ry = Math.round( y )

    if ( blocked ) return $gameMap.getFullRectTile( rx, ry );

    return null;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'ocRamPassageColliders', function()
  { // get all oc ram passage colliders.
//-----------------------------------------------------------------------------

    const x1 = Math.floor( this.x - 2 );
    const x2 = Math.ceil( this.x + 2 );
    const y1 = Math.floor( this.y - 2 );
    const y2 = Math.ceil( this.y + 2 );
    const colliders = [];

    for ( let i = x1, l = x2; i < l; i++ ) {
      for ( let j = y1, l = y2; j < l; j++ ) {

        const collider = this.ocRamRegionCollider( i, j );
        if ( collider ) colliders.push( collider );

      };
    };

    return colliders;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'detectCollision', function( lastPos )
  { // detect any colisions and adjust for them!.
//-----------------------------------------------------------------------------

    let colliders = this.getValidColliders();
    let hit = null;
    let limit = 5;
    let eventCollision = false;
    if ( this.isDebugThrough() ) return false;
    if ( this.isJumping() ) return false;
    let lastCollided = null;

    do {

      if ( this.isJumping() || limit-- <= 0 ) break;

      let hits = [];
      const collider = this.getCollider();
      for ( let i = 0; i < colliders.length; i++ ) {
        hit = CollisionManager.testCollision( collider, colliders[i] );
        if ( !hit ) continue;
        hits.push( hit );
      }

      hit = this.getBestCollision( hits );
      if ( hit ) {
        let resolved = this.resolveCollision( hit );
        this._isMoved = !Vector2.equals( lastPos, this.position );
        if ( resolved ) {
          this._lastCollision = hit;
          lastCollided = hit;
        }
      }

    } while ( hit );

    if ( lastCollided ) {
      let coll = lastCollided.b;
      let event = $gameMap.event( coll._eventId );
      this._collisionXCharacter = !!( coll._eventId || coll._vehicleType );
    }

    const route = this._moveRoute;

    if ( this._collisionXCharacter && route && !route.skippable ) {
      const event = $gameMap.event( this._lastCollision.b._eventId );
      const vehicle = $gameMap.vehicle( this._lastCollision.b._vehicleType );
      const char = event || vehicle;
      if ( !this.isThrough() && ( !char || ( !char.isThrough() && char.isNormalPriority() ) ) ) {
        this._x = this._realX = lastPos.x;
        this._y = this._realY = lastPos.y;
      }

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getBestCollision', function( hits )
  { // get the best collision ffrom the collisions provided.
//-----------------------------------------------------------------------------

    const a = hits.filter( hit => !this.characterFromCollision( hit ) );
    const b = hits.filter( hit => !!this.characterFromCollision( hit ) );

    let hit = CollisionManager.getLongestHit( a );
    hit = hit || CollisionManager.getLongestHit( b );

    let character = this.characterFromCollision( hit );

    if ( character && !character.isNormalPriority() ) {

      let hitsFiltered = hits.filter( hit => {
        const character = this.characterFromCollision( hit );
        return !character || character.isNormalPriority();
      } );

      hit = CollisionManager.getLongestHit( hitsFiltered );

    }

    if ( character ) {
      this.checkEventTriggerPixelTouch( character );
    }

    return hit;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'resolveCollision', function( hit )
{ // resolve the collision provided.
//-----------------------------------------------------------------------------

  const character = this.characterFromCollision( hit );
  let result = false;
  if ( !character || ( character.isNormalPriority() && !character.isThrough() && !character.isTile() ) ) {
    if ( !this.isThrough() ) {
      this.attemptCliffJump( hit )
      if ( this.isJumping() ) return;

      const tw = $gameMap.tileWidth();
      const th = $gameMap.tileHeight();

      let overlap = Vector2.divide( hit.overlap, tw );
      let x = this.position.x - overlap.x;
      let y = this.position.y - overlap.y;

      this.position = new Vector2( x, y );

      if ( this.hasDestination() ) {
        if ( Vector2.dot( this._destination.acceleration, overlap ) < 0 ) {
          this.clearDestination();
        }
      }
      result = true;
    }

  }

  if ( character ) {
    if ( character._eventId ) this.checkEventTriggerPixelTouch( character );
    if ( character === this._targetObject ) {
      this._targetObject = null
      this.clearDestination();
      this._path = null;
    }

  }

  return result

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'regionsInCollider', function( collider )
  { // return all region ids in a collider.
//-----------------------------------------------------------------------------

    const aabb = collider.aabb;
    const x = Math.round( aabb.x / $gameMap.width() );
    const y = Math.round( aabb.y / $gameMap.width() );

    let regions = [];

    regions.push( $gameMap.regionId( x, y ) );

    return regions;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getRaysToward', function( count, direction, length = 1, origin )
  { // get rays to fire in the direction specified.
//-----------------------------------------------------------------------------

    if ( this.isColliderRect() ) return this.getRectRaysToward( count, direction, length, origin );
    let rays = [];
    const collider = this.getColliderAt( origin || this.position );
    const start = new Vector2( -direction.y, direction.x );
    start.magnitude = collider.radius - 0.001;

    for ( let i = 0, l = count - 1; i <= l; i++ ) {

      const offset = Vector2.clone( start );
      offset.angle -= 180 * ( l == 0 ? 0.5 : i / l );

      const x = collider.center.x + offset.x;
      const y = collider.center.y + offset.y;

      let ray = new Segment( x, y, direction.x, direction.y );

      ray._end.magnitude = length;
      rays.push( ray );

    }

    return rays;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getRectRaysToward', function( count, direction, length = 1, origin )
  { // return rays for a rectangle ray cast.
//-----------------------------------------------------------------------------

    let rays = [];
    let target;
    let targets = [];

    const collider = this.getColliderAt( origin || this.position );

    collider.x += 0.001;
    collider.y += 0.001;
    collider.width -= 0.002;
    collider.height -= 0.002;

    segments = CollisionManager.segmentsFromShape( collider );

    let top;
    let left;
    let right;
    let bottom;

    for ( let i = 0, l = segments.length; i < l; i++ ) {

      if ( segments[i].vx && !segments[i].vy ) {
        top = !top || top.x > segments[i].x ? segments[i] : top;
        top = !top || top.x > segments[i].x ? segments[i] : top;
        bottom = !bottom || bottom.x < segments[i].x ? segments[i] : bottom;
        bottom = !bottom || bottom.x < segments[i].x ? segments[i] : bottom;

      } else if ( segments[i].vy && !segments[i].vx ) {
        left = !left || left.x > segments[i].x ? segments[i] : left;
        left = !left || left.x > segments[i].x ? segments[i] : left;
        right = !right || right.x < segments[i].x ? segments[i] : right;
        right = !right || right.x < segments[i].x ? segments[i] : right;

      }

    };
    if ( direction.x && !direction.y ) {
      target = direction.x < 0 ? left : right;

    } else if ( direction.y && !direction.x ) {
      target = direction.y < 0 ? top : bottom;

    } else if ( direction.x && direction.y ) {
      if ( direction.x < 0 && direction.y < 0 ) targets = [left, top];
      if ( direction.x > 0 && direction.y < 0 ) targets = [top, right];
      if ( direction.x > 0 && direction.y > 0 ) targets = [right, bottom];
      if ( direction.x < 0 && direction.y > 0 ) targets = [bottom, left];
    }

    if ( targets.length > 0 ) {
      if ( count == 1 ) {
        let t0 = targets[0];
        let t1 = targets[1];
        const sn = new Vector2( -direction.y, direction.x );

        const axis = new Segment( t0.x, t0.y, sn.x, sn.y );
        const x = t0.x;
        const y = t0.y;
        const vx = ( t1.x + t1.vx ) - x
        const vy = ( t1.y + t1.vy ) - y
        const l = new Segment( x, y, vx, vy )
        const s = new Segment( axis.x, axis.y, l.x - axis.x + l.vx, l.y - axis.y + l.vy );
        const p = Segment.projectOnto( s, axis );

        const rvx = direction.x * 100;
        const rvy = direction.y * 100;

        ray = new Segment( l.x + l.vx * 0.5, l.y + l.vy * 0.5, rvx, rvy );

        let hit = CollisionManager.testCollision( ray, t0 );
        hit = hit || CollisionManager.testCollision( ray, t1 );
        hit.overlap.magnitude += 0.1;
        ray.x += rvx - hit.overlap.x;
        ray.y += rvy - hit.overlap.y;

        ray._end.magnitude = length;
        rays.push( ray );

      } else {

        let t0 = targets[0];
        let t1 = targets[1];
        const sn = new Vector2( -direction.y, direction.x );

        const axis = new Segment( t0.x, t0.y, sn.x, sn.y );
        const x = t0.x;
        const y = t0.y;
        const vx = ( t1.x + t1.vx ) - x
        const vy = ( t1.y + t1.vy ) - y
        const l = new Segment( x, y, vx, vy )
        const s = new Segment( axis.x, axis.y, l.x - axis.x + l.vx, l.y - axis.y + l.vy );
        const p = Segment.projectOnto( s, axis );

        for ( let i = 0, len = count; i < len; i++ ) {
          const scale = i / ( count - 1 );
          const vx = direction.x * 100;
          const vy = direction.y * 100;
          let ray;
          if ( scale == 0 ) {
            ray = new Segment( p.x, p.y, vx, vy );

          } else if ( scale == 1 ) {
            ray = new Segment( l.x + l.vx, l.y + l.vy, vx, vy );

          } else {
            ray = new Segment( l.x + l.vx * scale, l.y + l.vy * scale, vx, vy );
            let hit = CollisionManager.testCollision( ray, t0 );
            hit = hit || CollisionManager.testCollision( ray, t1 );
            if ( hit ) {
              hit.overlap.magnitude += 0.1
              ray.x += vx - hit.overlap.x;
              ray.y += vy - hit.overlap.y;
            }

          }

          ray._end.magnitude = length;
          rays.push( ray );

        };

        if ( true ) {

          const vx = direction.x;
          const vy = direction.y;
          const ray = new Segment( t0.x + t0.vx, t0.y + t0.vy, vx, vy );

          ray._end.magnitude = length;
          rays.push( ray );

        }

      }

    } else {

      if ( count == 1 ) {
        const x = target.x + target.vx * 0.5;
        const y = target.y + target.vy * 0.5;
        const vx = direction.x;
        const vy = direction.y;

        let ray = new Segment( x, y, vx, vy );

        ray._end.magnitude = length;
        rays.push( ray );

      } else {
        for ( let i = 0, l = count; i < l; i++ ) {
          const x = target.x + target.vx * ( i / ( count - 1 ) );
          const y = target.y + target.vy * ( i / ( count - 1 ) );
          const vx = direction.x;
          const vy = direction.y;
          let ray = new Segment( x, y, vx, vy );

          ray._end.magnitude = length;
            rays.push( ray );

        };

      }

    }

    return rays;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isJumpActivated', function( collision )
  { // return if the player can jump over the collision provided.
//-----------------------------------------------------------------------------

    const jumpSegments = collision.b._jumpSegments || [];
    const canJump = jumpSegments.includes( collision.id );
    const acceleration = Vector2.normalized( this.acceleration );

    if ( canJump ) this._jumpThreshold++;
    if ( !canJump ) this._jumpThreshold = 0;

    if ( acceleration.magnitude == 0 ) return false;
    if ( Vector2.dot( acceleration, collision.normal ) > -0.9 ) return false;
    if ( !canJump || this._jumpThreshold < 20 ) return false;
    if ( collision._edge ) return false;
    if ( this.isJumping() ) return false;

    return true;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'attemptCliffJump', function( collision )
  { // return if the player jumped off successfully.
//-----------------------------------------------------------------------------

    if ( !this.isJumpActivated( collision ) ) return false;
    const jumpPosition = this.findCliffJumpPosition( collision );

    if ( jumpPosition ) {
      $gamePlayer.gatherFollowers();
      this.setDirectionFix( true );
      this.jumpFromCollision( jumpPosition );
      this.setDirectionFix( false );
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getColliderSize', function( collider )
  { // return the size of the collider for cliff jump.
//-----------------------------------------------------------------------------

    let size = 0;
    const direction = this.acceleration;
    if ( CollisionManager.isCircle( collider ) ) {
      size = collider.radius;

    } else {

      if ( direction.x && !direction.y ) {
        size = collider.width / 2;

      } else if ( !direction.x && direction.y ) {
        size = collider.height / 2;

      } else if ( direction.x && direction.y ) {
        const center = Vector2.subtract( collider.center, collider );
        size = Vector2.subtract( center, new Vector2( collider.width, collider.height ) ).magnitude;

      }

    }

    return size;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getJumpTryLimit', function( size )
  { // get the amount of tries a cliff jump can go for.
//-----------------------------------------------------------------------------

    let pixels = 0;
    let limit = 0;

    while( pixels < 120 ) {
      pixels += size;
      limit++;
    }

    return limit;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isJumpOverEdge', function( start, end )
  { // return if we're jumping to the same height over a corner.
//-----------------------------------------------------------------------------

    const ray0 = new Segment( start.x, start.y, 0, end.y - start.y );
    const ray1 = new Segment( start.x, start.y + ray0.vy, end.x - start.x, 0 );
    const rect = new Rect( start.x, start.y, ray1.vx, ray0.vy );

    const colliders = this.collidersInShape( rect )

    hit0 = CollisionManager.testCollisions( ray0, colliders )[0];
    if ( hit0 ) return false;

    hit1 = CollisionManager.testCollisions( ray1, colliders )[0];
    if ( hit1 ) return false;
    return true;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'adjustColliderFromRay', function( collider, ray )
  { // adjust the colliders position based on the ray.
//-----------------------------------------------------------------------------

    const colliders = this.collidersInShape( ray );
    const rayHit = this.rayCastForJump( ray, colliders );
    const overlap = rayHit ? rayHit.overlap : new Vector2( 0, 0 );
    const delta = Vector2.subtract( ray._end, overlap );
    const intersection = Vector2.add( ray._start, delta );

    if ( CollisionManager.isCircle( collider ) ) {
      collider.x = ( intersection.x );
      collider.y = ( intersection.y + -Math.sign( ray.vy ) * collider.radius );

    } else {
      collider.x = ( intersection.x - collider.width / 2 );
      collider.y = ( intersection.y - collider.height );

    }

    const hits = CollisionManager.testCollisions( collider, colliders );
    const hit = CollisionManager.getLongestHit( hits );

    if ( hit ) {
      collider.x -= hit.overlap.x;
      collider.y -= hit.overlap.y;
    }


  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isFallValid', function( collider, ray )
  { // adjust the collider to fall the set amount.
//-----------------------------------------------------------------------------

    let canLand = false;
    const normal = collider._jumpDir._end;
    const colliders = this.collidersInShape( ray );
    const orgCollider = $gamePlayer.getColliderAt( this.position );

    const width = $gameMap.width() * $gameMap.tileWidth();
    const height = $gameMap.height() * $gameMap.tileHeight();
    let hit = null;

    if ( ray.vy == 0 ) return canLand;

    const orgPos = new Vector2( collider.x, collider.y );
    if ( CollisionManager.isCircle( collider ) ) {
      collider.x = ray.x + ray.vx;
      collider.y = ray.y + ray.vy;
      collider.x = collider.x.clamp( 0, width );
      collider.y = collider.y.clamp( 0, height - collider.radius );

    } else {
      collider.x = ray.x + ray.vx - collider.width / 2;
      collider.y = ray.y + ray.vy - collider.height / 2;
      collider.x = collider.x.clamp( 0, width );
      collider.y = collider.y.clamp( 0, height - collider.height );
    }

    for ( let i = 0, l = colliders.length; i < l; i++ ) {

      let hits = CollisionManager.testCollisions( collider, colliders );
      hit = CollisionManager.getLongestHit( hits );

      if ( hit && Vector2.dot( normal, hit.normal ) < 0 ) {
        canLand = false;
        break;
      }

      if ( hit ) {
        collider.x -= hit.overlap.x;
        collider.y -= hit.overlap.y;
      }

      if ( hit && i == 0 ) continue;

      canLand = !hit || hit.overlap.magnitude < 1;

      // only proceed after the initial collision adjustment phase.
      if ( i == 0 ) continue;

      // crude detection of jumping a corner and not an actual cliff.
      if ( !hit && this.isJumpOverEdge( orgCollider.center, collider.center ) ) {

        this.adjustColliderFromRay( collider, ray, true );

        hits = CollisionManager.testCollisions( collider, colliders );
        hit = CollisionManager.getLongestHit( hits );

        canLand = !hit || hit.overlap.magnitude < 1;

      // if a collision still occured, check once more to be sure.
      } else if ( !canLand ) {

        hits = CollisionManager.testCollisions( collider, colliders );
        hit = CollisionManager.getLongestHit( hits );

        canLand = !hit || hit.overlap.magnitude < 1;

      }

    };

    if ( !canLand ) {
      collider.x = orgPos.x;
      collider.y = orgPos.y;
    }
    if ( canLand ) {
      if ( Math.abs( ray.y - collider.y ) < Math.abs( ray.x - collider.x ) ) {
        canLand = false;
      }

    }
    return canLand;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'canColliderLand', function( collider, colliders, fall )
  { // return if a collider can land at the position specified.
//-----------------------------------------------------------------------------

  let canLand = false;
  let hit = null;

  for ( let i = 0; i < 2; i++ ) {

    if ( !canLand ) {

      const hits = CollisionManager.testCollisions( collider, colliders );
      hit = CollisionManager.getLongestHit( hits );
      if ( hit ) {
        collider.x -= hit.overlap.x;
        collider.y -= hit.overlap.y;
      }

      if ( fall.vy ) {
        canLand = this.isFallValid( collider, fall );

      } else {
        canLand = !hit || hit.overlap.magnitude < 1;

      }

    }

  }

  return canLand && this.isJumpValid( collider );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'findCliffJumpPosition', function( collision )
  { // get the cliff jump position from the collision specified.
//-----------------------------------------------------------------------------

    let direction = Vector2.reversed( collision.normal );
    const ray = this.getRaysToward( 1, direction )[0];
    const collider = this.getColliderAt( this.position );
    const normal = collision.normal;
    const fall = new Segment( 0, 0, 0, 0 );
    let size = this.getColliderSize( collider );
    let limit = this.getJumpTryLimit( size );
    let jumpPosition = null;
    const max = limit;

    if( direction.x != 0 && direction.y >= 0 ) {
      fall.vy = $gameMap.tileHeight() * 1 + size;
    }
    collider._jumpDir = ray;

    do {

      if ( limit-- < 0 ) break;
      ray._end.magnitude = ( max - limit ) * size;

      let  colliders = this.collidersInShape( ray );
      colliders = colliders.concat( this.noJumpColldersInShape( ray ) );
      const rayHit = this.rayCastForJump( ray, colliders );
      const overlap = rayHit ? rayHit.overlap : new Vector2( 0, 0 );
      const delta = Vector2.subtract( ray._end, overlap );
      const intersection = Vector2.add( ray._start, delta );

      if ( delta.magnitude < Number.EPSILON ) continue;

      if ( CollisionManager.isCircle( collider ) ) {
        collider.x = ( intersection.x + -normal.x * size );
        collider.y = ( intersection.y + -normal.y * size );
      } else {
        collider.x = ( intersection.x - collider.width / 2 );
        collider.y = ( intersection.y - collider.height / 2 );
      }

      fall._start.set( ray.x + ray.vx, ray.y + ray.vy );

      if ( this.canColliderLand( collider, colliders, fall ) ) {
        if ( CollisionManager.isCircle( collider ) ) {
          const x = collider.x - this.colliders.circle._ox;
          const y = collider.y - this.colliders.circle._oy;
          jumpPosition = new Vector2( x, y );

        } else {
          let x = collider.x + collider.width / 2 - this.colliders.rectangle._ox;
          let y = collider.y + collider.height / 2 - this.colliders.rectangle._oy;
          jumpPosition = new Vector2( x, y );

        }
      }

    } while ( !jumpPosition );

    return jumpPosition;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isJumpValid', function( collider )
  { // return the collider.
//-----------------------------------------------------------------------------

    const charColliders = this.getCharacterColliders().filter( c => {
      if ( c._eventId ) return $gameMap.event( c._eventId ).isNormalPriority();
      return true;
    } );

    const hits = CollisionManager.testCollisions( collider, charColliders );
    const hit = CollisionManager.getLongestHit( hits );

    if ( hit && hit.overlap.magnitude > 5 ) {
      return false;
    }
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    const x = Math.round( ( collider.x / tw ) - 0.5 );
    const y = Math.round( ( collider.y / th ) - 0.5 );

    return true;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'jumpFromCollision', function( jumpDestination )
  { // force the character to jump from a collision.
//-----------------------------------------------------------------------------

    if ( !jumpDestination ) return;

    const tw = $gameMap.tileWidth();
    const width = $gameMap.width();
    const height = $gameMap.height();

    jumpDestination = Vector2.divide( jumpDestination, tw );

    jumpDestination.x = ( jumpDestination.x - 0.5 ).clamp( 0, width );
    jumpDestination.y = ( jumpDestination.y - 0.5 ).clamp( 0, height );

    const delta = Vector2.subtract( jumpDestination, this.position );

    AudioManager.playSe( $.params.jumpSe );
    this.setDirectionFix( true );
    this.jump( delta.x, delta.y );
    this.setDirectionFix( false );
    this._jumpThreshold = 0;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'collidersInShape', function( shape )
  { // return all colliders that may collide with the shape provided.
//-----------------------------------------------------------------------------

    let area = shape.aabb;

    return this.getMapCollidersInRect( area );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'noJumpColldersInShape', function( shape )
  { // return all no jump colliders in the shape specified.
//-----------------------------------------------------------------------------

    let colliders = [];
    const rect = shape.aabb;

    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();

    const x = Math.floor( rect.x / tw ) - 1;
    const y = Math.floor( rect.y / th ) - 1;
    const w = Math.ceil( ( rect.x + rect.width ) / tw ) + 1;
    const h = Math.ceil( ( rect.y + rect.height ) / th ) + 1;

    for ( var i = x; i <= w; i++ ) {
      for ( var j = y; j <= h; j++ ) {
        if ( i, j, $gameMap.regionId( i, j ) );
        const regionId = $gameMap.regionId( i, j );
        let restricted = $.params.noJumpRegions ?
          $.params.noJumpRegions : $.params.noJumpRegion || -1;
        if ( !Array.isArray( restricted ) ) restricted = [restricted];

        if ( restricted.includes( regionId ) ) {
          colliders.push( $gameMap.getFullRectTile( i, j ) );
        }

      }
    }

    return colliders;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'rayCastForJump', function( ray, colliders )
  { // cast ray against colliders and return all possible hits.
//-----------------------------------------------------------------------------

    let hits = [];

    for ( let i = 0, l = colliders.length; i < l; i++ ) {

      const hit = CollisionManager.rayCastShortest( ray, colliders[i] );
      if ( hit ) hits.push( hit );

    }

    return CollisionManager.getShortestHit( hits );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'rayCastForFall', function( ray, colliders )
  { // cast ray against colliders and return all possible hits.
//-----------------------------------------------------------------------------

    let hits = [];

    for ( let i = 0, l = colliders.length; i < l; i++ ) {

      const hit = CollisionManager.rayCastLongest( ray, colliders[i] );
      if ( hit ) hits.push( hit );

    }

    return CollisionManager.getLongestHit( hits );;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'characterFromCollision', function( hit, reverse )
{ // return the character from the collision if collided with character.
//-----------------------------------------------------------------------------

  if ( !hit ) return null;

  let collider = reverse ? hit.a : hit.b;

  if ( collider._vehicleType )
    return $gameMap.vehicle (collider._vehicleType );

  else if ( collider._eventId < 0 )
    return $gamePlayer;

  else if ( collider._eventId > 0 )
    return $gameMap.event( collider._eventId || 0 );

  else
    return null;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'checkEventTriggerPixelTouch', function( character )
{ // place holder for other classes.
//-----------------------------------------------------------------------------

  return false;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'updateDestinationMove', function()
  { // update movement based on destination.
//-----------------------------------------------------------------------------

    const position = Vector2.clone( this.position );
    const { start, end, acceleration, isDiag, last } = this._destination;

    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();

    const { x, y } = acceleration;

    let dpf = this.distancePerFrame();

    let vx = dpf * Math.abs( acceleration.x );
    let vy = dpf * Math.abs( acceleration.y );

    let rx = last.x;
    let ry = last.y;

    let rvx = vx;
    let rvy = vy;

    if ( $.params.snapToPixels ) {
      rvx = Math.max( Math.round( vx * tw ), 1 ) / tw;
      rvy = Math.max( Math.round( vy * th ), 1 ) / th;
    }

    if ( last.x > end.x ) {
      rx = Math.max( last.x - rvx, end.x );
      last.x = Math.max( last.x - vx, end.x );

    } else if ( last.x < end.x ) {
      rx = Math.min( last.x + rvx, end.x );
      last.x = Math.min( last.x + vx, end.x );

    }

    if ( last.y > end.y ) {
      ry = Math.max( last.y - rvy, end.y );
      last.y = Math.max( last.y - vy, end.y );

    } else if ( last.y < end.y ) {
      ry = Math.min( last.y + rvy, end.y );
      last.y = Math.min( last.y + vy, end.y );

    }

    if ( $.params.snapToPixels && !Vector2.equals( last, end ) ) {
      this._x = this._realX = rx;
      this._y = this._realY = ry;

    } else {
      this._x = this._realX = last.x;
      this._y = this._realY = last.y;

    }


    this.refreshBushDepth();

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'updateVelocityMove', function()
  { // update movemet based on velocity vector.
//-----------------------------------------------------------------------------

    if ( !$.params.snapToPixels ) {
      this._realX = this._x = ( this._x + this.velocity.x );
      this._realY = this._y = ( this._y + this.velocity.y );

    } else {
      const tw = $gameMap.tileWidth();
      const th = $gameMap.tileHeight();

      const { x, y } = this.velocity;

      const signX = Math.sign( x );
      const signY = Math.sign( y );

      const absX = Math.abs( x );
      const absY = Math.abs( y );

      const vx = Math.max( Math.round( absX * tw ), 1 ) / tw * signX;
      const vy = Math.max( Math.round( absY * th ), 1 ) / th * signY;

      this._realX = this._x = Math.round( ( this._x + vx ) * tw ) / tw;
      this._realY = this._y = Math.round( ( this._y + vy ) * th ) / th;

    }


    this.refreshBushDepth();

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getDirectionVectors', function( dir8 )
{ // return an object with vectors representing direction.
//-----------------------------------------------------------------------------

  if ( dir8 ) {
    const keyword = !$.params.preventNormalization ? 'normalized' : 'clone';
    return {
      1 : Vector2[keyword]( Vector2.add( Vector2.down(), Vector2.left() ) ),
      2 : Vector2.down(),
      3 : Vector2[keyword]( Vector2.add( Vector2.down(), Vector2.right() ) ),
      4 : Vector2.left(), 6 : Vector2.right(),
      7 : Vector2[keyword]( Vector2.add( Vector2.up(), Vector2.left() ) ),
      8 : Vector2.up(),
      9 : Vector2[keyword]( Vector2.add( Vector2.up(), Vector2.right() ) ),

    }

  } else {

    return {
      2 : Vector2.down(), 4 : Vector2.left(),
      6 : Vector2.right(), 8 : Vector2.up(),
    }

  }

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getForwardVector', function()
  { // return the vector facing forward from target.
//-----------------------------------------------------------------------------

    return this.getVectorFromDirection( this.direction() );

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getVectorFromDirection', function( d )
{ // return a vector pointing in the direction of d.
//-----------------------------------------------------------------------------

  const is8Dir = $.params.enable8Dir;
  return this.getDirectionVectors( is8Dir )[d] || Vector2.zero();

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'getDirectionFromVector', function( vec2 )
{ // return a vector pointing in the direction of d.
//-----------------------------------------------------------------------------

  let direction = 0;
  let angle1 = Math.round( vec2.angle );
  let deltaAngle = Infinity;
  let directions = this.getDirectionVectors( this.is8DirSprite() );

  for ( const d in directions ) {

    let angle2 = directions[d].angle;

    if ( angle2 - angle1 < -180 ) angle2 += 360;
    if ( angle2 - angle1 > 180 ) angle2 -= 360;

    if ( Math.abs( angle2 - angle1 ) < deltaAngle ) {
      deltaAngle = Math.abs( angle2 - angle1 );
      direction = d;
    }

  }
  return Number( direction );

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_CharacterBase, 'setAccelerationFromDirection', function( d )
{ // return the acceleration vector based on direction specified.
//-----------------------------------------------------------------------------

  const spd = this.accelerationSpeed();
  const vec2 = this.getVectorFromDirection( d );
  this.acceleration = Vector2.multiply( vec2, spd );

  if ( d % 2 == 1 ) {
    const horz = vec2.x < 0 ? 4 : vec2.x > 0 ? 6 : 0;
    const vert = vec2.y < 0 ? 8 : vec2.y > 0 ? 2 : 0;

    this.setDiagonalDirection( horz, vert )

  } else {
    this.setDirection( d );

  }
}, false );


//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'is8DirSprite', function()
  { // return if the character is using an 8 directional sprite sheet.
//-----------------------------------------------------------------------------

    if ( Imported['CHARACTER MOTIONS'] || Imported['ROSEDALE ABS'] ) {
      if ( this._motionData && this._motionData.dir8 ) return true;
    }
    return this._8dirSprite;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'setDiagonalDirection', function( horz, vert )
  { // set the diagonal direction based on the two directions provided.
//-----------------------------------------------------------------------------

    let set = false;

    if ( this.is8DirSprite() ) {

      const vec2 = this.acceleration;
      const angles = [ null, 225, 180, 135, 270, null, 90, 315, 360, 45];
      const angle = vec2.angle;
      let max = Infinity;
      let d = 0;

      angles.forEach( ( n, i ) => {
        if ( angle != null ) {
          if ( Math.abs( angle - n ) > 180 ) n += n < 180 ? 360 : -360;
          if ( Math.abs( angle - n ) <= max ) {
            max = Math.abs( angle - n );
            d = i;
          }
        }

      }, this );

      if ( d > 0 ) {
        this.setDirection( d );
        return;
      }

    }

    if ( this.direction() == this.reverseDir( horz ) ) {
      this.setDirection( horz );
    }

    if ( this.direction() == this.reverseDir( vert ) ) {
      this.setDirection( vert );
    }

    if ( !set ) this.setDirection( this.direction() );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'requestThrough', function( value )
  { // request through to be changed after move is finished.
//-----------------------------------------------------------------------------

    this._requestThrough = value;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isRequestingThrough', function()
  { // return if we're requesting through change.
//-----------------------------------------------------------------------------

    return this._requestThrough === true || this._requestThrough === false;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'clearThroughRequest', function()
  { // clear request for thrugh change.
//-----------------------------------------------------------------------------

    this._requestThrough = null;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'getTriggerCollider', function( triggerDistance )
  { // retrun a collider for triggering events.
//-----------------------------------------------------------------------------

    CollisionManager.expandShape( this.colliders.circle, triggerDistance );
    CollisionManager.expandShape( this.colliders.rectangle, triggerDistance );

    const collider = this.getColliderAt( this.position );

    CollisionManager.expandShape( this.colliders.circle, -triggerDistance );
    CollisionManager.expandShape( this.colliders.rectangle, -triggerDistance );

    return collider;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'canSeeForTrigger', function( collider, length )
  { // return if the character can be seein to get triggered...
//-----------------------------------------------------------------------------

    const vec2 = this.getVectorFromDirection( this.direction() );
    const rays = this.getRaysToward( 5, vec2 );
    const cm = CollisionManager;

    rays.forEach( ray => ray._end.magnitude = length );

    const l = rays.length;
    const centerIndex = Math.floor( l / 2 );

    for ( let i = 0; i <= centerIndex; i++ ) {
      let i0 = centerIndex - i;
      let i1 = centerIndex + i;

      if ( i0 >= 0 && cm.rayCastShortest( rays[i0], collider ) ) return true;
      if ( i1 < l && i !== 0 && cm.rayCastShortest( rays[i1], collider ) ) return true;

    }

    return false;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'canTriggerCharacter', function( character, innerCheck = false, triggers )
  { // return if the character can be triggered by the player.
//-----------------------------------------------------------------------------

    if ( $gameMap.isAnyEventStarting() ) return false;

    if ( character._type ) {
      return this.canTriggerVehicle( character, innerCheck, triggers );

    } else {
      return this.canTriggerEvent( character, innerCheck, triggers );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'canTriggerVehicle', function( character, innerCheck, triggers )
  { // return if the vehicle can be triggered.
//-----------------------------------------------------------------------------

    character.setColliderType( 'rect' );

    let c1 = this.getTriggerCollider( this._triggerDistance );
    let c2 = character.getColliderAt( character.position );

    character.setColliderType( 'circle' );

    const normal = this.isNormalPriority() && character.isNormalPriority();
    const through = this.isThrough() || character.isThrough();

    const passages = Imported.OcRam_Passages;
    const isAirship = character._type == 'airship';
    const sl = isAirship && passages ? this._higherLevel == character._higherLevel : true;

    if ( passages && !sl ) return false;
    if ( !CollisionManager.testCollision( c1, c2 ) ) return false;

    if ( ( !normal || through ) ) {
      return innerCheck ? CollisionManager.pointInShape( c1.center, c2 ) : true;
    }

    return this.canSeeForTrigger( c2, this._triggerDistance );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'canTriggerEvent', function( character, innerCheck, triggers )
  { // return if the event can be triggered.
//-----------------------------------------------------------------------------

    const event = character._eventId ? character : this;
    let isTouch = [1, 2].includes( event._trigger );

    let c1 = this.getTriggerCollider( isTouch ? 0 : this._triggerDistance );
    let c2 = character.getColliderAt( character.position );

    const normal = this.isNormalPriority() && character.isNormalPriority();
    const through = this.isThrough() || character.isThrough();
    const passages = Imported.OcRam_Passages;
    const sl = passages ? this._higherLevel == character._higherLevel : true;

    if ( passages && !sl ) return false;
    if ( event && event.isListEmpty() ) return false;
    if ( !CollisionManager.testCollision( c1, c2 ) ) return false;
    if ( ( !normal || through ) ) {
      return innerCheck ? CollisionManager.pointInShape( c1.center, c2 ) : true;
    }

    return isTouch ? true : this.canSeeForTrigger( c2, this._triggerDistance );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'canPass', function( x, y, d )
  { // Aliased canPass of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return true;

    } else {
      return $.alias( x, y, d );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isColliderRect', function()
  { // return if the character is using a hitbox or a circle.
//-----------------------------------------------------------------------------

    return this._colliderType == 'rectangle';

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'scrolledX', function()
  { // Aliased scrolledX of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    let x = $.alias();
    if ( $gameMap.isPixelMovement() ) {
      const tw = $gameMap.tileWidth();
      x = $gameMap.adjustX( Math.round( this._realX * tw ) / tw );
      x = Math.round( x * tw ) / tw;
    }
    return x;

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'scrolledY', function()
  { // Aliased scrolledX of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    let y = $.alias();
    if ( $gameMap.isPixelMovement() ) {
      const th = $gameMap.tileHeight();
      y = $gameMap.adjustY( Math.round( this._realY * th ) / th );
      y = Math.round( y * th ) / th;
    }
    return y;

  }, false );

// //-----------------------------------------------------------------------------
//   $.alias( Game_CharacterBase, 'scrolledX', function()
//   { // Aliased scrolledX of class Game_CharacterBase.
// //-----------------------------------------------------------------------------
//
//     if ( $gameMap.isPixelMovement() ) {
//       const tw = $gameMap.tileWidth();
//       const x = Math.round( this._realX * tw ) / tw;
//       return $gameMap.adjustX( x );
//
//     } else {
//       return $.alias();
//
//     }
//
//
//   }, false );
//
// //-----------------------------------------------------------------------------
//   $.alias( Game_CharacterBase, 'scrolledY', function()
//   { // Aliased scrolledX of class Game_CharacterBase.
// //-----------------------------------------------------------------------------
//
//     if ( $gameMap.isPixelMovement() ) {
//       const th = $gameMap.tileHeight();
//       const y = Math.round( this._realY * th ) / th;
//       return $gameMap.adjustY( y );
//
//     } else {
//       return $.alias();
//
//     }
//
//
//
//   }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'pos', function( x, y )
  { // Aliased pos of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.pixelPos( x, y );

    } else {
      return $.alias( x, y );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'pixelPos', function( x, y )
  { // retrun if pixels are close enouugh.
//-----------------------------------------------------------------------------

      const dx = Math.abs( this.x - x );
      const dy = Math.abs( this.y - y );

      return dx < Number.EPSILON && dy < Number.EPSILON;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'inputFindPathTo', function( x, y )
  { // find a path to the position specified.
//-----------------------------------------------------------------------------

    PathManager.findPath( this, new Vector2( x, y ) ).then( ( path ) => {

      path.pop();

      if ( path.length > 0 ) {
        this.setPath( path );
        $gameTemp._destinationX = x;
        $gameTemp._destinationY = y;
      } else {
        $gameTemp.clearDestination();
      }

    }, this )

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'findPathTo', function( x, y, original, chunkSize )
  { // find a path to the position specified.
//-----------------------------------------------------------------------------
    const moveRoute = this._moveRoute;

    if ( !this._path ) this._path = [];
    this._path.status = 'searching';
    let path = PathManager.findPath( this, new Vector2( x, y ), chunkSize ).then( ( path ) => {

      if ( original && moveRoute && !moveRoute.skippable ) {
        original.newPath = path;
        this._path = original;

      } else {
        this.setPath( path );

      }
    }, this );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'setPath', function( path )
  { // set the path.
//-----------------------------------------------------------------------------

    this._path = path;

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'setDirection', function( d )
  { // Aliased direction of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    const lastDir = this._direction;

    if ( Imported.VisuMZ_1_EventsMoveCore ) {
      VisuMZ.EventsMoveCore.Game_CharacterBase_setDirection.call( this, d );

    } else {
      $.alias( d );

    }

    const direction = this._direction;

    if ( ( direction % 2 == 1 ) && !this.is8DirSprite() ) {
      if ( direction === 1 && [6, 8].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else if ( direction === 3 && [4, 8].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else if ( direction === 7 && [6, 2].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else if ( direction === 9 && [4, 2].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else {
        this._direction = lastDir;
      }
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'pixelUpdateAnimationCount', function()
  { // update the animation count for pixel movement.
//-----------------------------------------------------------------------------

    if ( this._collisionXCharacter && this._moveRoute ) {
      if ( !this._moveRoute.skippable ) return false;
    }

    if (this.isMoving() && this.hasWalkAnime()) {
        this._animationCount += 1.5;

    } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
        this._animationCount++;
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'updateAnimationCount', function()
  { // Aliased updateAnimationCount of class Game_Characterbase.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelUpdateAnimationCount();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'stopMove', function()
  { // stop a characters movemnt of any kind.
//-----------------------------------------------------------------------------

    this.clearDestination();
    this.velocity.set( 0, 0 );
    this.acceleration.set( 0, 0 );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'isOnTile', function( x, y, d )
  { // return if the character is on the tile x, and y, with direction d.
//-----------------------------------------------------------------------------

    const collider = this.getCollider();
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    const cx = Math.floor( collider.x / tw );
    const cy = Math.floor( collider.y / th );
    const dir = this.direction();
    const rect = $gameMap.getFullRectTile( x, y );

    if ( CollisionManager.testCollision( rect, collider ) ) {
      if ( [1, 2, 3, 4, 6, 7, 8, 9].includes( d ) ) {
        return dir == d;

      } else {
        return true;

      }

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'moveAtAngle', function( angle, distance = 1 )
  { // move at the angle specified( a number from 0~360 ).
//-----------------------------------------------------------------------------

    const travelDistance = this._travelDistance;
    const offset = new Vector2( 0, distance );
    offset.angle = angle % 360

    const { x, y } = Vector2.add( this.position, offset );

    this.setDestination( x, y );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'globalRegionRestrictions', function()
  { // return the global settings for region restrictions.
//-----------------------------------------------------------------------------

    return $.params.characterRestrictedRegions || [];

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'mapRegionRestrictions', function()
  { // return the map specific settings for region restrictions.
//-----------------------------------------------------------------------------

    return $gameMap.characterRestrictedRegions();

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'characterRegionRestrictions', function()
  { // return the character specific settings for region restrictions.
//-----------------------------------------------------------------------------

    return [];

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_CharacterBase, 'restrictedRegions', function()
  { // Return all of the characters restricted regions.
//-----------------------------------------------------------------------------

    const character = this.characterRegionRestrictions();
    const globals = this.globalRegionRestrictions();
    const map = this.mapRegionRestrictions();

    if ( character.length > 0 ) return character;
    if ( map.length > 0 ) return map;
    return globals;

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_CharacterBase, 'copyPosition', function( character )
  { // Aliased copyPosition of class Game_CharacterBase.
//-----------------------------------------------------------------------------

    const lastDir = this._direction;
    $.alias( character );

    const direction = this._direction;
    if ( ( direction % 2 == 1 ) && !this.is8DirSprite() ) {
      if ( direction === 1 && [6, 8].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else if ( direction === 3 && [4, 8].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else if ( direction === 7 && [6, 2].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else if ( direction === 9 && [4, 2].includes( lastDir ) ) {
        this._direction = this.reverseDir( lastDir );
      } else {
        this._direction = lastDir;
      }
    }

  }, false );

//=============================================================================
// Game_Event :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'setupPage', function()
  { // Aliased setupPage of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias();
    if ( $gamePlayer.lastTriggeredEvent() == this._eventId ) {
      $gamePlayer.clearLastTriggered()
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'globalRegionRestrictions', function()
  { // Aliased globalRegionRestrictions of class Game_Event.
//-----------------------------------------------------------------------------

    return ( $.alias() ).concat( $.params.eventRestrictedRegions || [] )


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'mapRegionRestrictions', function()
  { // Aliased mapRegionRestrictions of class Game_Event.
//-----------------------------------------------------------------------------

    return ( $.alias() ).concat( $gameMap.eventRestrictedRegions() )


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'characterRegionRestrictions', function()
  { // Aliased characterRegionRestrictions of class Game_Event.
//-----------------------------------------------------------------------------

    return ( $.alias() ).concat( this._restrictedRegions );


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'setupPageSettings', function()
  { // Aliased setupPageSettings of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias();
    if ( $gameMap.isPixelMovement() ) {
      this.setupPageCollider();
      this.setupTransferEvent();
      this.setupRestrictedRegions();
    }

    this.setup8Dir();

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'setupRestrictedRegions', function()
  { // setup page specific region restrictions.
//-----------------------------------------------------------------------------


    const page = this.page();
    const list = page ? this.list() : [];

    this._restrictedRegions = [];

    for ( let i = 0, l = list.length; i < l; i++ ) {

      const { code, parameters } = list[i];
      const regxp = /\<\s*restrictedregions\s*:\s*(.*?)\s*\>/;
      if ( code != 108 && code != 408 ) continue;
      if ( !parameters[0].match( regxp ) ) continue;
      this._restrictedRegions = RegExp.$1.split( ',' ).map( Number );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'setupPageCollider', function()
  { // setup the collider based on the current page.
//-----------------------------------------------------------------------------

    const page = this.page();
    const list = page ? this.list() : [];

    for ( let i = 0, l = list.length; i < l; i++ ) {

      const { code, parameters } = list[i];
      const regxp = /\<\s*hitbox\s*:\s*(.*?)\s*\>/;
      if ( code != 108 && code != 408 ) continue;
      if ( !parameters[0].match( regxp ) ) continue;
      let [x, y, width, height] = RegExp.$1.split( ',' ).map( Number );

      this.colliders = {
        rectangle: new Rect( 0, 0, width, height || width ),
        circle: new Circle( 0, 0, width / 2 )
      }

      this.colliders.circle._ox = x;
      this.colliders.circle._oy = y;
      this.colliders.rectangle._ox = x;
      this.colliders.rectangle._oy = y;

      break;

    }

    this.yepHitboxPixelResizeCollider();

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'yepHitboxPixelResizeCollider', function()
  { // resize the event collider from the yep hitbox resize plugin.
//-----------------------------------------------------------------------------

    if ( Imported.YEP_EventHitboxResize && this.colliders && this.colliders.rectangle ) {

      if ( this._addedHitboxUp || this._addedHitboxLeft || this._addedHitboxRight || this._addedHitboxDown ) {

        let rect = this.colliders.rectangle;
        let tw = $gameMap.tileWidth();
        let th = $gameMap.tileHeight();


        let x = -this._addedHitboxLeft * $gameMap.tileWidth();
        let y = -this._addedHitboxUp * $gameMap.tileHeight();
        let width = ( this._addedHitboxRight + 1 ) * $gameMap.tileWidth() - x;
        let height = ( this._addedHitboxDown + 1 ) * $gameMap.tileHeight() - y;

        let ox = ( width - tw ) / 2;
        let oy = ( height - th ) / 2;

        this.colliders.rectangle._ox = x + ox;
        this.colliders.rectangle._oy = y + oy;
        this.colliders.rectangle.width = width;
        this.colliders.rectangle.height = height;
      }

    }

  }, false );

if ( Imported.YEP_EventHitboxResize ) {

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'setupEventHitboxResizeNotetags', function()
  { // Aliased setupEventHitboxResizeNotetags of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias();
    this.yepHitboxPixelResizeCollider();

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'setupEventHitboxResizeCommentTags', function()
  { // Aliased setupEventHitboxResizeCommentTags of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias();
    this.yepHitboxPixelResizeCollider();

  }, false );

}
//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'setupTransferEvent', function()
  { // setup whether a sprite is a transfer event.
//-----------------------------------------------------------------------------

    const list = this.page() ? this.list() : [];

    this.clear8Dir();

    for ( let i = 0, l = list.length; i < l; i++ ) {

      const { code, parameters } = list[i];
      const regxp = /\<\s*transfer\s*\>/;

      if ( code != 108 && code != 408 ) continue;
      if ( !parameters[0].match( regxp ) ) continue;

      this._isTransfer = true;

      break;

    }


  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'setup8Dir', function()
  { // setup whether a sprite uses 8 direct.
//-----------------------------------------------------------------------------

    const list = this.page() ? this.list() : [];

    this.clear8Dir();

    for ( let i = 0, l = list.length; i < l; i++ ) {

      const { code, parameters } = list[i];
      const regxp = /\<\s*8dir\s*\>/;

      if ( code != 108 && code != 408 ) continue;
      if ( !parameters[0].match( regxp ) ) continue;

      this._8dirSprite = true;

      break;

    }


  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'clearPageSettings', function()
  { // Aliased clearPageSettings of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias();

    if ( $gameMap.isPixelMovement() ) {
      this.resetCollider();
      this.clearRestrictedRegions();
      this.clearTransferEvent();
      this.clear8Dir();
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'clearRestrictedRegions', function()
  { // clear all region restrictions.
//-----------------------------------------------------------------------------

    this._restrictedRegions = [];

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'resetCollider', function()
  { // reset the hitbox to default values.
//-----------------------------------------------------------------------------

    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();

    this.colliders = {
      rectangle: new Rect( 0, 0, tw, th ),
      circle: new Circle( 0, 0, tw / 2 )
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'clearTransferEvent', function()
  { // clear 8 directional flag.
//-----------------------------------------------------------------------------

    this._isTransfer = false;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'clear8Dir', function()
  { // clear 8 directional flag.
//-----------------------------------------------------------------------------

    this._8dirSprite = false;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'isTransferEvent', function()
  { // return if this is a transfer event.
//-----------------------------------------------------------------------------

    return this._isTransfer;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Event, 'checkEventTriggerPixelTouch', function( character )
{ // check if the event is collided with the player and needs to start.
//-----------------------------------------------------------------------------

  const isValid = character && character == $gamePlayer;
  const eventRunning = $gameMap.isEventRunning();
  const isNormal = this.isNormalPriority();
  const eventTouch = this._trigger == 2;
  const jumping = this.isJumping();


  if ( !eventRunning && isValid && isNormal && eventTouch && !jumping ) {

    if ( this.canTriggerCharacter( character, this.isTransferEvent(), [2] ) ) {
      if ( this._eventId != $gamePlayer._lastTriggered )  $gamePlayer.stopMove();

      this.start();
    }
  }

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'start', function()
  { // Aliased start of class Game_Event.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelStart();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'pixelStart', function()
  { // start event for pixel movement.
//-----------------------------------------------------------------------------

    if ( $gamePlayer.lastTriggeredEvent() == this ) {
      if ( this.isTriggerIn( [1, 2] ) ) return;
    }

    const list = this.list();

    if ( list && list.length > 1 ) {
        this._starting = true;
        if ( this.isTriggerIn( [0, 1, 2] ) ) this.lock();
        $gamePlayer.setLastTriggered( this._eventId );
        this.clearDestination();
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'locate', function( x, y )
  { // Aliased locate of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias( x, y );
    if ( $gameMap.isPixelMovement() ) {
      this.clearDestination();
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'chaseTarget', function( target )
  { // force the event to chase the target provided.
//-----------------------------------------------------------------------------

    this._targetObject = target;
    this._targetPos = new Vector2( -1, -1 );
    this._targetSightRefresh = 0;

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'update', function()
  { // Aliased updateStop of class Game_Event.
//-----------------------------------------------------------------------------

    $.alias();

    if ( !!this._targetObject && !$gameMap.isEventRunning() ) {
      this.updateChaseTarget();
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'updateChaseTarget', function()
  { // update the event chasing the target.
//-----------------------------------------------------------------------------

    if ( this._path && this._path.status == 'searching' ) return;

    if ( this._targetSightRefresh++ >= 20 ) {

      const target = this._targetObject;
      const pos = Vector2.round( target.position );
      const moved = !Vector2.equals( pos, this._targetPos );
      const canMoveTo = this.canMoveToTarget( target, 3 );

      this._targetSightRefresh = 0;

      if ( moved ) this._targetPos = pos;

      if ( ( moved || this._path || !this._destination ) && canMoveTo ) {
        if ( this._path ) this._path = null;
        this.setDestination( target.x, target.y );

      } else if ( ( moved || !this._path ) && !canMoveTo ) {
        this.findPathToTarget( target );

      }

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'findPathToTarget', function( target, chunkSize )
  { // find the OPTIMAL path to the target.
//-----------------------------------------------------------------------------

    this.findPathTo( Math.round( target.x ), Math.round( target.y ), undefined, chunkSize );

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'canMoveToTarget', function( target, rayCount, origin )
  { // return if the event can see the target specified.
//-----------------------------------------------------------------------------

    const colliderA = target.getCollider();
    const colliderB = this.getColliderAt( origin || this.position);

    const rectA = colliderA.aabb;
    const rectB = colliderB.aabb;

    const delta = Vector2.subtract( colliderA.center, colliderB.center );
    const direction = Vector2.normalized( delta );
    const length = delta.magnitude;
    const count = rayCount || 3;

    if ( length >= 120 ) return false;

    const x = Math.min( rectA.x, rectB.x );
    const y = Math.min( rectA.y, rectB.y );
    const width = Math.max( rectA.x + rectA.width, rectB.x + rectB.width );
    const height = Math.max( rectA.y + rectA.height, rectB.y + rectB.height );

    const rays = this.getRaysToward( count, direction, length, origin );
    const rect = new Rectangle( x, y, width, height );

    let colliders = this.getMapCollidersInRect( rect );
    colliders = colliders.concat( this.getCharacterColliders() );
    colliders = colliders.concat( target.getCollider() );
    let results = [];

    for ( let i = 0, l0 = rays.length; i < l0; i++ ) {
      let hits = [];

      for ( let j = 0, l1 = colliders.length; j < l1; j++ ) {
        let hit = CollisionManager.rayCastLongest( rays[i], colliders[j] );
        if ( hit ) hits.push( hit );
      };

      if ( hits.length ) results.push( CollisionManager.getLongestHit( hits ) );

    };

    results = results.sort( ( a, b ) => {
      const diff = b.overlap.magnitude - a.overlap.magnitude;
      if ( diff == 0 )
        return Number( b._edge || false ) - Number( a._edge || false );
      else
        return diff;
    } );

    let best = results[0] || null
    if ( !best ) return true;

    let character = null;
    let canSeeTarget = false;
    let isBlocked = false;

    for ( let i = 0, l = results.length; i < l; i++ ) {

      character = this.characterFromCollision( results[i] );

      if ( character == target ) {
        canSeeTarget = true;
        break;
      }

      const ray = results[i].a._end;
      const normal = results[i].normal;
      const reversed = Vector2.normalized( Vector2.reversed( ray ) );

      const angleRay = reversed.angle;
      const angleNormal = normal.angle;
      const newAngle = angleNormal + ( angleNormal - angleRay );

      bounce = new Vector2( 0, 1 );
      bounce.angle = newAngle;

      let dp = Vector2.dot( reversed, bounce );
      if ( dp >= 0 ) isBlocked = true;

    };

    return canSeeTarget && !isBlocked;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'isListEmpty', function()
  { // return if the event list is empty.
//-----------------------------------------------------------------------------

    const list = this.page() ? this.list() : [];

    return list.filter( e => e.code && e.code != 108 && e.code != 408 ).length == 0

  }, false );

//=============================================================================
// Game_Player :
//=============================================================================

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'initMembers', function()
{ // Aliased initMembers of class Game_Player.
//-----------------------------------------------------------------------------

  $.alias();

  this._colliderType = 'circle';
  this._triggerDistance = 12;
  this._lastTriggered = 0;

  this.colliders.circle._ox = $.params.playerCollider.x;
  this.colliders.circle._oy = $.params.playerCollider.y;
  this.colliders.circle.radius = $.params.playerCollider.radius;

  this.colliders.rectangle._ox = $.params.playerCollider.x;
  this.colliders.rectangle._oy = $.params.playerCollider.y;
  this.colliders.rectangle.width = $.params.playerCollider.radius * 2;
  this.colliders.rectangle.height = $.params.playerCollider.radius * 2;

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'globalRegionRestrictions', function()
  { // Aliased globalRegionRestrictions of class Game_Player.
//-----------------------------------------------------------------------------

    return ( $.alias() ).concat( $.params.playerRestrictedRegions );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'mapRegionRestrictions', function()
  { // Aliased mapRegionRestrictions of class Game_Player.
//-----------------------------------------------------------------------------

    return ( $.alias() ).concat( $gameMap.playerRestrictedRegions() );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'is8DirSprite', function()
  { // return if the player is an 8 directional sprite sheet.
//-----------------------------------------------------------------------------

    const leader = $gameParty.leader();

    if ( leader && leader.actor().meta['8dir'] ) {
      return true
    }

    return $.alias();

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'setLastTriggered', function( eventId )
{ // set the last triggered event id.
//-----------------------------------------------------------------------------

  this._lastTriggered = eventId;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'clearLastTriggered', function()
  { // clear the last triggered event id.
//-----------------------------------------------------------------------------

    this._lastTriggered = 0;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'lastTriggeredEvent', function()
  { // return the last triggered event.
//-----------------------------------------------------------------------------

    return $gameMap.event( this._lastTriggered );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'getCharacterColliders', function()
  { // Aliased getCharacterColliders of class Game_Player.
//-----------------------------------------------------------------------------

    // $.alias();
    const characters = this.allCharacters().filter( char => {
      if ( !char || char === this ) return false;
      if ( char == this.vehicle() ) return false;
      if ( char._memberIndex > 0 ) return false;
      if ( char === $gamePlayer ) return false;
      if ( char.isThrough() ) return false;
      if ( Imported.OcRam_Passages ) {
        if ( char._higherLevel != this._higherLevel ) return false;
      }
      return true;
    } );

    return characters.map( char => { return char.getCollider(); } );

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'getCollider', function()
{ // Aliased getCollider of class Game_Player.
//-----------------------------------------------------------------------------

  if ( this.isInVehicle() ) {
    this.vehicle().syncWithPlayer();
    return this.vehicle().getCollider();
  }
  return $.alias();

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'increaseSteps', function( amount )
  { // Aliased increaseSteps of class Game_Player.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelIncreaseSteps( amount );
    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'pixelIncreaseSteps', function( amount )
  { // Aliased pixelIncreaseSteps of class Game_Player.
//-----------------------------------------------------------------------------

    Game_Character.prototype.increaseSteps.call( this );
    if ( this.isNormal() ) $gameParty.increaseSteps( amount );
    this.updateEncounterCount( amount );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'executeEncounter', function()
  { // Aliased executeEncounter of class Game_Player.
//-----------------------------------------------------------------------------

    const results = $.alias();
    if ( $gameMap.isPixelMovement() ) this.pixelExecuteEncounter( results );

    return results;

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'pixelExecuteEncounter', function( results )
  { // extra functionality for execute encounter.
//-----------------------------------------------------------------------------

    if ( results ) {

        this.setAccelerationFromDirection( 0 );
        this.clearDestination();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'updateEncounterCount', function( amount = 0 )
  { // Aliased updateEncounterCount of class Game_Player.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.updatePixelEncounterCount( amount );

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'updatePixelEncounterCount', function( amount )
  { // update encounter count for pixle movement.
//-----------------------------------------------------------------------------

    if ( this.canEncounter() ) {
      this._encounterCount -= this.encounterProgressValue() * amount;
    }

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'update', function( sceneActive )
{ // Aliased update of class Game_Player.
//-----------------------------------------------------------------------------

  $.alias( sceneActive );

  if ( $gameMap.isPixelMovement() ) {
    this.pixelUpdate( sceneActive );
  }

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'pixelUpdate', function( sceneActive )
  { // update pixel movement related stuff.
//-----------------------------------------------------------------------------

    this.updateLastTriggered();

    if ( !$gameMap.isEventRunning() && this.isMoving() ) {
      if ( sceneActive ) this.triggerAction();
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'updateDashing', function()
  { // Aliased updateDashing of class Game_Player.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.updatePixelDashing();

    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'updatePixelDashing', function()
  { // update dash for pixel movement.
//-----------------------------------------------------------------------------

    if (this.canMove() && !this.isInVehicle() && !$gameMap.isDashDisabled()) {

      const destValid = $gameTemp.isDestinationValid();
      const dashPressed = this.isDashButtonPressed();

      this._dashing = dashPressed || destValid;

    } else {

      this._dashing = false;

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'updateVehicleGetOff', function()
  { // Aliased updateVehicleGetOff of class Game_Player.
//-----------------------------------------------------------------------------

    if ( !this._destination ) {
      $.alias();
      this.clearMoveHistory();
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'resolveCollision', function( hit )
  { // Aliased resolveCollision of class Game_Player.
//-----------------------------------------------------------------------------

    let eventId = this._clickedEvent;
    $.alias( hit );
    if ( eventId > 0 ) {

      const character = this.characterFromCollision( hit );

      if ( character && character._eventId == eventId ) {
        this.turnTowardCharacter( character );
        this.startPixelClickedEvent( character, true );

      }
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'startPixelClickedEvent', function( event, normal )
  { // start the event that is provided if possible.
//-----------------------------------------------------------------------------

    if ( !$gameMap.isEventRunning() ) {

      let triggers = [0,1, 2]

      if ( Imported.OcRam_Passages ) {
        let alwaysTrigger = false;
        let s = '<trigger_always>';
        if ( Imported.OcRam_Core && event.getStringComments ) {
          alwaysTrigger = event.getStringComments().includes( n => n == s );
        }
        if ( !alwaysTrigger && event._higherLevel != this._higherLevel ) return;

      }

      const priority = event.isNormalPriority();

      if ( event.isTriggerIn( triggers ) && priority == normal ) {
        if ( event._eventId != $gamePlayer._lastTriggered ) {
          if ( this._destination ) this.stopMove();
        }

        event.start();
      }

    }

    this._clickedEvent = 0;

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'clearDestination', function()
  { // Aliased clearDestination of class Game_Player.
//-----------------------------------------------------------------------------

    $.alias();
    // this._clickedEvent = 0;
    if ( !this._path ) $gameTemp.clearDestination();

    if ( this._clickedEvent ) {
      let a = this.getCollider();
      let character = $gameMap.event( this._clickedEvent );
      let b = character.getCollider();
      if ( CollisionManager.testCollision( a, b ) ) {
        this.startPixelClickedEvent( character, false );
      }

    }

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'repositionColliders', function( position )
{ // Aliased repositionColliders of class Game_Player.
//-----------------------------------------------------------------------------

  $.alias( position );
  this.colliders.rectangle._eventId = -1;
  this.colliders.circle._eventId = -1;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'updateLastTriggered', function()
{ // update the last triggered event.
//-----------------------------------------------------------------------------

  const event = this.lastTriggeredEvent();

  if ( event ) {

    this.colliders.circle.radius += 1;
    const c1 = this.getColliderAt( this.position );
    const c2 = event.getColliderAt( event.position )
    this.colliders.circle.radius -= 1;

    if ( event.isNormalPriority() == false && event.isTransferEvent() ) {
      const hit = CollisionManager.pointInShape( c1, c2 );
      if ( !hit ) this.clearLastTriggered();

    } else if ( !CollisionManager.testCollision( c1, c2 ) ) {
      return this.clearLastTriggered();

    }

  }

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'getInputDirection', function()
{ // Aliased getInputDirection of class Game_Player.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    return this.getPixelInputDirection();

  } else {
    return $.alias();

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'getPixelInputDirection', function()
{ // return input direction for pixel movement.
//-----------------------------------------------------------------------------

  if ( $.params.enable8Dir ) return Input._dir8;
  return Input._dir4;

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'moveByInput', function()
{ // Aliased moveByInput of class Game_Player.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.pixelMoveByInput();

  } else {
    $.alias();

  }

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'clearWaypointDestination', function()
  { // clear waypoint destination.
//-----------------------------------------------------------------------------

    this._path = null;
    this.clearDestination();
    $gameTemp.clearDestination();
    // if ( $gameTemp.isDestinationValid() && !this.isMoving() ) {
    //   const x = $gameTemp.destinationX();
    //   const y = $gameTemp.destinationY();
    //
    //   if ( this._path && !Vector2.equals( new Vector2( x, y ), this._path[0] ) ) {
    //     this._path = null;
    //     this.clearDestination();
    //   }
    //   if ( this.getInputDirection() > 0 ) {
    //     this._path = null;
    //     this.clearDestination();
    //
    //   }
    //
    // }

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'pixelMoveByInput', function()
{ // allow pixel movement based on player input.
//-----------------------------------------------------------------------------

    this.setAccelerationFromDirection( 0 );

    if ( $gameTemp.isDestinationValid() ) this.pixelMoveByTouchInput();

    if ( !this.isMoving() && this.canMove() && !this.isJumping() ) {

      let direction = this.getInputDirection();

      if ( [5, 0].includes( direction ) ) this._jumpThreshold = 0;

      if ( direction > 0 && this.hasDestination() ) {
        this.clearDestination();
      }

      // this ensures smoother diagonals!!
      if ( this._lastMoved != direction && direction % 2 == 1 ) {

        const tw = $gameMap.tileWidth();
        const th = $gameMap.tileHeight();

        this._realx = this._x = Math.round( this.x * tw ) / tw;
        this._realy = this._y = Math.round( this.y * th ) / th;
        this._lastMoved = direction;

      };
      this.setAccelerationFromDirection( direction );

    }

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'pixelMoveByTouchInput', function()
  { // move the player via touch input.
//-----------------------------------------------------------------------------


      if ( $gameTemp.isDestinationValid() ) {

        const x = $gameTemp.destinationX();
        const y = $gameTemp.destinationY();
        const vec2a = new Vector2( x, y );
        const destination = this._destination;
        const vec2b = destination ? destination.end : null;
        const dirFix = destination ? destination.directionFix : undefined;

        if ( vec2b && !Vector2.equals( vec2a, vec2b ) ) {

          this._destination = null;
          this._clickedEvent = 0;
          if ( dirFix !== undefined ) this.setDirectionFix( dirFix );

        }

        if ( !this._destination ) {
          this.setDestination( new Vector2( x, y ) );
          this.setClickedEvent( x, y );
        }

      }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'setClickedEvent', function( x, y )
  { // find any event at the x and y coordinate that ,may have been clicked.
//-----------------------------------------------------------------------------

    if ( Imported['MIMOSA MOUSE CURSOR'] && $gameTemp._mmcClickedEvent ) {
      this._clickedEvent = $gameTemp._mmcClickedEvent;
      $gameTemp._mmcClickedEvent = 0;
      return;
    }

    let ox = $gameMap._displayX * $gameMap.tileWidth()
    let oy = $gameMap._displayY * $gameMap.tileHeight()
    let point = new Vector2( TouchInput.x + ox, TouchInput.y + oy );
    let triggers = [0, 1, 2]

    let target = $gameMap.events().find( ( event ) => {
      let shape = event.getCollider();
      let canTrigger = event.isTriggerIn( triggers );
      return CollisionManager.pointInShape( point, shape ) && canTrigger;
    });

    this._clickedEvent = target ? target._eventId : 0;

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'checkEventTriggerPixelTouch', function( character )
{ // check for event/player trigger on collision.
//-----------------------------------------------------------------------------

  if ( this.canStartLocalEvents() && character && character != this ) {

    const priority = character.isNormalPriority();

    if ( character._eventId > 0 && character.isTriggerIn( [1, 2] ) ) {
      if ( this.canTriggerCharacter( character, character.isTransferEvent(), [1, 2] ) ) {

        if ( character._eventId != $gamePlayer._lastTriggered ) {
          let velocity = Vector2.clone( this.velocity );
          this.stopMove();
          this.velocity = velocity;
        }

        character.start();

      }
    }

  }

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'updatePixelMove', function()
{ // Aliased updatePixelMove of class Game_Player.
//-----------------------------------------------------------------------------

  const last = this.position;

  $.alias();

  if ( Vector2.equals( this.position, last ) ) {
    this.setAccelerationFromDirection( 0 );

  } else if ( !Vector2.equals( last, this.position ) ) {
      last._moveSpeed = this.realMoveSpeed();
      last._dashing = this.isDashing();
      this._moveHistory.push( last );

  }

  if ( this._isMoved ) {
    if ( Imported.Galv_ActionIndicators ) Galv.AI.needRefresh = true;
  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'debugDraw', function()
{ // draw debug shapes.
//-----------------------------------------------------------------------------

  const colliders = this.getValidColliders();
  const collider = this.getColliderAt( this.position );

  $gameTemp.clearDebugLayer();
  $gameTemp.debugDrawShape( collider, 0xFF00FF );

  colliders.forEach( c => {
    if ( c ) {
      const color = c._eventId ? 0xFF00FF : c._vehicleType ? 0xFFFF00 : 0xFF0000;
      $gameTemp.debugDrawShape( c, color );
      $gameTemp.debugDrawShape( c, color );
      $gameTemp.debugDrawShape( c, color );
    }
  } );

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'checkEventTriggerThere', function( triggers )
  { // Aliased checkEventTriggerThere of class Game_Player.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.pixelCheckEventTriggerThere( triggers );

    } else {
      return $.alias( triggers );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'pixelCheckEventTriggerThere', function( triggers )
  { // check event triggers in front of player for pixel movement.
//-----------------------------------------------------------------------------

    if ( this.canStartLocalEvents() ) {

        const direction = this.direction();
        const collider = this.getCollider();
        const x1 = collider.center.x / $gameMap.tileWidth();
        const y1 = collider.center.y / $gameMap.tileHeight();
        const x2 = $gameMap.roundXWithDirection( x1, direction );
        const y2 = $gameMap.roundYWithDirection( y1, direction );
        this.startMapEvent( x2, y2, triggers, true );

        if ( !$gameMap.isAnyEventStarting() && $gameMap.isCounter( x2, y2 ) ) {

            const x3 = $gameMap.roundXWithDirection( x2, direction );
            const y3 = $gameMap.roundYWithDirection( y2, direction );
            const vec2 = this.getVectorFromDirection( direction );
            const rays = this.getRaysToward( 3, vec2 );
            this._triggerDistance += $gameMap.tileWidth() + 1;
            rays.forEach( ray => ray._end.magnitude = this._triggerDistance );
            this.startPixelMapEvent( x3, y3, triggers, true, rays );
            this._triggerDistance -= $gameMap.tileWidth() - 1;
        }

    }

  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'startMapEvent', function( x, y, triggers, normal, rays )
{ // Aliased startMapEvent of class Game_Player.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.startPixelMapEvent( x, y, triggers, normal, rays );

  } else {
    $.alias( x, y, triggers, normal );

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'startPixelMapEvent', function( x, y, triggers, normal, rays )
{ // start map event in pixel movement map.
//-----------------------------------------------------------------------------

  if ( !$gameMap.isEventRunning() ) {

    for (const event of this.inRangeEvents( triggers ) ) {

      if ( Imported.OcRam_Passages ) {
        let alwaysTrigger = false;
        let s = '<trigger_always>';
        if ( Imported.OcRam_Core && event.getStringComments ) {
          alwaysTrigger = event.getStringComments().includes( n => n == s );
        }
        if ( !alwaysTrigger && event._higherLevel != this._higherLevel ) continue;

      }

      const priority = event.isNormalPriority();

      if ( event.isTriggerIn( triggers ) && priority == normal ) {
        if ( event._eventId != $gamePlayer._lastTriggered ) this.stopMove();
        let collider = event.getCollider();

        if ( rays && rays.every( ray => !CollisionManager.testCollision( ray, collider ) ) ) {
          return;
        }

        event.start();
        break;
      }

    }
  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'inRangeEvents', function( triggers )
{ // return all events that are within range of the player.
  //-----------------------------------------------------------------------------

  return $gameMap.events().filter( event => {

    return this.canTriggerCharacter( event, event.isTransferEvent(), triggers );

  }, this );

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'getValidColliders', function()
{ // get all valid colliders.
//-----------------------------------------------------------------------------

  let colliders = this.getCharacterColliders().concat(
    this.getMapColliders( this.isInVehicle() )
  );

  if ( Imported.OcRam_Passages ) {
    colliders = colliders.concat( this.ocRamPassageColliders() );
  }

  return colliders;

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'getMapColliders', function( inVehicle )
{ // Aliased getMapColliders of class Game_Player.
//-----------------------------------------------------------------------------

  if ( inVehicle ) {
    return this.getVehicleMapColliders();

  } else {
    return $.alias();
  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'getVehicleMapColliders', function()
{ // return vehicle colliders for the player.
//-----------------------------------------------------------------------------

  return this.vehicle().getMapColliders();


}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'canTriggerCharacter', function( character, innerCheck, triggers )
{ // Aliased canTriggerCharacter of class Game_Player.
//-----------------------------------------------------------------------------

  if ( character == $gameMap.airship() ) {
    if ( character._mapId != $gameMap.mapId() ) return false;

  } else if ( character == $gameMap.ship() ) {
    if ( character._mapId != $gameMap.mapId() ) return false;

  } else if ( character == $gameMap.boat() ) {
    if ( character._mapId != $gameMap.mapId() ) return false;

  }

  return $.alias( character, innerCheck, triggers );

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'getOnVehicle', function()
{ // Aliased getOnVehicle of class Game_Player.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.pixelGetOnVehicle();

  } else {
    $.alias();

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'pixelGetOnVehicle', function()
{ // get on vehicle for pixel movement.
//-----------------------------------------------------------------------------

    if ( this.canTriggerCharacter( $gameMap.airship(), false, [0] ) )
      this._vehicleType = "airship";

    else if ( this.canTriggerCharacter( $gameMap.ship(), false, [0] ) )
      this._vehicleType = "ship";

    else if ( this.canTriggerCharacter( $gameMap.boat(), false, [0] ) )
      this._vehicleType = "boat";

    if ( this.isInVehicle() ) {

      const delta = Vector2.subtract( this.vehicle().position, this.position );

      this._vehicleGettingOn = true;
      this.setThrough( true );
      this.setDestination( this.vehicle().position );
      this.setDirection( this.getDirectionFromVector( delta ) )
      this.requestThrough( false );
      this.updateMove();

      this.gatherFollowers();
    }

    return this._vehicleGettingOn;

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Player, 'getOffVehicle', function()
{ // Aliased getOffVehicle of class Game_Player.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.pixelGetOffVehicle();

  } else {
    $.alias();

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Player, 'pixelGetOffVehicle', function()
{ // get off the vehicle for pixel movement.
//-----------------------------------------------------------------------------

  if ( this.vehicle().isLandOk( this.x, this.y, this.direction() ) ) {

    if ( this.isInAirship() ) this.setDirection( 2 );
    this.vehicle().getOff();

    if ( !this.isInAirship() ) {
      this.forceMoveForward();
      this.setTransparent( false );
      this.setThrough( true );
    }

    const x = this._destination ? this._destination.end.x : this.x;
    const y = this._destination ? this._destination.end.y : this.y;
    this._followers.synchronize( x, y, this.direction() );
    this._vehicleGettingOff = true;

    this.clearMoveHistory();
    this.setMoveSpeed( 4 );
    this.makeEncounterCount();
    this.requestThrough( false );
    this.gatherFollowers();
    this.updateMove();

  }

  return this._vehicleGettingOff;

}, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Player, 'clearMoveHistory', function()
  { // clear the move history.
//-----------------------------------------------------------------------------

    this._moveHistory = [];

    this._followers._data.forEach( follower => {
      follower.clearDestination();
      follower._moveHistory = [];
    } );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'performTransfer', function()
  { // Aliased performTransfer of class Game_Player.
//-----------------------------------------------------------------------------

    $.alias();
    if ( $gameMap.isPixelMovement() ) this.clearMoveHistory();

  }, false );

//=============================================================================
// Dragon Smooth Camera Scroll Patch :
//=============================================================================

if ( SDragon.SmoothCamera ) {

//-----------------------------------------------------------------------------
  $.alias( Game_Player, 'updateScroll', function()
  { // Aliased updateScroll of class Game_Player.
//-----------------------------------------------------------------------------

    // $.alias();
    if ( !SDragon.SmoothCamera.enabled ) {
      return alias_Game_Player_updateScroll.call(this, ...arguments);
    }
    const focus = this.cameraFocus();
    const n = SDragon.SmoothCamera.slideCoefficient;
    const dX = (focus.x - Graphics.width  / 2) / n;
    const dY = (focus.y - Graphics.height / 2) / n;

    if ( Math.floor( Math.abs( focus.y - Graphics.height / 2 ) ) ) {
      if ( dY >  0 )
      $gameMap.scrollDown( dY );
      else if ( dY != 0 )
      $gameMap.scrollUp( -dY );

    }

    if ( Math.floor( Math.abs( focus.x - Graphics.width / 2 ) ) ) {
      if (dX >  0 )
      $gameMap.scrollRight( dX );
      else if ( dX != 0 )
      $gameMap.scrollLeft( -dX );
    }

  }, false );

}

//=============================================================================
// Gamme_Followers :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Followers, 'updateMove', function()
  { // Aliased updateMove of class Game_Followers.
//-----------------------------------------------------------------------------

    if ( !$gameMap.isPixelMovement() ) $.alias();


  }, false );

//=============================================================================
// Game_Follower :
//=============================================================================

//-----------------------------------------------------------------------------
$.alias( Game_Follower, 'initMembers', function()
{ // Aliased initMembers of class Game_Follower.
//-----------------------------------------------------------------------------

  $.alias();

  this._colliderType = 'circle';
  this.colliders.circle._ox = $.params.playerCollider.x;
  this.colliders.circle._oy = $.params.playerCollider.y;
  this.colliders.circle.radius = $.params.playerCollider.radius;

  this.colliders.rectangle._ox = $.params.playerCollider.x;
  this.colliders.rectangle._oy = $.params.playerCollider.y;
  this.colliders.rectangle.width = $.params.playerCollider.radius * 2;
  this.colliders.rectangle.height = $.params.playerCollider.radius * 2;

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Follower, 'isThrough', function()
  { // Aliased isThrough of class Game_Follower.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      return this.isPixelThrough();

    } else {
      return $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
    $.expand( Game_Follower, 'isPixelThrough', function()
    { // return if the character is pixel through.
//-----------------------------------------------------------------------------

      return $gamePlayer.isThrough() && this.isVisible() && !!this.actor();

    }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Follower, 'chaseCharacter', function( character )
{ // Aliased chaseCharacter of class Game_Follower.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    this.pixelChaseCharacter( character );

  } else {
    $.alias( character );

  }

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Follower, 'is8DirSprite', function()
  { // Aliased is8DirSprite of class Game_Follower.
//-----------------------------------------------------------------------------

    const actor = this.actor();

    if ( actor && actor.actor().meta['8dir'] ) {
      return true;
    }

    return $.alias();

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Follower, 'pixelChaseCharacter', function( character )
{ // chase a characters path rather than moving directly to a character.
//-----------------------------------------------------------------------------

  if ( $gamePlayer._followers.areGathering() ) {
    if ( Utils.RPGMAKER_NAME == 'MZ' ) {
      if ( !this.isGathered() ) this.setDestination( character.position );
    } else {
      if ( !this.pos( $gamePlayer.x, $gamePlayer.y ) ) this.setDestination( $gamePlayer.position );

    }

  } else {
    const delta = Vector2.subtract( character.position, this.position );
    const distance = $.params.followerDistance || 1;

    if ( delta.magnitude > distance ) {
      delta.magnitude -= distance;
      this.setDestination( Vector2.add( this.position, delta ) );

    }

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Follower, 'chaseCharacterHistory', function( character )
  { // chase the characters move history.
//-----------------------------------------------------------------------------

    const distance = $.params.followerDistance || 1;

    if ( character.moveHistorySize() >= distance ) {
      let value = this.distancePerFrame();
      let pos = this.position;
      let count = 0;
      while ( value >= Number.EPSILON ) {

        if ( character._moveHistory.length == 0 ) break;
        count++;
        let node = character._moveHistory[0];
        let delta = Vector2.subtract( node, pos );
        if ( delta.x > $gameMap.width() / 2 ) delta.x -= $gameMap.width();
        if ( delta.x < -$gameMap.width() / 2 ) delta.x += $gameMap.width();
        if ( delta.y > $gameMap.height() / 2 ) delta.y -= $gameMap.height();
        if ( delta.y < -$gameMap.height() / 2 ) delta.y += $gameMap.height();
        let magnitude = delta.magnitude;

        if ( value >= magnitude ) {
          character._moveHistory.shift();
        } else {
          magnitude = value;
          delta.magnitude = magnitude;

        }

        pos = Vector2.add( pos, delta );
        value -= magnitude;

      }

      this._dashing = $gamePlayer.isDashing();
      this.setDestination( pos );

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Follower, 'update', function()
  { // Aliased update of class Game_Follower.
//-----------------------------------------------------------------------------

    $.alias();
    if ( $gameMap.isPixelMovement() ) {
      if ( $.params.followerMode === 1 ) {
        this.legacyPixelChase();

      } else if ( $.params.followerMode === 0 ){
        this.updatePixelChase();

      }
    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Follower, 'updatePixelChase', function()
  { // udate chasing the character for pixel movement.
//-----------------------------------------------------------------------------

    if ( !this.isMoving() ) {

      const index = this._memberIndex - 1;
      const followers = $gamePlayer._followers._data;
      const target = index > 0 ? followers[index - 1] : $gamePlayer;
      if ( $gamePlayer._followers.areGathering() ) {
        this.chaseCharacter( target );

      } else if ( target ) {
        this.chaseCharacterHistory( target );

      }

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Follower, 'legacyPixelChase', function()
  { // chase the character with legacy chase method.
//-----------------------------------------------------------------------------


    if ( this.isNearTheScreen() && !this.isMoving() ) {

      const index = this._memberIndex - 1;
      const followers = $gamePlayer._followers._data;
      const target = index > 0 ? followers[index - 1] : $gamePlayer;
      const dist = Vector2.subtract( target.position, this.position ).magnitude;

      if ( target && dist > 1.1 ) {
        this.chaseCharacter( target );

      } else if ( $gamePlayer._followers.areGathering() ) {
        this.chaseCharacter( target );

      }

    } else {
      // TODO: add a teleport back to target.
    }


  }, false );

//-----------------------------------------------------------------------------
$.alias( Game_Follower, 'getCharacterColliders', function()
{ // Aliased getCharacterColliders of class Game_Follower.
//-----------------------------------------------------------------------------

  // const characters = this.allCharacters().filter( char => {
  //   if ( !char || char === this ) return false;
  //   if ( char._memberIndex > 0 ) return false;
  //   if ( char === $gamePlayer ) return false;
  //   if ( char.isThrough() ) return false;
  //   if ( Imported.OcRam_Passages ) {
  //     if ( char._higherLevel != this._higherLevel ) return false;
  //   }
  //
  //   return true;
  //
  // } );

  return [];
  // return characters.map( char => { return char.getCollider(); } );
  // return $.alias();

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Follower, 'updatePixelMove', function()
  { // Aliased updatePixelMove of class Game_Follower.
//-----------------------------------------------------------------------------

    const last = this.position;

    $.alias();

    if ( !Vector2.equals( last, this.position ) ) {
      last._moveSpeed = this.realMoveSpeed();
      this._moveHistory.push( last );
    }

  }, false );

//=============================================================================
// Game_Vehicle :
//=============================================================================

//-----------------------------------------------------------------------------
$.alias( Game_Vehicle, 'initMembers', function()
{ // Aliased initMembers of class Game_Vehicle.
//-----------------------------------------------------------------------------

  $.alias();
  this._colliderType = 'circle';

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Vehicle, 'getCollider', function()
{ // Aliased getCollider of class Game_Character.
//-----------------------------------------------------------------------------

  const collider = $.alias();

  collider._vehicleType = this._type;

  return collider;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Vehicle, 'getCharacterColliders', function()
{ // return character colliders.
//-----------------------------------------------------------------------------

  const characters = this.allCharacters().filter( char => {
    if ( !char || char === this ) return false;
    if ( char._memberIndex > 0 ) return false;
    if ( char === $gamePlayer ) return false;
    if ( char.isThrough() ) return false;
    if ( Imported.OcRam_Passages ) {
      if ( char._higherLevel != this._higherLevel ) return false;
    }
    return true;
  } );

  return characters.map( char => { return char.getCollider(); } );

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Vehicle, 'mapCollidersAtPos', function( x, y )
{ // Aliased mapCollidersAtPos of class Game_Vehicle.
//-----------------------------------------------------------------------------

  // $.alias();

  const { TILE_ID_A1 } = Tilemap;

  let tx = x.mod( $gameMap.width() );
  let ty = y.mod( $gameMap.height() );

  const tile = {
    x: x, y: y, ids: [$gameMap.allTiles( tx, ty ).filter( n => n > 0 )[0]]
  };


  tile.ids.forEach(( id, i ) => {
    const { TILE_ID_A1, TILE_ID_A2, TILE_ID_A3, TILE_ID_A4 } = Tilemap;
    if ( Tilemap.isAutotile( id ) ) {
      tile.ids[i] = Math.floor( ( id - TILE_ID_A1 ) / 48 ) * 48 + TILE_ID_A1;

    } else {
      tile.ids[i] = id;

    }
  });

  return [tile.ids.map( id => {

    if ( this.isBoat() ) {
      return $gameMap.boatCollider( id, x, y );

    } else if ( this.isShip() ) {
      return $gameMap.shipCollider( id, x, y );

    } else if ( this.isAirship() ) {
      return [];

    }

  } ).filter( c => !!c )[0]].filter( c => !!c );

}, false );

//-----------------------------------------------------------------------------
$.alias( Game_Vehicle, 'isLandOk', function( x, y, d )
{ // Aliased isLandOk of class Game_Vehicle.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    return this.isPixelLandOk( x, y, d );

  } else {
    return $.alias( x, y, d );

  }

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Vehicle, 'isPixelLandOk', function( x, y, d )
{ // Definition.
//-----------------------------------------------------------------------------

  if ( this.isAirship() ) {

    if ( !$gameMap.isValid( x, y ) ) return false;
    if (  this.unboardCollisionsAt( x, y ) ) return false;

  } else {

    const x2 = $gameMap.xWithDirection( x, d );
    const y2 = $gameMap.yWithDirection( y, d );

    let tx = $gameMap.isLoopHorizontal() ? x2.mod( $gameMap.width() ) : x2;
    let ty = $gameMap.isLoopVertical() ? y2.mod( $gameMap.height() ) : y2;

    if ( !$gameMap.isValid( tx, ty ) ) return false;
    if (  this.unboardCollisionsAt( x2, y2 ) ) return false;

  }

  return true;

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Vehicle, 'unboardCollisionsAt', function( x, y )
{ // return if the player has any collisions at the position specified.
//-----------------------------------------------------------------------------

  $gamePlayer.repositionColliders( new Vector2( x, y ) );
  this.repositionColliders( new Vector2( x, y ) );

  const collider = this.colliders.circle;
  const colliders = $gamePlayer.getMapColliders().concat( this.getCharacterColliders() );

  for ( let i = 0; i < colliders.length; i++ ) {
    if ( CollisionManager.aabbCollided( collider, colliders[i] ) ) {
      return true;
    }

  }

  this.repositionColliders( this.position );

  return false;

}, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Vehicle, 'syncWithPlayer', function()
  { // Aliased syncWithPlayer of class Game_Vehicle.
//-----------------------------------------------------------------------------

    if ( !$gamePlayer._vehicleGettingOn && !$gamePlayer._vehicleGettingOff ) {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Vehicle, 'is8DirSprite', function()
  { // Aliased is8DirSprite of class Game_Vehicle.
//-----------------------------------------------------------------------------

    if ( this.isBoat() ) {
      return $.params.boat8Dir || false;

    } else if ( this.isShip() ) {
      return $.params.ship8Dir || false;

    } else if ( this.isAirship() ) {
      return $.params.airship8Dir || false;

    }

    return $.alias();

  }, false );

//=============================================================================
// Game_Party :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Party, 'steps', function()
  { // Aliased steps of class Game_Party.
//-----------------------------------------------------------------------------

    return Math.floor( $.alias() );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Game_Party, 'increaseSteps', function( amount )
  { // Aliased increaseSteps of class Game_Party.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelIncreaseSteps( amount );
    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Game_Party, 'pixelIncreaseSteps', function( amount )
  { // increase steps for pixel movement.
//-----------------------------------------------------------------------------

    this._steps += amount;

  }, false );

//=============================================================================
// Game_Temp :
//=============================================================================

//-----------------------------------------------------------------------------
  $.expand( Game_Temp, 'updateDebugLayer', function()
  { // update the debug layer.
//-----------------------------------------------------------------------------

    const debugLayer = SceneManager._scene._debugLayer;
    if ( debugLayer ) debugLayer.updateDebug();

  }, false );

//-----------------------------------------------------------------------------
$.expand( Game_Temp, 'clearDebugLayer', function()
{ // clear the debug layer.
//-----------------------------------------------------------------------------

  const debugLayer = SceneManager._scene._debugLayer;
  if ( debugLayer ) debugLayer._graphic.clear();

}, false );

//-----------------------------------------------------------------------------
$.expand( Game_Temp, 'debugDrawShape', function( collider, color )
{ // draw the collider provided.
//-----------------------------------------------------------------------------

  const debugLayer = SceneManager._scene._debugLayer;

  if ( debugLayer ) debugLayer.drawShape( collider, color );
  // if ( debugLayer ) debugLayer.drawShape( collider, color );

}, false );

//=============================================================================
// Scene_Map :
//=============================================================================

//-----------------------------------------------------------------------------
$.alias( Scene_Map, 'createDisplayObjects', function()
{ // Aliased create of class Scene_Map.
//-----------------------------------------------------------------------------

  $.alias();
  this.createDebugLayer();

}, false );

//-----------------------------------------------------------------------------
  $.alias( Scene_Map, 'onMapTouch', function()
  { // Aliased onMapTouch of class Scene_Map.
//-----------------------------------------------------------------------------

    if ( !$.params.disableMouseMovement ) {
      $.alias();
    }

  }, false );

if ( Utils.RPGMAKER_NAME == 'MV' ) {

  //-----------------------------------------------------------------------------
    $.alias( Scene_Map, 'processMapTouch', function()
    { // Aliased processMapTouch of class Scene_Map.
  //-----------------------------------------------------------------------------

      if ( !$.params.disableMouseMovement ) {
        $.alias();
      }

    }, false );

}

//-----------------------------------------------------------------------------
$.expand( Scene_Map, 'createDebugLayer', function()
{ // create a new debug layer for the scene.
//-----------------------------------------------------------------------------

  this._debugLayer = new Debug_Layer();
  this.addChild( this._debugLayer );

}, false );

//-----------------------------------------------------------------------------
  $.alias( Scene_Map, 'updateCallMenu', function()
  { // Aliased updateCallMenu of class Scene_Map.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelUpdateMenuCall();
    } else {
      $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Scene_Map, 'pixelUpdateMenuCall', function()
  { // update pixel call menu.
//-----------------------------------------------------------------------------

    if ( this.isMenuEnabled() ) {
        if ( this.isMenuCalled() ) this.callMenu();

    } else {
        this.menuCalling = false;

    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Scene_Map, 'updateMain', function()
  { // Aliased updateMain of class Scene_Map.
//-----------------------------------------------------------------------------

    if ( $gameMap.isPixelMovement() ) {
      this.pixelUpdateMain();
    } else {
      $.alias();

    }


  }, false );

//-----------------------------------------------------------------------------
  $.expand( Scene_Map, 'pixelUpdateMain', function()
  { // update main for pixel movement.
//-----------------------------------------------------------------------------

    $gameMap.update( this.isActive() );

    if ( Utils.RPGMAKER_NAME == 'MZ' )
      $gamePlayer.update( this.isPlayerActive() );

    else
      $gamePlayer.update( this.isActive() );

    if ( $.params.debugMode && this.isActive() ) $gamePlayer.debugDraw();

    $gameTimer.update( this.isActive() );
    $gameScreen.update();


  }, false );

//=============================================================================
// Sprite_Character :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Sprite_Character, 'characterBlockY', function()
  { // Aliased characterBlockY of class Sprite_Character.
//-----------------------------------------------------------------------------

    if ( this._character.is8DirSprite() ) {
      return this.pixelCharacterBlockY();
    }
    return $.alias();


  }, false );

//-----------------------------------------------------------------------------
  $.expand( Sprite_Character, 'pixelCharacterBlockY', function()
  { // return the character block on the y axis.
//-----------------------------------------------------------------------------

    if (this._isBigCharacter) {
        return 0;
    } else {
        var index = this._character.characterIndex();
        return Math.floor( index / 4 ) * 8;
    }

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Sprite_Character, 'characterPatternY', function()
  { // Aliased characterPatternY of class Sprite_Character.
//-----------------------------------------------------------------------------

    if ( this._character.is8DirSprite() ) {
      return this.pixelCharacterPatternY();
    }
    return $.alias();

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Sprite_Character, 'pixelCharacterPatternY', function()
  { // Definition.
//-----------------------------------------------------------------------------

    const d = this._character.direction();
    return d - ( d >= 5 ? 2 : 1 );

  }, false );

//-----------------------------------------------------------------------------
  $.alias( Sprite_Character, 'patternHeight', function()
  { // Aliased patternHeight of class Sprite_Character.
//-----------------------------------------------------------------------------

    if ( this._character.is8DirSprite() ) {
      return this.pixelPatternHeight();

    } else {
      return $.alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Sprite_Character, 'pixelPatternHeight', function()
  { // return pattern height for pixel movement.
//-----------------------------------------------------------------------------

    if (this._tileId > 0) {
        return $gameMap.tileHeight();

    } else if (this._isBigCharacter) {
        return Math.floor( this.bitmap.height / 8 );

    } else {
        return Math.floor( this.bitmap.height / 16 );

    }

  }, false );

//=============================================================================
// Galv.AI :
//=============================================================================

if ( Imported.Galv_ActionIndicators ) {

//-----------------------------------------------------------------------------
  $.pixelCheckActionIcon = function() {
//-----------------------------------------------------------------------------
    let events = $gameMap.events();
    let action = {'eventId': 0, 'iconId': 0};
    let triggers = [ 0, 1, 2]

    for ( let i = 0, l = events.length; i < l; i++ ) {
      if ( $gamePlayer.canTriggerCharacter( events[i], events[i].isTransferEvent(), triggers ) ) {
        action = Galv.AI.checkEventForIcon( events[i] );
        if ( action ) break;
      }
    };
    action = action || {'eventId': 0, 'iconId': 0};
    $gamePlayer.actionIconTarget = action;

  }

//-----------------------------------------------------------------------------
  Galv_AI_checkActionIcon = Galv.AI.checkActionIcon;
  Galv.AI.checkActionIcon = function()
{ // Aliased checkActionIcon of class Galv.AI.
//-----------------------------------------------------------------------------

  if ( $gameMap.isPixelMovement() ) {
    $.pixelCheckActionIcon();

  } else {
    Galv_AI_checkActionIcon.call( this );

  }

};

}

//=============================================================================
// Plugin Commands
//=============================================================================

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'transfer_player', function( args )
  { // register command for transfer_player.
//-----------------------------------------------------------------------------

    const mapId = Number( args.mapId );
    const x = Number( args.x );
    const y = Number( args.y );
    let d = Number( args.d );
    const fadeType = Number( args.fadeType || args.f );

    d = d == 5 || d == 0 ? $gamePlayer.direction() : d;
    $gamePlayer.reserveTransfer( mapId, x, y, d, fadeType )

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'player_hitbox_rect', function( args )
  { // register command for player_hitbox_rect.
//-----------------------------------------------------------------------------

    const target = $gamePlayer;
    const x = args.x;
    const y = args.y;
    const width = args.width || args.w;
    const height = args.height || args.h;

    target.setColliderType( 'rectangle' );
    target.colliders.rectangle._ox = Number( x );
    target.colliders.rectangle._oy = Number( y );
    target.colliders.rectangle.width = Number( width );
    target.colliders.rectangle.height = Number( height );

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'player_hitbox_circle', function( args )
  { // register command for player_hitbox_rect.
//-----------------------------------------------------------------------------

    const target = $gamePlayer;
    const { x, y, radius } = args;
    target.setColliderType( 'circle' );
    target.colliders.circle._ox = Number( x );
    target.colliders.circle._oy = Number( y );
    target.colliders.circle.radius = Number( radius );

  } );
//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'follower_hitbox_rect', function( args )
  { // register command for follower_hitbox_rect.
//-----------------------------------------------------------------------------

    const { x, y, width, height, w, h } = args;

    const followers = $gamePlayer._followers._data;

    for ( let i = 0, l = followers.length; i < l; i++ ) {
      const target = followers[i];

      target.setColliderType( 'rectangle' );
      target.colliders.rectangle._ox = Number( x );
      target.colliders.rectangle._oy = Number( y );
      target.colliders.rectangle.width = Number( w || width );
      target.colliders.rectangle.height = Number( h || height );

    };


  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'follower_hitbox_circle', function( args )
  { // register command for follower_hitbox_rect.
//-----------------------------------------------------------------------------

    const { x, y, radius } = args;

    const followers = $gamePlayer._followers._data;

    for ( let i = 0, l = followers.length; i < l; i++ ) {
      const target = followers[i];

      target.setColliderType( 'circle' );
      target.colliders.circle._ox = Number( x );
      target.colliders.circle._oy = Number( y );
      target.colliders.circle.radius = Number( radius );

    };


  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'event_hitbox_rect', function( args )
  { // register command for event_hitbox_rect.
//-----------------------------------------------------------------------------

    const { id, x, y, width, height, w, h } = args;
    const target = $gameMap.event( Number( id ) );

    if ( target ) {
      target.setColliderType( 'rectangle' );
      target.colliders.rectangle._ox = Number( x );
      target.colliders.rectangle._oy = Number( y );
      target.colliders.rectangle.width = Number( w || width );
      target.colliders.rectangle.height = Number( h || height );
    }

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'event_hitbox_circle', function( args )
  { // register command for event_hitbox_rect.
//-----------------------------------------------------------------------------

    const { id, x, y, radius } = args;
    const target = $gameMap.event( Number( id ) );

    if ( target ) {
      target.setColliderType( 'circle' );
      target.colliders.circle._ox = Number( x );
      target.colliders.circle._oy = Number( y );
      target.colliders.circle.radius = Number( radius );
    }

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'disable_rounding', function()
  { // register command for disable_rounding.
//-----------------------------------------------------------------------------

    $gameVariables.disableRounding();

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'enable_rounding', function()
  { // register command for enable_rounding.
//-----------------------------------------------------------------------------

    $gameVariables.enableRounding();

  } );

//=============================================================================
} )( Chaucer.CAP );
//=============================================================================
