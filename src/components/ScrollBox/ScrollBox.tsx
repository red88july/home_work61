import React from 'react';

const ScrollBox: React.FC = () => {
  return (
    <>
      <div className="d-flex gap-3 p-2 mt-5 ms-3 me-3 border border-primary-subtle border-4 rounded-3">
        <div className="overflow-scroll overflow-x-hidden p-3"
             style={{maxWidth: '450px', maxHeight: '60vh' }}>
          <ol className="m-0 p-0" style={{width: '350px', listStyle: 'none', }}>
            <li><a href="">Argentina</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>

            <li><a href="">Argentina</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
            <li><a href="">Argentina</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
          </ol>
        </div>
        <div>
          <div>
            <p>
              Pokem ipsum dolor sit amet Charmander Swinub Gardevoir Earth Badge Drapion Zigzagoon. Sinnoh Chimecho Farfetch'd sed do eiusmod tempor Turtwig Weedle Nidoqueen. Viridian City Sunkern Rhydon Seviper Chinchou Charizard Girafarig. Cascade Badge Tyrogue Sandslash Bellossom Gurdurr Zweilous Vanillish. Growl I know it's my destiny Ledian Pokemon 4Ever Machamp Liepard Meloetta.
            </p>
            <p>
              Velit esse cillum dolore eu fugiat nulla pariatur Azurill Budew Pikachu Eevee Pikachu Archeops. Qui officia deserunt mollit Clefable Hoenn Huntail Ash's mother Mawile Wailmer. Sunt in culpa Ultra Ball Hippowdon Hypno Plusle Stunky Tyranitar. Charmander Seviper Clefable Mint Berry Venonat Wailord Pewter City. Hive Badge Strength Hypno Beautifly Gastly Seismitoad Chatot.
            </p>
            <p>
              Dragon Patrat Herdier Shinx Arceus MysteryBerry Sudowoodo. Pikachu they're comfy and easy to wear Wing Attack Dragon Rage Bastiodon Togepi Weavile. Pokemon Celadon City Cleffa Silcoon Shellder Barboach Archen. Consectetur adipisicing elit Jynx Dustox Graveler Kyogre to catch them is my real test Starmie. Ut labore et dolore magna aliqua Mesprit Onix Wormadam Dodrio Kirlia Potion.
            </p>            <p>
              Celadon City Ash Illumise Rage Feebas Machamp Masquerain. Dragon Pokemon The Movie 2000 Electrike Exeggcute anim id est laborum Psyduck Axew. Gold Watchog Porygon Goldeen Water Weezing Gengar. Rising Badge Machamp Ground Poochyena Golurk make it double Phanpy. Electric Slugma Mothim Caterpie Running Shoes Poison Sting Vermilion City.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollBox;