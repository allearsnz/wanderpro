/* ================================================================
   WANDERPRO LLC — APP LOGIC
   Products, articles, routing, cart, modal, all renderers.
   ================================================================ */

/* ============ DATA: PRODUCTS ============ */
const IMG_BASE = 'https://images.unsplash.com/';
const img = (id, w=700, h=500) => `${IMG_BASE}${id}?w=${w}&h=${h}&fit=crop&q=80`;

const PRODUCTS = [
  { id:1, name:"Half Day iSimangaliso Boat Safari Tour To Richards Bay", price:280.93, category:"experience", region:"Africa", filter:"safari", imgId:"photo-1544551763-46a013bb70d5", stars:4.9, reviews:312, days:1, group:"Up to 12",
    shortDesc:"Explore the UNESCO World Heritage iSimangaliso Wetland Park by boat. Spot hippos, crocodiles, and exotic birdlife on this unforgettable half-day safari from Richards Bay.",
    longDesc:"Launch from Richards Bay into the iSimangaliso Wetland Park — Africa's oldest protected wilderness and a UNESCO World Heritage Site. Your experienced guide will navigate through channels teeming with hippos, crocodiles, and over 500 bird species. The estuary's glassy waters reflect the ancient tree line as you drift past waterbuck and elephant on the banks. A morning you will not forget.",
    included:["Professional wildlife guide","Safety equipment & life jackets","Hotel pickup available","Bottled water & snacks","National park entry fee"] },

  { id:2, name:"Miami Lights Private Nighttime Boat Tour", price:295.00, category:"experience", region:"USA", filter:"coast", imgId:"photo-1503891450247-ee5f8ec46dc3", stars:4.7, reviews:248, days:1, group:"Up to 6",
    shortDesc:"Experience Miami's glittering skyline from the water on a private evening cruise past celebrity homes, Biscayne Bay, and the iconic South Beach strip.",
    longDesc:"As the sun sets over Biscayne Bay, your private captain steers you through Miami's most spectacular waterways. Drift past the homes of billionaires on Star Island, watch South Beach come alive with neon, and cruise under the MacArthur Causeway while the city reflects on the water below. Champagne included. Capacity: up to 6 guests.",
    included:["Private boat for up to 6 guests","Licensed and insured captain","Complimentary champagne","2-hour city lights narrated tour","South Beach & Star Island route"] },

  { id:3, name:"Boat Tour – Snorkeling with Turtles or Whale Watching, Family of 3", price:543.42, category:"experience", region:"USA", filter:"tropic", imgId:"photo-1559494007-9f5847c49d94", stars:4.8, reviews:189, days:1, group:"Family of 3",
    shortDesc:"A family adventure combining snorkeling with sea turtles and whale watching in crystal clear waters — perfect for families with children of all ages.",
    longDesc:"This full-day family adventure packs in two of the ocean's greatest encounters. Morning snorkeling with wild sea turtles in shallow protected reef waters — bring your own camera for unforgettable close-ups. Then a whale watching cruise with a marine biologist narrating every breach and blow. Gear provided. Children welcome from age 5.",
    included:["Snorkel gear for all 3 (all sizes)","Coast Guard certified vessel","Marine biologist onboard guide","Underwater photography package","Light snacks and water throughout"] },

  { id:4, name:"Boat Tour from Orlando – Snorkel and Swim with Manatees, Couple", price:318.00, category:"experience", region:"USA", filter:"coast", imgId:"photo-1500370010411-c01200a7e712", stars:4.9, reviews:421, days:1, group:"Couple",
    shortDesc:"Swim alongside gentle manatees in their natural habitat on this intimate couple's experience departing from Orlando into Florida's crystal spring rivers.",
    longDesc:"Crystal River's 72°F spring-fed waters are home to the world's largest population of West Indian manatees. On this private couple's tour, you'll don a wetsuit and snorkel into Kings Bay where manatees congregate year-round. No crowds — maximum 2 guests. Your certified in-water guide will introduce you to the gentle giants up close.",
    included:["Wetsuit and snorkel gear for 2","Certified dive guide (in water with you)","National Wildlife Refuge permit","Round-trip transport from Orlando","Underwater camera rental available"] },

  { id:5, name:"Boat Tour in Vestmannaeyjar", price:103.34, category:"experience", region:"Scandinavia", filter:"arctic", imgId:"photo-1568430462989-44163eb1752f", stars:4.9, reviews:376, days:1, group:"Up to 14",
    shortDesc:"Sail around Iceland's dramatic Westman Islands volcanic archipelago. Discover sea caves, puffin colonies, and rugged lava coastlines formed by the 1973 eruption.",
    longDesc:"The Westman Islands rose from the sea in volcanic fury and still bear the marks of Iceland's most recent eruption. Your RIB boat weaves between black lava stacks, ducks into cathedral-ceilinged sea caves, and idles beside puffin colonies numbering in the thousands. In summer, Atlantic puffins nest here in numbers unmatched almost anywhere in the world.",
    included:["RIB boat tour (60–90 min)","Certified guide, commentary in English","Puffin colony approach (seasonal)","Sea cave exploration","Life jackets and safety briefing"] },

  { id:6, name:"Boat Tour of the Artistic Beauties of Venice, Family of 4", price:136.00, category:"experience", region:"Europe", filter:"med", imgId:"photo-1514890547357-a9ee288728e0", stars:4.8, reviews:204, days:1, group:"Family of 4",
    shortDesc:"Glide through Venice's iconic canals on a private family tour past Renaissance palaces, hidden bridges, and centuries-old churches unavailable by foot.",
    longDesc:"Venice's real secrets are not on foot — they're on water. Your private bragozzo-style wooden boat navigates canals too narrow for tourist ferries, pulling alongside palazzos whose foundations have been kissed by the lagoon for 800 years. Your English-speaking guide narrates the history of each bridge and building as your family drifts through the world's most extraordinary floating city.",
    included:["Private wooden boat for family of 4","English-speaking historian guide","Canal Grande route + hidden canals","Flexible 2-hour schedule","Rialto and Santa Maria della Salute stops"] },

  { id:7, name:"Boat Tour to the Vineyards with Wine Tasting from Barcelona, Family of 3", price:459.00, category:"experience", region:"Europe", filter:"med", imgId:"photo-1539037116277-4db20889f2d4", stars:4.7, reviews:156, days:1, group:"Family of 3",
    shortDesc:"Sail from Barcelona to Penedès wine country for an exclusive vineyard tour and premium tasting — a sophisticated family outing along Catalonia's golden coast.",
    longDesc:"Depart Barcelona's Port Olímpic aboard a sleek sailing catamaran bound for the Penedès wine appellation — home to 95% of Spain's cava production. After a scenic coastal passage, you'll transfer by private car to a family-run bodega for a guided vineyard walk and a 5-wine tasting paired with local charcuterie. Return as the sun drops behind Montjuïc.",
    included:["Catamaran transfer to vineyard","Guided winery tour with sommelier","5-wine tasting with charcuterie board","Vegetarian options available","Return sailing journey with sunset views"] },

  { id:8, name:"Hells Canyon Kirkwood Jet Boat Tour near Boise, Idaho", price:218.36, category:"experience", region:"USA", filter:"coast", imgId:"photo-1506905925346-21bda4d32df4", stars:4.9, reviews:304, days:1, group:"Up to 10",
    shortDesc:"Race through North America's deepest river gorge on a thrilling jet boat adventure along the Snake River. Towering canyon walls, roaring rapids, and ancient petroglyphs.",
    longDesc:"Hells Canyon drops deeper than the Grand Canyon and is accessible only by jet boat or on foot. Your flat-bottomed jet boat rockets through Class IV rapids, spins around boulders, and slows for petroglyphs carved by the Nez Perce thousands of years ago. Lunch at the historic Kirkwood Bar ranch. This is Idaho at its most raw and spectacular.",
    included:["Full-day jet boat tour","Experienced licensed captain","Wildlife spotting stops (deer, elk, osprey)","Lunch at Kirkwood Bar ranch","All safety equipment included"] },

  { id:9, name:"Whale Watching RIB Boat Tour in Skjervoy from Tromso", price:293.95, category:"experience", region:"Scandinavia", filter:"arctic", imgId:"photo-1531366936337-7c912a4589a7", stars:4.9, reviews:512, days:1, group:"Up to 12",
    shortDesc:"Witness humpback and sperm whales in Arctic Norwegian waters on a high-speed RIB from Skjervøy — one of the world's premier winter whale watching grounds.",
    longDesc:"From November to February, billions of Norwegian spring herring concentrate in the fjords north of Tromsø — and the whales follow. Humpbacks bubble-net feed in groups of up to 30. Orcas herd silver columns of fish into bait balls. Your RIB boat puts you within metres of the action, and your marine biologist identifies each individual by fluke markings.",
    included:["High-speed RIB boat","Full dry suit provided","Marine biologist guide","Hot chocolate and snacks","Photo stops and ID charts"] },

  { id:10, name:"Boat Tour, Captain & Champagne", price:375.00, category:"experience", region:"Europe", filter:"med", imgId:"photo-1530126483408-aa533e55bdb2", stars:4.8, reviews:178, days:1, group:"Up to 6",
    shortDesc:"A luxury private charter with your own captain, chilled champagne, and a curated coastal route. Perfect for anniversaries, proposals, and celebrations.",
    longDesc:"This is the charter you book when the occasion demands something extraordinary. Your private captain collects you from the marina with a chilled bottle of Moët, plots a bespoke coastal course, and disappears just enough to give you the water to yourselves. Swimming stops wherever you choose. Sunset return timing on request.",
    included:["3-hour private charter","Licensed captain","Bottle of champagne on arrival","Flexible route to your preference","Swimming stops at your request","Up to 6 guests"] },

  { id:11, name:"Boat Tour All in One", price:190.00, category:"experience", region:"Europe", filter:"med", imgId:"photo-1505118380757-91f5f5632de0", stars:4.6, reviews:143, days:1, group:"Up to 12",
    shortDesc:"The complete coastal experience — snorkeling, island hopping, swimming stops, and scenic sailing all packed into one epic full-day Mediterranean tour.",
    longDesc:"For those who can't choose between snorkeling, sunbathing, and sailing — this is the answer. A 8-hour full-day tour covering multiple sea caves, two uninhabited islands, four swimming stops, and a freshly prepared seafood lunch in a sheltered cove. One boat, one day, everything included. This tour sells out weeks in advance in summer.",
    included:["Full 8-hour guided boat tour","All snorkel gear included","Freshly prepared seafood lunch","4 swimming stops","2 island visits","Sea cave exploration"] },

  { id:12, name:"Boat Tour to Mljet National Park & 3 Islands", price:156.75, category:"experience", region:"Europe", filter:"med", imgId:"photo-1555990793-da11153b6523", stars:4.8, reviews:267, days:1, group:"Up to 10",
    shortDesc:"Explore Croatia's most pristine national park by boat. Ancient salt lakes, three stunning islands, and emerald Adriatic bays in one unforgettable day.",
    longDesc:"Mljet is Croatia's best-kept secret — a densely forested island with two saltwater lakes connected to the sea, home to a 12th-century Benedictine monastery on its own islet. Your boat calls at Mljet, Koločep, and Šipan, pausing at the monastery, a rope swing into the blue lake, and a family-run konoba for grilled fish.",
    included:["Mljet National Park entry fee","Guided boat tour from Dubrovnik","Swimming stops at all 3 islands","Lunch at local konoba restaurant","English-speaking skipper"] },

  { id:13, name:"Boat Tour – Exotic Caves with Snorkel from Playas del Coco", price:135.00, category:"experience", region:"Latin America", filter:"tropic", imgId:"photo-1559494007-9f5847c49d94", stars:4.7, reviews:134, days:1, group:"Up to 12",
    shortDesc:"Discover hidden sea caves and vibrant coral reefs along Costa Rica's Pacific Guanacaste coast on a thrilling snorkeling boat adventure.",
    longDesc:"Costa Rica's Guanacaste coast hides a network of volcanic sea caves carved by Pacific swells over millennia. Your bilingual guide leads you by panga through cave entrances big enough to swim inside, then out to shallow reef systems teeming with parrotfish, moray eels, and occasional manta rays. Fresh fruit on deck for the return cruise.",
    included:["Snorkel mask, fins, and vest","Bilingual guide","Sea cave exploration","Fresh fruit and water","Life jacket and safety briefing"] },

  { id:14, name:"\"Todo Glaciares\" Boat Tour + Transfers from El Calafate", price:205.00, category:"experience", region:"Latin America", filter:"tropic", imgId:"photo-1470770841072-f978cf4d019e", stars:4.9, reviews:289, days:1, group:"Up to 80",
    shortDesc:"Sail through Patagonia's Los Glaciares National Park face to face with the Perito Moreno and Upsala glaciers — an experience that stops time.",
    longDesc:"Stand at the bow as walls of ancient blue ice rise 70 metres above the waterline. The Perito Moreno calves skyscraper-sized blocks into Lago Argentino with a sound like artillery. The Upsala Glacier is quieter — ancient, massive, and slowly retreating. Your naturalist guide contextualises what you're seeing against the backdrop of Andean climate science.",
    included:["Full navigation through both glaciers","Return transfer from El Calafate","Los Glaciares National Park entry","Expert naturalist guide","Hot drinks onboard throughout"] },

  { id:15, name:"Boat Tour Experience – Sea Life Up Close", price:280.00, category:"experience", region:"USA", filter:"coast", imgId:"photo-1583212292454-1fe6229603b7", stars:4.7, reviews:198, days:1, group:"Up to 30",
    shortDesc:"Get closer to ocean wildlife than you ever thought possible. Dolphins, sea lions, seabirds, and occasional whales — all in their natural environment.",
    longDesc:"Departing from a Northern California harbor, this semi-submersible vessel has an underwater viewing gallery at the waterline, giving you eye-level access to kelp forest ecosystems and marine megafauna without getting wet. Above deck, your marine ecologist calls out species and behaviors as the boat idles through protected waters.",
    included:["Underwater viewing gallery access","Marine ecologist narration","Binoculars provided","90-minute tour","Photo package available on request"] },

  { id:16, name:"Boat Tour in the La Maddalena Archipelago From Palau", price:268.00, category:"experience", region:"Europe", filter:"med", imgId:"photo-1570077188670-e3a8d69ac5ff", stars:4.8, reviews:221, days:1, group:"Up to 10",
    shortDesc:"Cruise through Sardinia's La Maddalena archipelago — a paradise of turquoise lagoons, pink granite rocks, and pristine white sand beaches reachable only by boat.",
    longDesc:"Seven major islands and dozens of islets make up La Maddalena, once a NATO submarine base and now one of the Mediterranean's most protected marine parks. Your skipper threads between pink granite formations to hidden beaches with water so clear you can see the anchor on the sand 10 metres below. Multiple swimming stops. Local seafood lunch.",
    included:["Full-day boat tour from Palau","Multiple beach stops (skipper's choice)","All snorkel equipment","Freshly prepared on-board lunch","Skipper and experienced crew"] },

  { id:17, name:"Private Boat Tours in Dubrovnik – DUBROVNIK BOATING", price:401.92, category:"experience", region:"Europe", filter:"med", imgId:"photo-1499244571948-7ccddb3583f1", stars:4.9, reviews:341, days:1, group:"Up to 8",
    shortDesc:"Explore Croatia's most iconic city from the Adriatic on a private speedboat. Sea caves, the Elafiti Islands, secret swimming spots, and cold drinks aboard.",
    longDesc:"Dubrovnik's city walls are impressive from land. From the sea, they're jaw-dropping. Your private speedboat departs the Old Port and runs south along the limestone coast, ducking into the famous Blue Cave, circling the Elafiti Islands, and finding snorkel spots the tour groups never reach. Cold Ožujsko beer and local spirits on ice throughout.",
    included:["Private speedboat with captain","Elafiti Islands circuit","Blue Cave entry","Snorkel gear for all guests","Cold drinks and light snacks","Up to 8 guests"] },

  { id:18, name:"Sitka's Ultimate Wildlife Boat Tour", price:250.00, category:"experience", region:"USA", filter:"coast", imgId:"photo-1535591273668-578e31182c4f", stars:4.8, reviews:167, days:1, group:"Up to 20",
    shortDesc:"Alaska's premier wildlife boat tour from Sitka. Brown bears fishing for salmon, bald eagles overhead, humpback whales breaching in Frederick Sound.",
    longDesc:"Sitka sits at the intersection of the open Pacific and the protected Inside Passage — one of North America's richest wildlife zones. On this 3-hour tour your naturalist guide works the radio with other captains to locate active bear fishing, eagle perches, and whale pods. September coincides with both the salmon run and humpback congregation.",
    included:["3-hour wildlife boat tour from Sitka","Certified naturalist guide","High-quality binoculars","Rain gear provided","Hot beverages throughout"] },

  { id:19, name:"Napali Coast Boat Tour and Snorkeling", price:210.00, category:"experience", region:"USA", filter:"tropic", imgId:"photo-1483168527879-c66136b56105", stars:4.9, reviews:493, days:1, group:"Up to 36",
    shortDesc:"Witness Kauai's Napali Coast sea cliffs from the water while snorkeling Hawaii's most pristine marine environment. The most dramatic coastline in the Pacific.",
    longDesc:"The Napali Coast is roadless and trailless — the only way to see it properly is from the sea. Sheer cathedral cliffs rise 1,200 metres directly from the surf. Spinner dolphins ride your bow wave. Below the surface, green sea turtles and reef sharks patrol around coral formations. Your deli lunch on deck as you drift below the cliffs is the best meal you will ever eat.",
    included:["Snorkel gear for all guests","Coast Guard certified vessel","Captain and crew","Deli lunch on deck","Sea cave exploration where safe","Spinner dolphin encounters"] },

  { id:20, name:"Private Waikiki Sunset Boat Tour", price:300.00, category:"experience", region:"USA", filter:"coast", imgId:"photo-1559532851-4d5e3d7af63f", stars:4.8, reviews:213, days:1, group:"Up to 6",
    shortDesc:"Watch the Honolulu sunset from the water on a private charter — Diamond Head glowing gold, city lights coming on, champagne in hand. Pure Hawaiian magic.",
    longDesc:"This is how Honolulu is supposed to be experienced. Your private vessel departs Magic Island as the sun begins its descent behind the Waianae Mountains. The captain holds position in the golden channel between Diamond Head and the Waikiki skyline for the peak 15 minutes of colour — then slowly circles back as the city sparkles to life below you.",
    included:["2-hour private charter","Champagne and Hawaiian snacks","Licensed captain","Sunset photo positioning","Diamond Head and Waikiki route","Up to 6 guests"] },

  { id:21, name:"Private Crystal River Wildlife Boat Tour", price:250.00, category:"experience", region:"USA", filter:"coast", imgId:"photo-1500370010411-c01200a7e712", stars:4.8, reviews:178, days:1, group:"Up to 4",
    shortDesc:"Explore Florida's Crystal River by private boat and snorkel with wild manatees in the warm spring waters of Kings Bay Wildlife Refuge.",
    longDesc:"Kings Bay is fed by 40 natural springs maintaining a constant 72°F — which is why manatees gather here in their hundreds every winter. Your private pontoon boat navigates the refuge's channels with a certified guide who has spent years reading the behaviour of these gentle giants. Wetsuit and snorkel gear included. Capacity: up to 4 guests.",
    included:["Private pontoon boat (up to 4 guests)","Wetsuit and snorkel gear included","Certified in-water guide","National Wildlife Refuge permit","90-minute on-water experience"] },

  { id:22, name:"For the Love of Travel Gift Card", priceFrom:20, priceTo:2000, denominations:[20,50,100,200,500,1000,2000], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1488085061387-422e29b40080", stars:5.0, reviews:892,
    shortDesc:"The perfect gift for any traveller. Redeemable across the full WanderPro catalogue of boat tours, experiences, and partner travel brands.",
    longDesc:"Our flagship gift card. Recipients can apply the full balance against any WanderPro experience or partner brand booking. Delivered instantly by email with a personal message option. Never expires.",
    included:["Instant email delivery","Personal message option","Never expires","Redeemable across full catalogue","Stackable with promotions"] },

  { id:23, name:"Hotels.com Gift Card", priceFrom:10, priceTo:500, denominations:[10,25,50,100,200,500], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1455587734955-081b22074882", stars:4.9, reviews:412,
    shortDesc:"Book hotels, resorts, and vacation rentals worldwide. Accepted at over 500,000 properties globally. Delivered instantly by email.",
    longDesc:"Hotels.com gift cards are the world's most flexible accommodation currency. Use them on hotels in 200+ countries, redeem against the Hotels.com Rewards program, and stack with member discounts. Delivered instantly upon order.",
    included:["Email delivery within minutes","500,000+ accepted properties","Stackable with Hotels.com Rewards","Worldwide validity","No additional fees"] },

  { id:24, name:"Delta Airlines Gift Card", priceFrom:10, priceTo:500, denominations:[10,25,50,100,200,500], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1436491865332-7a61a109cc05", stars:4.9, reviews:334,
    shortDesc:"Fly anywhere Delta operates with this flexible travel gift card. Valid on flights, seat upgrades, and in-flight purchases.",
    longDesc:"Delta gift cards are accepted on all Delta-operated flights worldwide, including SkyMiles award redemptions, baggage fees, seat upgrades, and in-flight purchases. Cards are delivered electronically and never expire.",
    included:["Email delivery","Valid on all Delta-operated flights","Use for seat upgrades","Use for baggage fees","Never expires"] },

  { id:25, name:"Marriott Gift Card", priceFrom:10, priceTo:500, denominations:[10,25,50,100,200,500], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1571003123894-1f0594d2b5d9", stars:4.8, reviews:287,
    shortDesc:"Redeemable at over 7,000 Marriott properties worldwide including Sheraton, Westin, W Hotels, and The Ritz-Carlton.",
    longDesc:"Marriott Bonvoy gift cards work across the Marriott portfolio of 30 brands and 7,000+ properties globally. Use them for room nights, dining, spa, and incidentals. Combine with Bonvoy points for upgrades.",
    included:["Email delivery","Marriott Bonvoy 30-brand portfolio","7,000+ properties","Combine with Bonvoy points","Use for dining and spa"] },

  { id:26, name:"Airbnb Gift Card", priceFrom:10, priceTo:500, denominations:[10,25,50,100,200,500], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1502672260266-1c1ef2d93688", stars:4.9, reviews:621,
    shortDesc:"Stay anywhere in the world. From beach houses to city apartments — the gift of freedom to stay your way, anywhere Airbnb operates.",
    longDesc:"The gift of choice. Airbnb gift cards work for stays, Airbnb Experiences, and Adventures globally. Redeem in over 220 countries and regions. Codes never expire.",
    included:["Instant email delivery","Valid for stays and Experiences","Available in 220+ countries","Never expires","No additional fees"] },

  { id:27, name:"Celebrity Cruises Gift Card", priceFrom:10, priceTo:500, denominations:[10,25,50,100,200,500], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1548574505-5e239809ee19", stars:4.8, reviews:198,
    shortDesc:"Sail with one of the world's most awarded cruise lines. Redeemable on staterooms, dining, spa treatments, and shore excursions.",
    longDesc:"Celebrity Cruises gift cards apply to bookings, onboard credit, dining, spa, shore excursions, and bar packages across the Celebrity fleet. The recipient choice for cruise enthusiasts.",
    included:["Email delivery","Valid fleet-wide","Use for shore excursions","Use for spa and dining","Combine with promotions"] },

  { id:28, name:"TripGift Gift Card", priceFrom:10, priceTo:500, denominations:[10,25,50,100,200,500], category:"giftcard", region:"Global", filter:"gift", imgId:"photo-1488085061387-422e29b40080", stars:4.9, reviews:344,
    shortDesc:"The world's most flexible travel gift card. Redeemable at 500+ top travel brands including airlines, hotels, and experiences worldwide.",
    longDesc:"TripGift is the most flexible travel currency in the world. Recipients can choose from 500+ travel brands across airlines, hotels, car rentals, cruises, and experiences in 130+ countries.",
    included:["Email delivery","500+ travel brand network","130+ country coverage","Recipient chooses brand","Never expires"] },
];

/* ============ DATA: ARTICLES ============ */
const ARTICLES = [
  { id:"a1", tag:"Guides", title:"The Hidden Tools Frequent Travelers Use to Save Hundreds", date:"April 2025", imgId:"photo-1531366936337-7c912a4589a7",
    excerpt:"Frequent travelers know that the key to consistent savings lies in the tools they use — not just the destinations they pick. From cashback apps to travel gift cards, here's what road warriors actually use.",
    body:[
      "Most travelers focus on finding the cheapest flight or hotel, but the real savers are working a different angle entirely: stacking discounts on top of whatever rate they book. The base rate is just the starting point — and the gap between casual and seasoned travelers can easily run into thousands of dollars per year.",
      "Cashback apps like Fluz, Rakuten, and Honey are the first layer. These don't reduce the headline price, but they redirect a percentage of every transaction back to you in the form of credit or cash. Stack a 6% Fluz cashback on a Hotels.com gift card on top of a 10% off promo, and you're already 16% ahead before you book.",
      "The second layer is gift card arbitrage. Buying discounted gift cards from brands like Delta, Marriott, or Airbnb — then using them to pay for actual travel — adds another 5–15% in real savings. Sites like WanderPro now sell these cards directly, often paired with cashback offers.",
      "The third and most overlooked layer is loyalty stacking. Pay with a credit card that offers travel multipliers, route the booking through your loyalty program, and combine those points with promo codes. The frequent traveler's playbook is rarely about finding the cheapest deal — it's about layering five savings streams on the same purchase."
    ] },
  { id:"a2", tag:"Deals", title:"Why Gift Cards Are the Smartest Way to Pay for Travel", date:"March 2025", imgId:"photo-1488085061387-422e29b40080",
    excerpt:"Paying for flights and hotels with gift cards unlocks cashback opportunities most travelers don't know exist. We break down exactly how to stack savings on your next trip.",
    body:[
      "Gift cards have been quietly outperforming traditional payment methods for travel for years. Most people associate them with birthday presents — but for travelers in the know, they're a primary booking currency. Here's why.",
      "Brands like Delta, Marriott, Airbnb, and Hotels.com routinely offer their gift cards through third-party retailers at 5–15% off face value. Buy a $500 Delta gift card for $450, then book a $500 flight with it, and you've effectively scored a 10% discount on a fare that wasn't otherwise discounted. This works on every Delta flight, every day of the year.",
      "Stack this with cashback apps and the math gets even better. Fluz, for example, offers cashback on travel gift card purchases. Buy a discounted Hotels.com card through Fluz, get 6% additional cashback, and you're now 16% under the headline rate before any other promo code is applied.",
      "The ultimate strategy is to build a small reserve of gift cards across the brands you use most. Wait for promos, buy in volume when discounts spike, and pay for trips out of your reserve. Frequent travelers who do this consistently save 15–25% on a year's worth of travel — without ever changing where they go."
    ] },
  { id:"a3", tag:"Top 10", title:"Best Boat Tours in the USA You've Never Heard Of", date:"February 2025", imgId:"photo-1506905925346-21bda4d32df4",
    excerpt:"Forget the obvious tourist cruises. These 10 under-the-radar boat tours across America are genuinely world-class — from Alaska's fjords to Florida's crystal springs.",
    body:[
      "Everyone knows about the Statue of Liberty cruise. We're not interested in those. The boat tours below are the ones taken by people who already live in coastal towns — the local secrets that finally got too good to keep.",
      "Hells Canyon Jet Boat Tour (Idaho) tops the list — North America's deepest river gorge, accessible only by jet boat or on foot. The Snake River runs Class IV rapids past 8,000-foot canyon walls and Nez Perce petroglyphs. There's no road in. There's barely a way out. It's the closest thing the lower 48 has to a true wilderness experience by water.",
      "Crystal River Manatee Tours (Florida) — Kings Bay holds the largest concentration of manatees in the world. From November through March, these gentle giants gather in the 72°F spring-fed waters. Private snorkel tours let you slip into the river with them. It is the closest most people will ever get to a wild marine mammal.",
      "Other standouts include Sitka's Wildlife Boat Tour (where bears, eagles, and humpbacks all show up in the same afternoon), the Napali Coast cruise on Kauai (sea cliffs that rise 1,200 metres straight out of the surf), and Miami's nighttime city lights tour (the Miami you actually came to see). Each one is worth flying for."
    ] },
  { id:"a4", tag:"Guides", title:"How to Plan a Family Boat Tour Without the Stress", date:"January 2025", imgId:"photo-1559494007-9f5847c49d94",
    excerpt:"Travelling with kids on a boat tour doesn't have to be complicated. We cover everything from picking the right tour length to what to pack for a full day on the water.",
    body:[
      "Family boat tours can be the highlight of a trip — or a logistical disaster. The difference is preparation. Most issues that derail a family on the water are predictable, and almost all of them are solvable in advance.",
      "Tour length is the single biggest variable. Half-day tours work for kids 5 and up. Full-day tours work for ages 8 and up — but only if there's structured activity (snorkeling, wildlife spotting) rather than open ocean cruising. Sunset and city-lights tours are great for all ages because they're typically 90 minutes or less.",
      "Pack list essentials: SPF 50+ reef-safe sunscreen, a wide-brim hat for every family member, a long-sleeved rash guard for kids (sunburn under reflected water is brutal), motion sickness wristbands or chewables (Bonine over Dramamine for kids), and waterproof bags for phones and snacks.",
      "Best family-friendly destinations: Crystal River for younger kids (calm spring water, slow manatees), Vestmannaeyjar for older kids (puffins, sea caves, RIB boats), and Venice for everyone (canals, no waves, history). Skip open-ocean whale watching with anyone under 8 — the swell will end the trip in tears."
    ] },
  { id:"a5", tag:"Top 10", title:"Top 5 Whale Watching Destinations in the World", date:"December 2024", imgId:"photo-1568430462989-44163eb1752f",
    excerpt:"Norway, Hawaii, Iceland, Mexico, and New Zealand — the five places on earth where whale watching consistently delivers the goods. Here's when to go and what to expect.",
    body:[
      "Whale watching is among the most weather-dependent activities in travel. The difference between a great location in the right season and the wrong season is the difference between fluke-slapping orcas at the bow and a four-hour empty ocean tour. Here's where to go, when, and why.",
      "Skjervøy, Norway (November–February): Humpbacks and orcas concentrate in the fjords north of Tromsø to feed on Norwegian spring herring. The density is unmatched globally — bubble-net feeding by groups of 30+ humpbacks happens regularly. Pair with northern lights for a once-in-a-lifetime trip.",
      "Maui, Hawaii (December–April): The North Pacific humpback population's primary breeding ground. Expect hundreds of individuals in the Auau Channel, breaches every few minutes, and warm sunshine throughout. Best for first-time whale watchers — the conditions and visibility are forgiving.",
      "Other top picks: Húsavík, Iceland (May–September) for blue whales and minkes; Baja California, Mexico (January–March) for grey whale calving lagoons where babies come to your boat; and Kaikoura, New Zealand (year-round) for resident sperm whales — the only year-round near-guaranteed whale destination on this list."
    ] },
  { id:"a6", tag:"Deals", title:"Travel Gift Cards: The Perfect Gift for Any Occasion", date:"November 2024", imgId:"photo-1544551763-46a013bb70d5",
    excerpt:"Can't decide what to get someone who has everything? A travel experience gift card is personal, flexible, and exciting. Here's our guide to choosing the right one.",
    body:[
      "Travel gift cards have quietly become the most-given non-cash gift in the US. Why? They're personal — the recipient chooses the trip — but flexible enough that you can't get it wrong. Here's how to pick the right card for the right person.",
      "For the unfocused dreamer who hasn't picked a destination: TripGift or our own For the Love of Travel card. Both work across hundreds of brands and let the recipient apply them however they want — flights, hotels, experiences, or all three.",
      "For the brand loyalist: pick the brand. A Marriott Bonvoy member will get more value from a Marriott gift card stacked with their points than from a generic card. Same for Delta SkyMiles members and Delta cards. Match the gift to the loyalty program they already work.",
      "Personalising the gift: pair a generic travel card with a small physical item — a destination guidebook for a place they've mentioned, a packing cube set, a pair of compact binoculars. The card becomes the spark, the physical item becomes the prompt. It's a far more thoughtful gift than a card alone."
    ] }
];

/* ============ STATE ============ */
let cart = JSON.parse(localStorage.getItem('wp_cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('wp_favs') || '[]');
let currentProduct = null;
let currentArticle = null;
let activeShopFilters = { cat:'all', region:'all', sort:'popular' };

function saveCart(){ localStorage.setItem('wp_cart', JSON.stringify(cart)); }
function saveFavs(){ localStorage.setItem('wp_favs', JSON.stringify(favorites)); }

/* ============ ROUTING ============ */
const PAGES = ['home','shop','product','destinations','about','news','article','connect','cart','terms','privacy','returns'];
// Sub-pages map to a parent for nav highlighting.
const NAV_PARENT = { product:'shop', article:'news' };

function navigate(page, opts={}){
  if(!PAGES.includes(page)) page='home';
  document.querySelectorAll('.page').forEach(p=>p.style.display='none');
  const el = document.getElementById('page-'+page);
  if(!el) return;
  el.style.display='block';
  // Render page-specific content
  if(page==='shop') renderShop();
  if(page==='product') renderProduct();
  if(page==='destinations') renderDestinations();
  if(page==='news') renderNews();
  if(page==='article') renderArticle();
  if(page==='cart') renderCart();
  // Hash + scroll
  const hash = page + (opts.id ? ':'+opts.id : '');
  if(window.location.hash.replace('#','') !== hash) window.location.hash = hash;
  window.scrollTo({top:0,behavior:'instant'});
  // Active nav link — sub-pages light up their parent
  const activeKey = NAV_PARENT[page] || page;
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(l=>l.classList.toggle('active', l.dataset.page===activeKey));
  // Reveal observer for new content
  setTimeout(initReveal, 50);
}

function navigateToProduct(id){
  currentProduct = PRODUCTS.find(p=>p.id===id);
  navigate('product', {id});
}
function navigateToArticle(id){
  currentArticle = ARTICLES.find(a=>a.id===id);
  navigate('article', {id});
}

window.addEventListener('hashchange', handleHash);
function handleHash(){
  const raw = (window.location.hash||'').replace('#','').split(':');
  const page = raw[0]||'home';
  const id = raw[1];
  if(page==='product' && id){ currentProduct = PRODUCTS.find(p=>p.id===parseInt(id)); }
  if(page==='article' && id){ currentArticle = ARTICLES.find(a=>a.id===id); }
  navigate(page,{id});
}

/* ============ HOME: HERO LETTERS / STARS / PARALLAX ============ */
function initHomeHero(){
  const mt = document.getElementById('megaTitle');
  if(mt && !mt.dataset.done){
    const word = mt.textContent;
    mt.innerHTML = '';
    [...word].forEach((c,i)=>{
      const s = document.createElement('span');
      s.className='ch'; s.textContent=c;
      s.style.animationDelay = (0.25+i*0.07)+'s';
      mt.appendChild(s);
    });
    mt.dataset.done='1';
  }
  const stars = document.getElementById('stars');
  if(stars && !stars.children.length){
    for(let i=0;i<60;i++){
      const s = document.createElement('div');
      s.className='star';
      s.style.left = Math.random()*100+'%';
      s.style.top = Math.random()*55+'%';
      s.style.animationDelay = (Math.random()*4)+'s';
      stars.appendChild(s);
    }
  }
}

function initSearchFields(){
  const fields = document.querySelectorAll('#search .field');
  fields.forEach(f=>{
    const dd = f.querySelector('.dd');
    f.addEventListener('click',(e)=>{
      if(e.target.closest('.dd-row')) return;
      fields.forEach(o=>{ if(o!==f) o.classList.remove('open','focus'); });
      f.classList.toggle('open');
      f.classList.add('focus');
    });
    dd.querySelectorAll('.dd-row').forEach(r=>{
      r.addEventListener('click',()=>{
        const sub = f.querySelector('[data-sub]');
        sub.textContent = r.dataset.val;
        sub.style.color = '#0f172a';
        sub.style.fontWeight = '600';
        f.classList.remove('open');
      });
    });
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('#search .field')) fields.forEach(f=>{ f.classList.remove('open','focus'); });
  });
}

/* ============ NAV SCROLL ============ */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y>80);
  const heroImg = document.getElementById('heroImg');
  const heroMtn = document.getElementById('heroMtn');
  if(heroImg) heroImg.style.transform = `translateY(${y*0.25}px) scale(${1+y*0.0003})`;
  if(heroMtn) heroMtn.style.transform = `translateY(${y*-0.12}px)`;
});

/* ============ ANNOUNCEMENT BANNER ============ */
function initAnnouncement(){
  const el = document.getElementById('announce');
  const closeBtn = document.getElementById('annClose');
  if(!el||!closeBtn) return;
  if(sessionStorage.getItem('wp_ann_dismissed')==='1'){
    el.classList.add('hidden');
    document.body.classList.add('no-banner');
    nav.classList.add('no-banner');
  }
  closeBtn.addEventListener('click',()=>{
    el.classList.add('hidden');
    document.body.classList.add('no-banner');
    nav.classList.add('no-banner');
    sessionStorage.setItem('wp_ann_dismissed','1');
  });
}

/* ============ MOBILE MENU ============ */
function initMobileMenu(){
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mmClose');
  if(!ham||!menu) return;
  function open(){ menu.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow='hidden'; }
  function close(){ menu.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow=''; }
  ham.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  window.closeMobileMenu = close;
}

/* ============ HOME: DESTINATIONS GRID ============ */
function destCardHTML(p){
  return `
    <div class="card" onclick="navigateToProduct(${p.id})">
      <div class="img" style="background-image:url('${img(p.imgId)}')"></div>
      <div class="overlay"></div>
      <div class="badge">${p.region}</div>
      <button class="fav ${favorites.includes(p.id)?'liked':''}" onclick="event.stopPropagation();toggleFav(${p.id},this)" aria-label="favourite">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${favorites.includes(p.id)?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 10-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 000-7.8z"/></svg>
      </button>
      <div class="meta">
        <h3>${p.name}</h3>
        <div class="row"><span>${p.region}</span><span class="price">From $${Math.round(p.price||p.priceFrom)}</span></div>
        <div class="stars-row" style="margin-top:6px;color:var(--gold)">★★★★★ <span style="color:#cbd5e1;margin-left:6px">${p.stars} · ${p.reviews}+ reviews</span></div>
      </div>
    </div>`;
}

function renderHomeDest(){
  const grid = document.getElementById('homeDestGrid');
  if(!grid) return;
  const featured = [1,2,7,9,5,17].map(id=>PRODUCTS.find(p=>p.id===id));
  grid.innerHTML = featured.map(destCardHTML).join('');
}

/* ============ PACKAGE CARD ============ */
function pkgCardHTML(p){
  return `
    <article class="pkg" onclick="navigateToProduct(${p.id})">
      <div class="hero-im" style="background-image:url('${img(p.imgId,700,400)}')">
        <div class="price-tag">$${Math.round(p.price)}<span class="per">/pp</span></div>
        <div class="loc-tag"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 22s-7-7-7-13a7 7 0 0114 0c0 6-7 13-7 13z"/><circle cx="12" cy="9" r="2"/></svg>${p.region}</div>
      </div>
      <div class="pkg-body">
        <h3>${p.name}</h3>
        <div class="pkg-meta">
          <span class="pm"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${p.days||1} day${(p.days||1)>1?'s':''}</span>
          <span class="pm"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z"/><path d="M2 22a10 10 0 0120 0"/></svg> ${p.group||'Small group'}</span>
          <span class="pm" style="color:var(--gold)">★ ${p.stars} <span style="color:var(--muted)">(${p.reviews})</span></span>
        </div>
        <ul class="pkg-incl">${(p.included||[]).slice(0,4).map(x=>`<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12l5 5L20 7"/></svg>${x}</li>`).join('')}</ul>
        <div class="pkg-foot">
          <span class="rating"><b>Instant booking</b> · Free cancel</span>
          <button class="book" onclick="event.stopPropagation();bookRipple(event);openBooking(${p.id})">Book Now</button>
        </div>
      </div>
    </article>`;
}

/* ============ HOME: PACKAGES + TABS ============ */
function renderHomePackages(filter='all'){
  const grid = document.getElementById('homePkgGrid');
  if(!grid) return;
  const list = filter==='all'
    ? [9,12,5,13,6,8].map(id=>PRODUCTS.find(p=>p.id===id))
    : PRODUCTS.filter(p=>p.filter===filter && p.category==='experience').slice(0,6);
  grid.innerHTML = '';
  list.forEach((p,i)=>{
    const wrap = document.createElement('div');
    wrap.style.opacity='0'; wrap.style.transform='translateY(20px)';
    wrap.innerHTML = pkgCardHTML(p);
    grid.appendChild(wrap.firstElementChild);
    setTimeout(()=>{
      const el = grid.children[i];
      if(el){ el.style.transition='all .5s ease'; el.style.opacity='1'; el.style.transform='none'; }
    }, i*70);
  });
}

function initHomeTabs(){
  const tabs = document.querySelectorAll('#homeTabs .tab');
  const pill = document.getElementById('homeTabPill');
  function place(){
    const a = document.querySelector('#homeTabs .tab.active');
    if(!a||!pill) return;
    const r = a.getBoundingClientRect();
    const p = a.parentElement.getBoundingClientRect();
    pill.style.left = (r.left-p.left)+'px';
    pill.style.width = r.width+'px';
  }
  tabs.forEach(t=>{
    t.addEventListener('click',()=>{
      tabs.forEach(o=>o.classList.remove('active'));
      t.classList.add('active');
      place();
      renderHomePackages(t.dataset.filter);
    });
  });
  setTimeout(place, 100);
  window.addEventListener('resize', place);
}

/* ============ SHOP ============ */
function productCardHTML(p){
  const liked = favorites.includes(p.id);
  const priceHTML = p.category==='giftcard'
    ? `<div class="pc-price"><span class="from">From</span>$${p.priceFrom}</div>`
    : `<div class="pc-price">$${Math.round(p.price)}</div>`;
  const btnLabel = p.category==='giftcard' ? 'Select Amount →' : 'Add to Cart';
  return `
    <div class="product-card">
      <div class="pc-img" onclick="navigateToProduct(${p.id})">
        <div class="img" style="background-image:url('${img(p.imgId,500,400)}')"></div>
        <div class="badge">${p.region}</div>
        <button class="fav ${liked?'liked':''}" onclick="event.stopPropagation();toggleFav(${p.id},this)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${liked?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 10-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 000-7.8z"/></svg>
        </button>
      </div>
      <div class="pc-body">
        <h3 onclick="navigateToProduct(${p.id})">${p.name}</h3>
        <div class="pc-stars"><span class="gold">★</span> ${p.stars} <span>(${p.reviews})</span></div>
        ${priceHTML}
        <button class="add-cart" data-pid="${p.id}" onclick="${p.category==='giftcard'?`navigateToProduct(${p.id})`:`addToCartFromBtn(this,${p.id})`}">${btnLabel}</button>
      </div>
    </div>`;
}

function getFilteredProducts(){
  let list = [...PRODUCTS];
  if(activeShopFilters.cat!=='all') list = list.filter(p=>p.category===activeShopFilters.cat);
  if(activeShopFilters.region!=='all') list = list.filter(p=>p.region===activeShopFilters.region);
  if(activeShopFilters.sort==='low') list.sort((a,b)=>(a.price||a.priceFrom)-(b.price||b.priceFrom));
  if(activeShopFilters.sort==='high') list.sort((a,b)=>(b.price||b.priceFrom)-(a.price||a.priceFrom));
  if(activeShopFilters.sort==='popular') list.sort((a,b)=>b.reviews-a.reviews);
  return list;
}

function renderShop(){
  // Counts
  document.getElementById('catAll').textContent = `(${PRODUCTS.length})`;
  document.getElementById('catExp').textContent = `(${PRODUCTS.filter(p=>p.category==='experience').length})`;
  document.getElementById('catGift').textContent = `(${PRODUCTS.filter(p=>p.category==='giftcard').length})`;
  // Active states
  document.querySelectorAll('#shopCatRow .pill-filter').forEach(b=>b.classList.toggle('active', b.dataset.cat===activeShopFilters.cat));
  document.querySelectorAll('#shopRegionRow .pill-filter').forEach(b=>b.classList.toggle('active', b.dataset.region===activeShopFilters.region));
  document.getElementById('sortSelect').value = activeShopFilters.sort;
  // Grid
  const grid = document.getElementById('productGrid');
  const list = getFilteredProducts();
  grid.innerHTML = list.map(productCardHTML).join('');
}

function filterShopByCat(cat){
  activeShopFilters.cat = cat;
  renderShop();
}

function initShopHandlers(){
  document.querySelectorAll('#shopCatRow .pill-filter').forEach(b=>b.addEventListener('click',()=>{
    activeShopFilters.cat = b.dataset.cat; renderShop();
  }));
  document.querySelectorAll('#shopRegionRow .pill-filter').forEach(b=>b.addEventListener('click',()=>{
    activeShopFilters.region = b.dataset.region; renderShop();
  }));
  document.getElementById('sortSelect').addEventListener('change',(e)=>{
    activeShopFilters.sort = e.target.value; renderShop();
  });
}

/* ============ PRODUCT DETAIL ============ */
let pdpState = { thumbIdx:0, qty:1, denom:null, tab:'overview' };

function renderProduct(){
  if(!currentProduct){ navigate('shop'); return; }
  const p = currentProduct;
  pdpState = { thumbIdx:0, qty:1, denom:p.category==='giftcard'?p.denominations[2]:null, tab:'overview' };
  document.getElementById('pdpCrumbName').textContent = p.name;
  const grid = document.getElementById('pdpGrid');
  const thumbCrops = ['top','center','bottom'];
  const tagClass = p.category==='giftcard'?'gift':'exp';
  const tagLabel = p.category==='giftcard'?'Gift Card':'Travel Experience';
  const priceHTML = p.category==='giftcard'
    ? `<div class="pdp-price" id="pdpPrice">$${pdpState.denom}</div>
       <div>
         <label class="input-label">Choose Amount</label>
         <div class="denom-row">${p.denominations.map(d=>`<button class="denom-pill ${d===pdpState.denom?'active':''}" data-d="${d}" onclick="setDenom(${d})">$${d}</button>`).join('')}</div>
       </div>`
    : `<div class="pdp-price">$${p.price.toFixed(2)} <span style="font-size:14px;font-family:Inter;color:var(--muted);letter-spacing:0">per person</span></div>`;
  const qtyHTML = p.category==='experience' ? `
    <div class="qty-row">
      <span class="qty-label">Quantity</span>
      <div class="qty-ctrl">
        <button onclick="adjustQty(-1)">−</button>
        <span id="pdpQty">${pdpState.qty}</span>
        <button onclick="adjustQty(1)">+</button>
      </div>
    </div>` : '';
  grid.innerHTML = `
    <div class="pdp-imgs">
      <div class="pdp-main-img" id="pdpMainImg" style="background-image:url('${img(p.imgId,800,800)}')"></div>
      <div class="pdp-thumbs">
        ${thumbCrops.map((c,i)=>`<div class="pdp-thumb ${i===0?'active':''}" data-idx="${i}" data-crop="${c}" style="background-image:url('${img(p.imgId,300,300)}&crop=${c}')" onclick="setThumb(${i},'${c}')"></div>`).join('')}
      </div>
    </div>
    <div class="pdp-info">
      <div class="pdp-tags">
        <span class="tag-pill">${p.region}</span>
        <span class="tag-pill ${tagClass}">${tagLabel}</span>
      </div>
      <h1 class="pdp-title">${p.name}</h1>
      <div class="pdp-stars"><span class="gold">★★★★★</span> <b style="color:#fff">${p.stars}</b> · ${p.reviews} reviews</div>
      ${priceHTML}
      <div class="pdp-divider"></div>
      <p class="pdp-desc">${p.shortDesc}</p>
      ${qtyHTML}
      <button class="pdp-add" id="pdpAdd" onclick="addCurrentToCart()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/></svg>
        Add to Cart
      </button>
      <a class="pdp-back" onclick="navigate('shop')">← Back to Shop</a>
      <div class="pdp-trust">
        <span>🔒 Secure Booking</span><span>✈️ Instant Confirmation</span><span>💬 24/7 Support</span>
      </div>
    </div>`;
  renderPdpTab();
  // Related: same category, exclude current
  const related = PRODUCTS.filter(x=>x.category===p.category && x.id!==p.id).slice(0,3);
  document.getElementById('pdpRelated').innerHTML = related.map(r=>{
    if(r.category==='giftcard'){
      // adapt pkg card for gift card
      return `<article class="pkg" onclick="navigateToProduct(${r.id})">
        <div class="hero-im" style="background-image:url('${img(r.imgId,700,400)}')">
          <div class="price-tag">From $${r.priceFrom}</div>
          <div class="loc-tag">Gift Card</div>
        </div>
        <div class="pkg-body">
          <h3>${r.name}</h3>
          <div class="pkg-meta"><span class="pm" style="color:var(--gold)">★ ${r.stars} <span style="color:var(--muted)">(${r.reviews})</span></span></div>
          <p style="color:#c8d3e3;font-size:13px;line-height:1.5;margin:0;flex:1">${r.shortDesc.slice(0,120)}…</p>
          <div class="pkg-foot"><span class="rating"><b>Email delivery</b></span><button class="book">View →</button></div>
        </div></article>`;
    }
    return pkgCardHTML(r);
  }).join('');
  // Tab handlers — bind once, reset state on each render
  document.querySelectorAll('.pdp-tab').forEach(t=>t.classList.toggle('active', t.dataset.tab==='overview'));
  if(!window._pdpTabsBound){
    window._pdpTabsBound = true;
    document.querySelectorAll('.pdp-tab').forEach(t=>t.addEventListener('click',()=>{
      document.querySelectorAll('.pdp-tab').forEach(o=>o.classList.remove('active'));
      t.classList.add('active');
      pdpState.tab = t.dataset.tab;
      renderPdpTab();
    }));
  }
}

function renderPdpTab(){
  const p = currentProduct;
  const el = document.getElementById('pdpTabContent');
  if(!el) return;
  if(pdpState.tab==='overview'){
    el.innerHTML = `<p>${p.longDesc}</p><p>${p.region==='Global'?'Delivered electronically with full tracking and confirmation. Use across our extensive travel partner network — from boutique boat tours to global airline brands.':`Set against the natural beauty of ${p.region}, this experience is operated by an established local provider with a long safety record and deep regional knowledge. Bookings are confirmed within 24 hours of receipt.`}</p>`;
  } else if(pdpState.tab==='included'){
    el.innerHTML = `<ul class="pdp-incl-list">${p.included.map(x=>`<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg>${x}</li>`).join('')}</ul>`;
  } else {
    el.innerHTML = `<p>Free cancellation if cancelled 48 hours or more before the experience date. Cancellations within 48 hours are non-refundable. Contact info@wanderpro.us for assistance with changes.</p><p>Gift cards are non-refundable once delivered. For weather-related operator cancellations, you will be offered a full refund or a no-cost reschedule.</p>`;
  }
}

function setThumb(i, crop){
  pdpState.thumbIdx = i;
  document.querySelectorAll('.pdp-thumb').forEach((t,idx)=>t.classList.toggle('active', idx===i));
  document.getElementById('pdpMainImg').style.backgroundImage = `url('${img(currentProduct.imgId,800,800)}&crop=${crop}')`;
}

function setDenom(d){
  pdpState.denom = d;
  document.querySelectorAll('.denom-pill').forEach(p=>p.classList.toggle('active', parseInt(p.dataset.d)===d));
  const pe = document.getElementById('pdpPrice');
  if(pe) pe.textContent = `$${d}`;
}

function adjustQty(delta){
  pdpState.qty = Math.max(1, pdpState.qty + delta);
  document.getElementById('pdpQty').textContent = pdpState.qty;
}

function addCurrentToCart(){
  const p = currentProduct;
  if(p.category==='giftcard'){
    addToCart(p.id, 1, pdpState.denom);
  } else {
    addToCart(p.id, pdpState.qty);
  }
  const btn = document.getElementById('pdpAdd');
  btn.classList.add('added');
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg> Added to Cart`;
  setTimeout(()=>{
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/></svg> Add to Cart`;
  }, 1500);
}

function addToCartFromBtn(btn, pid){
  addToCart(pid, 1);
  btn.classList.add('added');
  const original = btn.textContent;
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg> Added`;
  setTimeout(()=>{ btn.classList.remove('added'); btn.textContent = original; }, 1500);
}

/* ============ DESTINATIONS PAGE ============ */
function renderDestinations(){
  const tabs = document.querySelectorAll('#destTabs .tab');
  const pill = document.getElementById('destTabPill');
  function place(){
    const a = document.querySelector('#destTabs .tab.active');
    if(!a||!pill) return;
    const r = a.getBoundingClientRect();
    const pr = a.parentElement.getBoundingClientRect();
    pill.style.left = (r.left-pr.left)+'px';
    pill.style.width = r.width+'px';
  }
  if(!tabs[0].dataset.bound){
    tabs.forEach(t=>{
      t.dataset.bound='1';
      t.addEventListener('click',()=>{
        tabs.forEach(o=>o.classList.remove('active'));
        t.classList.add('active');
        place();
        renderDestGrid(t.dataset.region);
      });
    });
  }
  renderDestGrid('all');
  setTimeout(place, 100);
  // Gift teaser row
  const giftRow = document.getElementById('destGiftRow');
  giftRow.innerHTML = [22,23,24,26].map(id=>{
    const g = PRODUCTS.find(p=>p.id===id);
    return `<div class="gi" style="background-image:url('${img(g.imgId,200,200)}')" onclick="navigateToProduct(${id})"></div>`;
  }).join('');
}

function renderDestGrid(region){
  const grid = document.getElementById('destPageGrid');
  let list = PRODUCTS.filter(p=>p.category==='experience');
  if(region && region!=='all') list = list.filter(p=>p.region===region);
  grid.innerHTML = list.map(destCardHTML).join('');
}

/* ============ NEWS PAGE ============ */
function renderNews(){
  const tabs = document.querySelectorAll('#newsTabs .tab');
  const pill = document.getElementById('newsTabPill');
  function place(){
    const a = document.querySelector('#newsTabs .tab.active');
    if(!a||!pill) return;
    const r = a.getBoundingClientRect();
    const pr = a.parentElement.getBoundingClientRect();
    pill.style.left = (r.left-pr.left)+'px';
    pill.style.width = r.width+'px';
  }
  if(!tabs[0].dataset.bound){
    tabs.forEach(t=>{
      t.dataset.bound='1';
      t.addEventListener('click',()=>{
        tabs.forEach(o=>o.classList.remove('active'));
        t.classList.add('active');
        place();
        renderNewsGrid(t.dataset.cat);
      });
    });
  }
  renderNewsGrid('all');
  setTimeout(place, 100);
}

function renderNewsGrid(cat){
  const grid = document.getElementById('newsGrid');
  let list = ARTICLES;
  if(cat && cat!=='all') list = list.filter(a=>a.tag===cat);
  grid.innerHTML = list.map(a=>`
    <article class="article-card" onclick="navigateToArticle('${a.id}')">
      <div class="ac-img" style="background-image:url('${img(a.imgId,700,400)}')"></div>
      <div class="ac-body">
        <span class="ac-tag">${a.tag}</span>
        <h3>${a.title}</h3>
        <p class="ac-excerpt">${a.excerpt}</p>
        <div class="ac-foot"><span>WanderPro Team · ${a.date}</span><span class="ac-read">Read More →</span></div>
      </div>
    </article>`).join('');
}

/* ============ ARTICLE PAGE ============ */
function renderArticle(){
  if(!currentArticle){ navigate('news'); return; }
  const a = currentArticle;
  const related = ARTICLES.filter(x=>x.tag===a.tag && x.id!==a.id).slice(0,3);
  const el = document.getElementById('articleContent');
  el.innerHTML = `
    <a class="article-back" onclick="navigate('news')">← Back to News</a>
    <div class="article-hero" style="background-image:url('${img(a.imgId,1400,800)}')"></div>
    <span class="article-tag">${a.tag}</span>
    <h1 class="article-title">${a.title}</h1>
    <div class="article-meta">By WanderPro Team · ${a.date}</div>
    <div class="article-body">${a.body.map(p=>`<p>${p}</p>`).join('')}</div>
    ${related.length?`<div class="article-related">
      <h3>Related Articles</h3>
      <div class="news-grid">${related.map(r=>`
        <article class="article-card" onclick="navigateToArticle('${r.id}')">
          <div class="ac-img" style="background-image:url('${img(r.imgId,700,400)}')"></div>
          <div class="ac-body">
            <span class="ac-tag">${r.tag}</span>
            <h3>${r.title}</h3>
            <p class="ac-excerpt">${r.excerpt.slice(0,120)}…</p>
            <div class="ac-foot"><span>${r.date}</span><span class="ac-read">Read →</span></div>
          </div>
        </article>`).join('')}</div>
    </div>`:''}`;
}

/* ============ CART ============ */
function addToCart(productId, quantity=1, denomination=null){
  const product = PRODUCTS.find(p=>p.id===productId);
  if(!product) return;
  // For gift cards, each denomination is a separate line item
  const matchKey = i=>i.product.id===productId && i.denomination===denomination;
  const existing = cart.find(matchKey);
  if(existing){ existing.quantity += quantity; }
  else { cart.push({ product, quantity, denomination }); }
  saveCart();
  updateCartBadge();
  showToast('Added to cart');
}

function removeFromCart(idx){
  cart.splice(idx,1);
  saveCart();
  updateCartBadge();
  renderCart();
}

function updateCartQty(idx, delta){
  cart[idx].quantity = Math.max(1, cart[idx].quantity + delta);
  saveCart();
  updateCartBadge();
  renderCart();
}

function updateCartBadge(){
  const count = cart.reduce((sum,i)=>sum+i.quantity, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.style.display = count>0 ? 'flex' : 'none';
  if(count>0){
    badge.animate([{transform:'scale(1)'},{transform:'scale(1.4)'},{transform:'scale(1)'}], {duration:300});
  }
}

function getItemPrice(i){
  return i.denomination ? i.denomination : i.product.price;
}

function renderCart(){
  const el = document.getElementById('cartContent');
  if(cart.length===0){
    el.innerHTML = `
      <div class="cart-empty">
        <div class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg></div>
        <h2>Your cart is empty</h2>
        <p>You haven't added any experiences yet.</p>
        <button class="cs-btn" style="max-width:240px;margin:0 auto" onclick="navigate('shop')">Browse Tours →</button>
      </div>`;
    return;
  }
  const subtotal = cart.reduce((s,i)=>s + getItemPrice(i)*i.quantity, 0);
  el.innerHTML = `
    <div class="cart-grid">
      <div class="cart-items">
        <h2>Your Cart</h2>
        ${cart.map((i,idx)=>{
          const p = i.product;
          const price = getItemPrice(i);
          return `
          <div class="cart-item">
            <div class="ci-img" style="background-image:url('${img(p.imgId,200,200)}')"></div>
            <div class="ci-info">
              <div class="ci-name">${p.name}</div>
              <div class="ci-meta">
                <span class="tag-pill ${p.category==='giftcard'?'gift':'exp'}">${p.category==='giftcard'?'Gift Card':p.region}</span>
                ${i.denomination?`<span class="tag-pill">$${i.denomination} denomination</span>`:''}
              </div>
              <div class="qty-ctrl" style="width:fit-content;margin-top:6px">
                <button onclick="updateCartQty(${idx},-1)">−</button>
                <span>${i.quantity}</span>
                <button onclick="updateCartQty(${idx},1)">+</button>
              </div>
            </div>
            <div class="ci-actions">
              <div class="ci-price">$${(price*i.quantity).toFixed(2)}</div>
              <button class="ci-remove" onclick="removeFromCart(${idx})" aria-label="Remove">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="cart-summary">
        <h3>Order Summary</h3>
        <div class="cs-list">
          ${cart.map(i=>`<div class="row"><span>${i.product.name.slice(0,32)}${i.product.name.length>32?'…':''} × ${i.quantity}</span><b>$${(getItemPrice(i)*i.quantity).toFixed(2)}</b></div>`).join('')}
        </div>
        <div class="cs-divider"></div>
        <div class="cs-total"><span>Subtotal</span><b>$${subtotal.toFixed(2)}</b></div>
        <div class="cs-info">💬 Our team will contact you within 24 hours to confirm your booking and arrange next steps.</div>
        <button class="cs-btn" onclick="openCartCheckout()">Request Booking</button>
        <p class="cs-note">No payment taken here. Our team handles all booking details by email.</p>
      </div>
    </div>`;
}

/* ============ FAVORITES ============ */
function toggleFav(id, btn){
  const i = favorites.indexOf(id);
  if(i>=0){
    favorites.splice(i,1);
    btn.classList.remove('liked');
    btn.querySelector('svg').setAttribute('fill','none');
    showToast('Removed from wishlist');
  } else {
    favorites.push(id);
    btn.classList.add('liked');
    btn.querySelector('svg').setAttribute('fill','currentColor');
    showToast('Added to wishlist');
  }
  saveFavs();
}

/* ============ MODAL / BOOKING FLOW ============ */
let bookingCtx = { product:null, step:0, data:{travelers:2,date:'',name:'',email:'',phone:'',requests:''}, mode:'booking' };
const modalBg = document.getElementById('modalBg');

function openBooking(productId){
  const p = PRODUCTS.find(x=>x.id===productId);
  bookingCtx = { product:p, step:0, data:{travelers:2,date:'',name:'',email:'',phone:'',requests:''}, mode:'booking' };
  document.getElementById('modalImg').style.backgroundImage = `url('${img(p.imgId,700,800)}')`;
  document.getElementById('modalTitle').textContent = `Book: ${p.name}`;
  renderStep();
  modalBg.classList.add('open');
}

function openCartCheckout(){
  bookingCtx = { product:{name:'Cart Booking', price:cart.reduce((s,i)=>s+getItemPrice(i)*i.quantity,0), imgId:cart[0].product.imgId}, step:0, data:{travelers:cart.reduce((s,i)=>s+i.quantity,0),date:'',name:'',email:'',phone:'',requests:''}, mode:'cart' };
  document.getElementById('modalImg').style.backgroundImage = `url('${img(bookingCtx.product.imgId,700,800)}')`;
  document.getElementById('modalTitle').textContent = 'Request Booking';
  renderStep();
  modalBg.classList.add('open');
}

function closeModal(){ modalBg.classList.remove('open'); }
modalBg.addEventListener('click', e=>{ if(e.target===modalBg) closeModal(); });

function renderStep(){
  const s = bookingCtx.step;
  const progress = document.querySelectorAll('.progress span');
  progress.forEach((el,i)=>el.classList.toggle('on', i<=s));
  document.getElementById('stepLabel').textContent = `Step ${s+1} of 3`;
  const content = document.getElementById('modalContent');
  const back = document.getElementById('backBtn');
  const next = document.getElementById('nextBtn');
  if(s===0){
    document.getElementById('stepName').textContent = 'Trip details';
    content.innerHTML = `
      <div class="form-row">
        <div><label class="input-label">Travelers</label><input class="input" id="f_t" type="number" min="1" max="20" value="${bookingCtx.data.travelers}"/></div>
        <div><label class="input-label">Departure</label><input class="input" id="f_d" type="text" placeholder="Jun 12, 2026" value="${bookingCtx.data.date}"/></div>
      </div>
      <div class="form-row full"><div><label class="input-label">Special requests</label><textarea class="input" id="f_r" rows="3" placeholder="Dietary needs, accessibility, celebrations...">${bookingCtx.data.requests}</textarea></div></div>`;
    back.style.visibility = 'hidden';
    next.textContent = 'Continue';
  } else if(s===1){
    document.getElementById('stepName').textContent = 'Your details';
    content.innerHTML = `
      <div class="form-row">
        <div><label class="input-label">Full name</label><input class="input" id="f_n" type="text" placeholder="Your name" value="${bookingCtx.data.name}"/></div>
        <div><label class="input-label">Email</label><input class="input" id="f_e" type="email" placeholder="you@email.com" value="${bookingCtx.data.email}"/></div>
      </div>
      <div class="form-row full"><div><label class="input-label">Phone</label><input class="input" id="f_p" type="tel" placeholder="+1 ..." value="${bookingCtx.data.phone}"/></div></div>`;
    back.style.visibility = 'visible';
    next.textContent = 'Review';
  } else {
    document.getElementById('stepName').textContent = 'Confirm';
    const ref = '#WP-' + Math.floor(10000 + Math.random()*89999);
    let total, lineRows;
    if(bookingCtx.mode==='cart'){
      total = cart.reduce((s,i)=>s+getItemPrice(i)*i.quantity,0);
      lineRows = cart.map(i=>`<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">${i.product.name.length>40?i.product.name.slice(0,40)+'…':i.product.name} × ${i.quantity}</span><b>$${(getItemPrice(i)*i.quantity).toFixed(2)}</b></div>`).join('');
    } else {
      total = (bookingCtx.product.price||0) * bookingCtx.data.travelers;
      lineRows = `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Tour</span><b>${bookingCtx.product.name}</b></div>`;
    }
    content.innerHTML = `
      <div style="background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:14px;padding:18px;display:flex;flex-direction:column;gap:10px">
        ${lineRows}
        <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Travelers</span><b>${bookingCtx.data.travelers}</b></div>
        <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Departure</span><b>${bookingCtx.data.date||'TBD'}</b></div>
        <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Lead traveler</span><b>${bookingCtx.data.name||'—'}</b></div>
        <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Reference</span><b>${ref}</b></div>
        <hr style="border:0;border-top:1px dashed var(--line);margin:6px 0"/>
        <div style="display:flex;justify-content:space-between;font-size:18px"><span>Total</span><b style="color:var(--accent);font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:.04em">$${total ? total.toFixed(2) : 'TBD'}</b></div>
      </div>
      <p style="color:var(--muted);font-size:12.5px;margin:0">Free cancellation up to 14 days before departure. We'll hold your spot — no payment until 30 days out.</p>`;
    back.style.visibility = 'visible';
    next.textContent = 'Confirm Booking';
  }
}

document.getElementById('backBtn').addEventListener('click',()=>{
  saveStepData();
  bookingCtx.step = Math.max(0, bookingCtx.step-1);
  renderStep();
});
document.getElementById('nextBtn').addEventListener('click',()=>{
  if(!saveStepData()) return;
  if(bookingCtx.step<2){ bookingCtx.step++; renderStep(); }
  else {
    closeModal();
    if(bookingCtx.mode==='cart'){
      cart = []; saveCart(); updateCartBadge(); renderCart();
      showToast('Booking requested — check your email!');
    } else {
      showToast('Booking confirmed — check your email!');
    }
  }
});

function saveStepData(){
  const s = bookingCtx.step;
  if(s===0){
    bookingCtx.data.travelers = parseInt(document.getElementById('f_t').value)||1;
    bookingCtx.data.date = document.getElementById('f_d').value;
    bookingCtx.data.requests = document.getElementById('f_r').value;
  } else if(s===1){
    const n = document.getElementById('f_n').value.trim();
    const e = document.getElementById('f_e').value.trim();
    if(!n||!e){ showToast('Please fill name & email'); return false; }
    bookingCtx.data.name = n;
    bookingCtx.data.email = e;
    bookingCtx.data.phone = document.getElementById('f_p').value;
  }
  return true;
}

function bookRipple(e){
  const b = e.currentTarget;
  const r = b.getBoundingClientRect();
  const span = document.createElement('span');
  span.className = 'ripple';
  const size = Math.max(r.width, r.height);
  span.style.width = span.style.height = size+'px';
  span.style.left = (e.clientX - r.left - size/2)+'px';
  span.style.top = (e.clientY - r.top - size/2)+'px';
  b.appendChild(span);
  setTimeout(()=>span.remove(), 650);
}

/* ============ CONNECT FORM ============ */
const _connectFormHTML = null;
let _connectFormSnapshot = null;
function submitConnect(){
  const fn = document.getElementById('cf_fn').value.trim();
  const em = document.getElementById('cf_em').value.trim();
  const msg = document.getElementById('cf_msg').value.trim();
  if(!fn||!em||!msg){ showToast('Please complete required fields'); return; }
  if(!_connectFormSnapshot) _connectFormSnapshot = document.getElementById('connectForm').innerHTML;
  document.getElementById('connectForm').innerHTML = `
    <div class="connect-success">
      <div style="width:64px;height:64px;border-radius:50%;background:rgba(52,211,153,.12);border:1px solid rgba(52,211,153,.3);color:var(--ok);display:grid;place-items:center;margin:0 auto">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg>
      </div>
      <h4>Message received!</h4>
      <p style="color:var(--muted)">We'll respond within 24 hours.</p>
      <a class="pdp-back" onclick="resetConnectForm()">Send Another →</a>
    </div>`;
}
function resetConnectForm(){
  if(_connectFormSnapshot) document.getElementById('connectForm').innerHTML = _connectFormSnapshot;
}

/* ============ NEWSLETTER ============ */
function subscribeNews(inputId){
  const i = document.getElementById(inputId);
  if(!i.value.includes('@')){ showToast('Enter a valid email'); return; }
  i.value = '';
  showToast('Subscribed to shore reports');
}

/* ============ TOAST ============ */
const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg){
  document.getElementById('toastMsg').textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toastEl.classList.remove('show'), 2400);
}

/* ============ REVEAL ============ */
let revealObserver;
function initReveal(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); }});
  }, { threshold:.12 });
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>revealObserver.observe(el));
}

/* ============ SECTION TRACKING (for home page nav state) ============ */
window.addEventListener('scroll',()=>{
  // Only on home page
  if(document.getElementById('page-home').style.display==='none') return;
  const y = window.scrollY + 200;
  // Don't override active state when on subpages
});

/* ============ INIT ============ */
window.addEventListener('load', ()=>{
  initAnnouncement();
  initMobileMenu();
  initHomeHero();
  initSearchFields();
  renderHomeDest();
  renderHomePackages('all');
  initHomeTabs();
  initShopHandlers();
  updateCartBadge();
  initReveal();
  // Route from hash
  const raw = (window.location.hash||'').replace('#','').split(':');
  const page = raw[0]||'home';
  const id = raw[1];
  if(page==='product' && id){ currentProduct = PRODUCTS.find(p=>p.id===parseInt(id)); }
  if(page==='article' && id){ currentArticle = ARTICLES.find(a=>a.id===id); }
  navigate(page,{id});
});
