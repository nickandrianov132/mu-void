import Images from "../../../assets/Images";
import GuideTitle from "./GuidePages/GuidePagesComponents/GuideTitle";

const GuideMain = () => {
    return (
        <div className="guide_main_container">
            <GuideTitle title='About Mu Online game'/>
            <div className="guide_main_info">
                <div className="main_info_content">
                    <img className="main_image_title" src={Images.main_info_title}/>
                    <p className="main_info_p">
                        👉 <b>MU Online</b> - is a Free-To-Play medieval fantasy MMORPG. The game features fast-paced combat, quests, dungeons, PvP, castle sieges, and more. Players can choose from the seven classes and participate in a variety of official combat-centric events and prize challenges
                    </p>
                    <p className="main_info_p">
                        🔸 Players can engage in player-vs-player <b>PvP</b> battles and participate in large-scale castle sieges, where guilds fight for control of the castle.<br/>
                        Castle Siege is a guild vs. guild event where guilds battle to capture and control the Lorencia Castle. The event involves a siege on the castle, with defending guilds inside and attacking guilds outside, vying for control of the castle. The defending guild tries to hold the castle against the attacking guilds for the longest time, and the guild that controls the castle at the end of the siege is declared the victor. 
                    </p>
                    <p className="main_info_p">
                        🔸 The game includes unique events - <em className="info_em1">Blood Castle, Devil Square, Chaos Castle, Illusion Temple, Doppelganger, Imperial Fortress, Cry Wolf Event</em> where all players can earn experience or good prizes. 
                    </p>
                    <p className="main_info_p">
                        🔸 Many Bosses are present in game - <em className="info_em2">Kundun, Balgas, Nightmare, Selupan, Meduza </em>and so on.<br/>
                        Also there are lot of Mini-Bosses - <em className="info_em3"> Skeleton King, Red Dragons, Zaikan, White Withard, Golden Monsters</em> and other... 
                    </p>
                    <p className="main_info_p">
                        🔸 Available classes on our server Dark Knight, Dark Wizard, Fairy Elf, Magic Gladiator, Dark Lord, Summoner, and Rage Fighter.
                    </p>
                    <img className="main_info_allClasses_img" src={Images.all_classes}/>
                    <p className="main_info_p">
                         - <em className="main_info_em">Dark Knight :</em>  A melee class known for strong attack and defense, with the ability to increase HP. They can be built as damage dealers, support, or tanks.
                    </p>
                    <p className="main_info_p">
                         - <em className="main_info_em">Dark Wizard :</em>  A long-range spellcaster with access to powerful magic, including the "Mana shield" and "Teleport" skills for survivability. 
                    </p>
                    <p className="main_info_p">
                         - <em className="main_info_em">Fairy Elf :</em> An agile class excelling in both damage and support, with skills that boost speed, damage, and defense specializing in ranged combat with bows and arrows, also has diffrent buffs to improve itself or party members.
                    </p>
                    <p className="main_info_p">
                         - <em className="main_info_em">Magic Gladiator :</em> A versatile class combining elements of both Dark Knight and Dark Wizard.
                    </p>
                    <p className="main_info_p">
                         - <em className="main_info_em">Dark Lord :</em> A powerful class with high damage output and crowd control abilities, use pets Dark Horse and Dark Raven to improve his damage and defense.
                    </p>
                    <p className="main_info_p">
                         - <em className="main_info_em">Summoner :</em> A Long-range spellcaster class use curses, spells and books with special spell skills, has Berserk buff to improve her damage.
                    </p>
                    <p className="main_info_p">
                         - <em className="main_info_em">Rage Fighter :</em> A close-quarters combatant with high attack speed.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default GuideMain;
