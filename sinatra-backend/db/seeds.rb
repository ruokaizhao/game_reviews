puts "🌱 Seeding spices..."

# Seed your database here

games = ["Call of Duty", "Resident Evil Village", "Battlefield 2042", "Marvel's Spider-Man: Miles Morales", "Far Cry 6", "NBA 2K22", "Fortnite", "Minecraft", "Grand Theft Auto V", "Roblox"]

prices = {"Call of Duty": 53, "Resident Evil Village": 60, "Battlefield 2042": 45, "Marvel's Spider-Man: Miles Morales": 30, "Far Cry 6": 30, "NBA 2K22": 20, "Fortnite": 30, "Minecraft": 20, "Grand Theft Auto V": 24, "Roblox": 10}

introductions = {
  "Call of Duty": "Not one, but two Call of Duty titles top the list of bestsellers for 2021: Call of Duty: Vanguard and Call of Duty: Black Ops: Cold War. Both are fast-paced, first-person shooters, only the first takes place in the run-up to World War II, while the second explores the Cold War of the '80s.",
  "Resident Evil Village": "Resident Evil Village continues the successful zombie franchise. Players control Ethan Winters, a man whose searching for his kidnapped daughter in a village full of zombies, in a game that mixes frights, action and puzzles.",
  "Battlefield 2042": "This multiplayer-first-person shooter game is set in the future, so players can take advantage of futuristic weapons and technology. There's also a portal mode, which lets players create their own environments using maps and features from past Battlefield games.",
  "Marvel's Spider-Man: Miles Morales": "Players swing around New York City as Miles Morales, the Spidey featured in Spider-Man: Into the Spider-Verse (which is getting a sequel this year), in this comic-inspired game. As Morales completes different missions and assignments, he unlocks different gadgets and suits to help him along the way.",
  "Far Cry 6": "Giancarlo Esposito, best known for playing Gus Fring in Breaking Bad and Better Call Saul, has a starring role in this first-person shooter. He plays Antón Castillo, a dictator of a fictional Caribbean island training his son to take over his rule. Players take on the role of a guerilla fighter trying to unseat him from power.",
  "NBA 2K22": "Who wants to shoot some hoops? This basketball simulation game, based on the National Basketball Association, is the 23rd installment in the NBA 2K franchise, after (you guessed it) NBA 2K21.",
  "Fortnite": "Developed by Epic Games and released in 2017, Fortnite remains one of the most popular video games. It has different modes, including Battle Royale, Save the World and Creative. Because it’s an online active shooter game, it can be controversial among parents and should definitely be played under supervision.",
  "Minecraft": "Minecraft is the best-selling video game of all time, and talk to any Minecraft-obsessed kid and you can easily see why. Released in 2011 and purchased by Microsoft in 2014, Minecraft has sold more than 238 million copies to date. The sandbox game allows players to move through and build structures in a pixelated, block-like world.",
  "Grand Theft Auto V": "Released by Rockstar Games in 2013, Grand Theft Auto V is an open-world, action-adventure game. As its title implies, players in the game’s fictional world of San Andreas commit crimes and try to evade authorities. After Minecraft, Grand Theft Auto V is the second best-selling game of all time.",
  "Roblox": "Roblox is a massively popular multiplayer online game in which players build their own virtual worlds. It was released back in 2006, and now it has more than 202 million monthly active users, according to Backlinko."
}

companies = {"Call of Duty": "ACTIVISION", "Resident Evil Village": "CAPCOM", "Battlefield 2042": "ELECTRONIC ARTS", "Marvel's Spider-Man: Miles Morales": "SONY", "Far Cry 6": "UBISOFT", "NBA 2K22": "2K", "Fortnite": "EPIC GAMES", "Minecraft": "MICROSOFT", "Grand Theft Auto V": "ROCKSTAR GAMES", "Roblox": "ROBLOX"}

imgs = {
  "Call of Duty": "https://m.media-amazon.com/images/I/61iPIxgOIyL._SL1476_.jpg",
  "Resident Evil Village": "https://m.media-amazon.com/images/I/71IvFMdG83S._SL1500_.jpg",
  "Battlefield 2042": "https://m.media-amazon.com/images/I/81MNtZgV-QL._AC_SL1500_.jpg", 
  "Marvel's Spider-Man: Miles Morales": "https://m.media-amazon.com/images/I/71LZm8RQ8LL._SL1361_.jpg", 
  "Far Cry 6": "https://m.media-amazon.com/images/I/81fypNGG2uL._SL1500_.jpg", 
  "NBA 2K22": "https://m.media-amazon.com/images/I/814IztfQ5LL._SL1500_.jpg", 
  "Fortnite": "https://m.media-amazon.com/images/I/71K+a6jzNsL._SL1234_.jpg", 
  "Minecraft": "https://m.media-amazon.com/images/I/81gJUSx-TjL._SL1500_.jpg", 
  "Grand Theft Auto V": "https://m.media-amazon.com/images/I/61+s8HfeFoL.jpg", 
  "Roblox": "https://m.media-amazon.com/images/I/71SfFWK2AUL._SL1465_.jpg"
}

reviews = {
  "Call of Duty": ["I like Call of duty!", "I like shooting!", "GOGOGO!"], 
  "Resident Evil Village": ["Exciting!", "Resident Evil is back!", "Horror Games are the best!", "This scares me, but in a good way..."],
  "Battlefield 2042": ["Fight with your friends!", "SHOOT!", "Battle with various weapons!", "Fire in the hole!"], 
  "Marvel's Spider-Man: Miles Morales": ["Superhero!", "I'm Spider-man!"], 
  "Far Cry 6": ["Great graphics!", "Wonderful storyline!"], 
  "NBA 2K22": ["Sports!", "I like basketball!"], 
  "Fortnite": ["Survive!", "Buddies, let's kick some asses!", "Fortnite is the best!", "Best game ever!"], 
  "Minecraft": ["Creation!", "I can do everything with it!"], 
  "Grand Theft Auto V": ["Open world games are the best", "I can be anyone I want!", "I can choose to do anything I like!"], 
  "Roblox": ["So much fun!", "So many great players!"]
}


puts "✅ Done seeding!"
