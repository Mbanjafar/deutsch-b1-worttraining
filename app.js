const chapters = [
{ id: "b1", number: "1", title: "Alltag", subtitle: "everyday life: home, work, travel, health, food" }
];

const lessons = [
{ chapter: "b1", group: "b1-l1", groupTitle: "Wohnen", id: "b1-l1-s1", icon: "1", title: "Die Wohnung", subtitle: "Wohnen" },
  { chapter: "b1", group: "b1-l1", groupTitle: "Wohnen", id: "b1-l1-s2", icon: "2", title: "Räume", subtitle: "Wohnen" },
  { chapter: "b1", group: "b1-l1", groupTitle: "Wohnen", id: "b1-l1-s3", icon: "3", title: "Mieten", subtitle: "Wohnen" },
  { chapter: "b1", group: "b1-l1", groupTitle: "Wohnen", id: "b1-l1-s4", icon: "4", title: "Einrichtung", subtitle: "Wohnen" },
  { chapter: "b1", group: "b1-l1", groupTitle: "Wohnen", id: "b1-l1-s5", icon: "5", title: "Haushalt", subtitle: "Wohnen" },
  { chapter: "b1", group: "b1-l2", groupTitle: "Arbeit", id: "b1-l2-s1", icon: "1", title: "Der Beruf", subtitle: "Arbeit" },
  { chapter: "b1", group: "b1-l2", groupTitle: "Arbeit", id: "b1-l2-s2", icon: "2", title: "Im Team", subtitle: "Arbeit" },
  { chapter: "b1", group: "b1-l2", groupTitle: "Arbeit", id: "b1-l2-s3", icon: "3", title: "Stelle finden", subtitle: "Arbeit" },
  { chapter: "b1", group: "b1-l2", groupTitle: "Arbeit", id: "b1-l2-s4", icon: "4", title: "Geld und Vertrag", subtitle: "Arbeit" },
  { chapter: "b1", group: "b1-l2", groupTitle: "Arbeit", id: "b1-l2-s5", icon: "5", title: "Arbeitsalltag", subtitle: "Arbeit" },
  { chapter: "b1", group: "b1-l3", groupTitle: "Reisen", id: "b1-l3-s1", icon: "1", title: "Mit dem Zug", subtitle: "Reisen" },
  { chapter: "b1", group: "b1-l3", groupTitle: "Reisen", id: "b1-l3-s2", icon: "2", title: "Fliegen", subtitle: "Reisen" },
  { chapter: "b1", group: "b1-l3", groupTitle: "Reisen", id: "b1-l3-s3", icon: "3", title: "Unterwegs", subtitle: "Reisen" },
  { chapter: "b1", group: "b1-l3", groupTitle: "Reisen", id: "b1-l3-s4", icon: "4", title: "Mit dem Auto", subtitle: "Reisen" },
  { chapter: "b1", group: "b1-l3", groupTitle: "Reisen", id: "b1-l3-s5", icon: "5", title: "Ins Ausland", subtitle: "Reisen" },
  { chapter: "b1", group: "b1-l4", groupTitle: "Gesundheit", id: "b1-l4-s1", icon: "1", title: "Beim Arzt", subtitle: "Gesundheit" },
  { chapter: "b1", group: "b1-l4", groupTitle: "Gesundheit", id: "b1-l4-s2", icon: "2", title: "Krank sein", subtitle: "Gesundheit" },
  { chapter: "b1", group: "b1-l4", groupTitle: "Gesundheit", id: "b1-l4-s3", icon: "3", title: "Der Körper", subtitle: "Gesundheit" },
  { chapter: "b1", group: "b1-l4", groupTitle: "Gesundheit", id: "b1-l4-s4", icon: "4", title: "Körperteile", subtitle: "Gesundheit" },
  { chapter: "b1", group: "b1-l4", groupTitle: "Gesundheit", id: "b1-l4-s5", icon: "5", title: "Schmerz und Pflege", subtitle: "Gesundheit" },
  { chapter: "b1", group: "b1-l5", groupTitle: "Essen", id: "b1-l5-s1", icon: "1", title: "Lebensmittel", subtitle: "Essen" },
  { chapter: "b1", group: "b1-l5", groupTitle: "Essen", id: "b1-l5-s2", icon: "2", title: "Kochen", subtitle: "Essen" },
  { chapter: "b1", group: "b1-l5", groupTitle: "Essen", id: "b1-l5-s3", icon: "3", title: "Im Restaurant", subtitle: "Essen" },
  { chapter: "b1", group: "b1-l5", groupTitle: "Essen", id: "b1-l5-s4", icon: "4", title: "Einkaufen", subtitle: "Essen" },
  { chapter: "b1", group: "b1-l5", groupTitle: "Essen", id: "b1-l5-s5", icon: "5", title: "Hunger und Durst", subtitle: "Essen" },
];

const vocab = [
w("b1-l1-s1", "die Wohnung", "noun", "apartment; flat", "Wir suchen eine möblierte Wohnung, möglichst im Zentrum.", "die Wohnung, -en", "We are looking for a furnished apartment, as far as possible in the center.", {"level":"B1","gapTarget":"Wohnung"}),
  w("b1-l1-s1", "das Wohnzimmer", "noun", "living room", "Wir sitzen im Wohnzimmer und sehen fern.", "das Wohnzimmer, -", "We're sitting in the living room watching TV.", {"level":"B1","gapTarget":"Wohnzimmer"}),
  w("b1-l1-s1", "die Küche", "noun", "kitchen", "Ich suche eine Wohnung mit drei Zimmern, Küche und Bad.", "die Küche, -n", "I'm looking for an apartment with three rooms, kitchen and bathroom.", {"level":"B1","gapTarget":"Küche"}),
  w("b1-l1-s1", "der Balkon", "noun", "balcony", "Die Wohnung hat auch einen kleinen Balkon.", "der Balkon, -e", "The apartment also has a small balcony.", {"level":"B1","gapTarget":"Balkon"}),
  w("b1-l1-s2", "das Dach", "noun", "roof", "Wir müssen das Dach reparieren lassen.", "das Dach, ¨-er", "We need to get the roof fixed.", {"level":"B1","gapTarget":"Dach"}),
  w("b1-l1-s2", "der Keller", "noun", "cellar; basement", "Unser Keller ist nicht besonders groß.", "der Keller, -", "Our cellar is not very large.", {"level":"B1","gapTarget":"Keller"}),
  w("b1-l1-s2", "die Wand", "noun", "wall", "Ich stelle das Regal rechts an die Wand.", "die Wand, ¨-e", "I put the shelf right on the wall.", {"level":"B1","gapTarget":"Wand"}),
  w("b1-l1-s2", "der Boden", "noun", "floor; ground", "Die Bücher lagen alle auf dem Boden.", "der Boden, ¨-", "The books were all lying on the floor.", {"level":"B1","gapTarget":"Boden"}),
  w("b1-l1-s3", "mieten", "verb", "to rent", "Wir haben die Wohnung für drei Jahre gemietet.", "mieten, mietet, mietete, hat gemietet", "We rented the apartment for three years.", {"level":"B1","gapTarget":""}),
  w("b1-l1-s3", "der Mieter", "noun", "tenant", "Sie hat heute neue Mieter für die Wohnung gefunden.", "der Mieter, - die Mieterin, -nen", "She found new tenants for the apartment today.", {"level":"B1","gapTarget":"Mieter"}),
  w("b1-l1-s3", "der Vermieter", "noun", "landlord", "Unsere Vermieterin ist eine sehr nette, ältere Frau.", "der Vermieter, - die Vermieterin, -nen", "Our landlord is a very nice, elderly woman.", {"level":"B1","gapTarget":"Vermieter"}),
  w("b1-l1-s3", "der Umzug", "noun", "move; relocation", "Der Umzug ist nächste Woche.", "der Umzug, ¨-e", "The move is next week.", {"level":"B1","gapTarget":"Umzug"}),
  w("b1-l1-s4", "einrichten", "verb", "to furnish; to set up", "Ich habe meine Wohnung selbst eingerichtet.", "einrichten, richtet ein, richtete ein, hat eingerichtet", "I set up my apartment myself.", {"level":"B1","gapTarget":""}),
  w("b1-l1-s4", "die Einrichtung", "noun", "furnishings; furniture", "Deine Wohnung ist sehr gemütlich, die Einrichtung gefällt mir sehr gut.", "die Einrichtung, -en", "Your apartment is very cosy, I really like the furnishings.", {"level":"B1","gapTarget":"Einrichtung"}),
  w("b1-l1-s4", "das Möbel", "noun", "piece of furniture", "Wir haben uns neue Möbel gekauft.", "das Möbel, -", "We bought new furniture.", {"level":"B1","gapTarget":"Möbel"}),
  w("b1-l1-s4", "der Teppich", "noun", "carpet; rug", "Ich habe mir einen neuen Teppich gekauft.", "der Teppich, -e", "I bought a new carpet.", {"level":"B1","gapTarget":"Teppich"}),
  w("b1-l1-s5", "putzen", "verb", "to clean", "Ich muss heute noch die Wohnung putzen.", "putzen, putzt, putzte, hat geputzt", "I still have to clean the apartment today.", {"level":"B1","gapTarget":"putzen"}),
  w("b1-l1-s5", "sauber", "adj", "clean", "Bringen Sie mir bitte ein sauberes Glas!", "", "Bring me a clean glass, please!", {"level":"B1","gapTarget":"sauber"}),
  w("b1-l1-s5", "die Heizung", "noun", "heating", "Es ist kalt. Ist die Heizung kaputt?", "die Heizung, -en", "It's cold. Is the heating broken?", {"level":"B1","gapTarget":"Heizung"}),
  w("b1-l1-s5", "der Schlüssel", "noun", "key", "Ich kann meine Schlüssel nicht finden.", "der Schlüssel, -", "I can't find my keys.", {"level":"B1","gapTarget":"Schlüssel"}),
  w("b1-l2-s1", "der Beruf", "noun", "profession; occupation", "Was sind Sie von Beruf?", "der Beruf, -e", "What do you do for a living?", {"level":"B1","gapTarget":"Beruf"}),
  w("b1-l2-s1", "beruflich", "adj", "professional; work-related", "Was machen Sie beruflich?", "", "What do you do for a living?", {"level":"B1","gapTarget":"beruflich"}),
  w("b1-l2-s1", "die Firma", "noun", "company; firm", "Seit wann arbeiten Sie bei dieser Firma?", "die Firma, Firmen", "How long have you been working for this company?", {"level":"B1","gapTarget":"Firma"}),
  w("b1-l2-s1", "die Abteilung", "noun", "department", "Meine Freundin arbeitet in der Abteilung von Frau Kaufmann.", "die Abteilung, -en", "My friend works in the department of Frau Kaufmann.", {"level":"B1","gapTarget":"Abteilung"}),
  w("b1-l2-s2", "der Chef", "noun", "boss", "Das kann ich nicht allein entscheiden, da muss ich erst die Chefin fragen.", "der Chef, -s die Chefin, -nen", "I can't decide on my own, so I have to ask the boss.", {"level":"B1","gapTarget":"Chef"}),
  w("b1-l2-s2", "der Kollege", "noun", "colleague", "Ich habe guten Kontakt zu meinen Kollegen.", "der Kollege, -n die Kollegin, -nen", "I get on well with my colleagues.", {"level":"B1","gapTarget":"Kollege"}),
  w("b1-l2-s2", "der Mitarbeiter", "noun", "employee; co-worker", "Unsere Firma hat sieben Mitarbeiter.", "der Mitarbeiter, - die Mitarbeiterin, -nen", "Our company has seven employees.", {"level":"B1","gapTarget":"Mitarbeiter"}),
  w("b1-l2-s2", "der Angestellte", "noun", "employee", "Björn ist Angestellter in einem Reisebüro.", "der Angestellte, -n die Angestellte, -n", "Bjoern is an employee at a travel agency.", {"level":"B1","gapTarget":"Angestellte"}),
  w("b1-l2-s3", "die Arbeitsstelle", "noun", "job; position", "Meine Frau hat eine neue Arbeitsstelle gefunden.", "die Arbeitsstelle, -n", "My wife found a new job.", {"level":"B1","gapTarget":"Arbeitsstelle"}),
  w("b1-l2-s3", "das Praktikum", "noun", "internship", "Ich mache diesen Sommer drei Monate ein Praktikum bei einer Firma.", "das Praktikum, Praktika", "I am doing an internship at a company this summer.", {"level":"B1","gapTarget":"Praktikum"}),
  w("b1-l2-s3", "der Praktikant", "noun", "intern; trainee", "Bei dieser Firma habe ich zwei Jahre als Praktikantin gearbeitet.", "der Praktikant, -en die Praktikantin, -nen", "I worked at this company as an intern for two years.", {"level":"B1","gapTarget":"Praktikant"}),
  w("b1-l2-s3", "die Lehrstelle", "noun", "apprenticeship; training place", "Es sind noch viele Lehrstellen frei.", "die Lehrstelle, -n", "There are still many apprenticeships available.", {"level":"B1","gapTarget":"Lehrstelle"}),
  w("b1-l2-s4", "das Gehalt", "noun", "salary", "Ich bin mit meinem Gehalt zufrieden.", "das Gehalt, ¨-er", "I'm happy with my salary.", {"level":"B1","gapTarget":"Gehalt"}),
  w("b1-l2-s4", "der Lohn", "noun", "wage; pay", "Sie bekommen Ihren Lohn immer am Ende des Monats.", "der Lohn, ¨-e", "You always get your wages at the end of the month.", {"level":"B1","gapTarget":"Lohn"}),
  w("b1-l2-s4", "kündigen", "verb", "to quit; to give notice", "Ich war mit meiner Stelle nicht zufrieden und habe gekündigt.", "kündigen, kündigt, kündigte, hat gekündigt", "I was not happy in my job, so I quit.", {"level":"B1","gapTarget":""}),
  w("b1-l2-s4", "die Kündigung", "noun", "notice; dismissal", "Ich habe die Kündigung bekommen. Jetzt bin ich arbeitslos.", "die Kündigung, -en", "I received my notice. Now I am unemployed.", {"level":"B1","gapTarget":"Kündigung"}),
  w("b1-l2-s5", "das Büro", "noun", "office", "Unser Büro bleibt samstags geschlossen.", "das Büro, -s", "Our office is closed on Saturdays.", {"level":"B1","gapTarget":"Büro"}),
  w("b1-l2-s5", "die Besprechung", "noun", "meeting", "Tut mir leid, Herr Schmidt ist noch in einer Besprechung.", "die Besprechung, -en", "I'm sorry, Mr. Schmidt is still in a meeting.", {"level":"B1","gapTarget":"Besprechung"}),
  w("b1-l2-s5", "besprechen", "verb", "to discuss", "Wir müssen noch genau besprechen, wann wir losfahren und was wir mitnehmen.", "besprechen, bespricht, besprach, hat besprochen", "We need to discuss exactly when we leave and what we take.", {"level":"B1","gapTarget":"besprechen"}),
  w("b1-l2-s5", "arbeitslos", "adj", "unemployed", "Wie lange sind Sie schon arbeitslos?", "", "How long have you been unemployed?", {"level":"B1","gapTarget":"arbeitslos"}),
  w("b1-l3-s1", "die Bahn", "noun", "railway; train", "Ich komme mit der Bahn.", "die Bahn, -en", "I am coming by train.", {"level":"B1","gapTarget":"Bahn"}),
  w("b1-l3-s1", "der Bahnhof", "noun", "railway station", "Ich bringe Sie zum Bahnhof.", "der Bahnhof, ¨-e", "I'll take you to the station.", {"level":"B1","gapTarget":"Bahnhof"}),
  w("b1-l3-s1", "der Bahnsteig", "noun", "platform", "Auf Hauptbahnhöfen gibt es meist viele Bahnsteige.", "der Bahnsteig, -e (D, A) → CH: Perron", "Main stations usually have many platforms.", {"level":"B1","gapTarget":"Bahnsteig"}),
  w("b1-l3-s1", "die Fahrkarte", "noun", "ticket", "Fahrkarten bekommt man am Automaten.", "die Fahrkarte, -n → CH: Billet", "You can get tickets from the machine.", {"level":"B1","gapTarget":"Fahrkarte"}),
  w("b1-l3-s2", "der Flug", "noun", "flight", "Ich habe den Flug für Sie gebucht.", "der Flug, ¨-e", "I booked the flight for you.", {"level":"B1","gapTarget":"Flug"}),
  w("b1-l3-s2", "das Flugzeug", "noun", "aeroplane; plane", "Das Flugzeug ist gerade gelandet.", "das Flugzeug, -e", "The plane just landed.", {"level":"B1","gapTarget":"Flugzeug"}),
  w("b1-l3-s2", "der Flughafen", "noun", "airport", "Der Flughafen liegt 30 km außerhalb der Stadt.", "der Flughafen, ¨-", "The airport is 30 km outside the city.", {"level":"B1","gapTarget":"Flughafen"}),
  w("b1-l3-s2", "das Gepäck", "noun", "luggage; baggage", "Ich habe mein Gepäck am Bahnhof gelassen.", "", "I left my luggage at the station.", {"level":"B1","gapTarget":"Gepäck"}),
  w("b1-l3-s3", "die Abfahrt", "noun", "departure", "Es bleiben uns noch zwanzig Minuten bis zur Abfahrt.", "die Abfahrt, -en", "We still have twenty minutes until departure.", {"level":"B1","gapTarget":"Abfahrt"}),
  w("b1-l3-s3", "die Ankunft", "noun", "arrival", "Die Abfahrt ist um 0.55 Uhr, die Ankunft um 8.07 Uhr.", "", "Departure is at 00.55, arrival at 08.07.", {"level":"B1","gapTarget":"Ankunft"}),
  w("b1-l3-s3", "die Haltestelle", "noun", "stop (bus or tram)", "An der nächsten Haltestelle müssen wir aussteigen.", "die Haltestelle, -n", "We have to get off at the next stop.", {"level":"B1","gapTarget":"Haltestelle"}),
  w("b1-l3-s3", "der Aufenthalt", "noun", "stay; stopover", "Der Zug hat in München nur 20 Minuten Aufenthalt.", "der Aufenthalt, -e", "The train stops in Munich for only 20 minutes.", {"level":"B1","gapTarget":"Aufenthalt"}),
  w("b1-l3-s4", "das Auto", "noun", "car", "Mario fährt mit dem Auto zur Arbeit.", "das Auto, -s", "Mario drives to work by car.", {"level":"B1","gapTarget":"Auto"}),
  w("b1-l3-s4", "die Autobahn", "noun", "motorway; highway", "Das Dorf liegt direkt an der Autobahn.", "die Autobahn, -en", "The village is located directly on the highway.", {"level":"B1","gapTarget":"Autobahn"}),
  w("b1-l3-s4", "die Ausfahrt", "noun", "exit (from a road or driveway)", "Hier ist eine Ausfahrt, da dürfen Sie nicht parken.", "die Ausfahrt, -en", "There is a driveway exit here, you are not allowed to park.", {"level":"B1","gapTarget":"Ausfahrt"}),
  w("b1-l3-s4", "die Einfahrt", "noun", "entrance; driveway", "Da parkt wieder jemand vor unserer Einfahrt.", "die Einfahrt, -en", "Someone is parking in front of our driveway again.", {"level":"B1","gapTarget":"Einfahrt"}),
  w("b1-l3-s5", "das Ausland", "noun", "abroad; foreign countries", "Wir fahren im Urlaub meistens ins Aus- land.", "", "We usually go abroad on holiday.", {"level":"B1","gapTarget":""}),
  w("b1-l3-s5", "die Grenze", "noun", "border", "An der Grenze musst du deinen Ausweis zeigen.", "die Grenze, -n", "At the border you have to show your ID.", {"level":"B1","gapTarget":"Grenze"}),
  w("b1-l3-s5", "der Ausflug", "noun", "excursion; day trip", "Am Wochenende machen wir mit Fre- unden einen Ausflug nach Heidelberg.", "der Ausflug, ¨-e", "On the weekend we take a trip to Heidelberg.", {"level":"B1","gapTarget":"Ausflug"}),
  w("b1-l3-s5", "das Fahrzeug", "noun", "vehicle", "Wem gehört das Fahrzeug?", "das Fahrzeug, -e", "Who does the vehicle belong to?", {"level":"B1","gapTarget":"Fahrzeug"}),
  w("b1-l4-s1", "der Arzt", "noun", "doctor", "Ich muss heute zum Arzt.", "der Arzt, ¨-e die Ärztin, -nen", "I have to go to the doctor today.", {"level":"B1","gapTarget":"Arzt"}),
  w("b1-l4-s1", "das Krankenhaus", "noun", "hospital", "Er hat sich verletzt und musste ins Krankenhaus.", "das Krankenhaus, ¨-er", "He injured himself and had to go to hospital.", {"level":"B1","gapTarget":"Krankenhaus"}),
  w("b1-l4-s1", "die Apotheke", "noun", "pharmacy; chemist", "Ist hier in der Nähe eine Apotheke?", "die Apotheke, -n", "Is there a pharmacy nearby?", {"level":"B1","gapTarget":"Apotheke"}),
  w("b1-l4-s1", "die Krankenkasse", "noun", "health insurance fund", "Die Krankenkasse bezahlt die Medikamente.", "die Krankenkasse, -n", "The health insurance pays for the medicine.", {"level":"B1","gapTarget":"Krankenkasse"}),
  w("b1-l4-s2", "krank", "adj", "ill; sick", "Ich war zwei Wochen krank.", "", "I was sick for two weeks.", {"level":"B1","gapTarget":"krank"}),
  w("b1-l4-s2", "gesund", "adj", "healthy; well", "Ich hatte Grippe. Jetzt bin ich wieder gesund.", "", "I had the flu. Now I am well again.", {"level":"B1","gapTarget":"gesund"}),
  w("b1-l4-s2", "das Fieber", "noun", "fever", "Plötzlich habe ich hohes Fieber bekommen.", "", "Suddenly I got a high fever.", {"level":"B1","gapTarget":"Fieber"}),
  w("b1-l4-s2", "die Erkältung", "noun", "cold (illness)", "Du hast eine schlimme Erkältung!", "die Erkältung, -en", "You have a bad cold!", {"level":"B1","gapTarget":"Erkältung"}),
  w("b1-l4-s3", "der Körper", "noun", "body", "Der Arzt sagt, ich muss etwas für meinen Körper tun, z. B. schwimmen oder Fahrrad fahren.", "der Körper, -", "The doctor says I have to do something for my body, for example swimming or cycling.", {"level":"B1","gapTarget":"Körper"}),
  w("b1-l4-s3", "der Kopf", "noun", "head", "Ich habe Kopfschmerzen.", "der Kopf, ¨-e", "I have a headache.", {"level":"B1","gapTarget":"Kopf"}),
  w("b1-l4-s3", "das Herz", "noun", "heart", "Ich bin ganz nervös. Mir klopft das Herz.", "das Herz, -en", "I am very nervous. My heart is pounding.", {"level":"B1","gapTarget":"Herz"}),
  w("b1-l4-s3", "die Haut", "noun", "skin", "Haben Sie eine Creme für trockene Haut?", "", "Do you have a cream for dry skin?", {"level":"B1","gapTarget":"Haut"}),
  w("b1-l4-s4", "das Auge", "noun", "eye", "Meine beiden Kinder haben blaue Augen.", "das Auge, -n", "My two children have blue eyes.", {"level":"B1","gapTarget":"Auge"}),
  w("b1-l4-s4", "das Ohr", "noun", "ear", "Ich habe Ohrenschmerzen.", "das Ohr, -en", "I have an earache.", {"level":"B1","gapTarget":"Ohr"}),
  w("b1-l4-s4", "der Zahn", "noun", "tooth", "Der Zahn tut mir schon lange weh.", "der Zahn, ¨-e", "This tooth has been hurting for a long time.", {"level":"B1","gapTarget":"Zahn"}),
  w("b1-l4-s4", "das Bein", "noun", "leg", "Andreas hat sich das Bein gebrochen.", "das Bein, -e", "Andreas broke his leg.", {"level":"B1","gapTarget":"Bein"}),
  w("b1-l4-s5", "der Schmerz", "noun", "pain", "Haben Sie Schmerzen?", "der Schmerz, -en", "Are you in pain?", {"level":"B1","gapTarget":"Schmerz"}),
  w("b1-l4-s5", "die Verletzung", "noun", "injury", "Keine Angst. Die Verletzung ist nicht so schlimm.", "die Verletzung, -en", "Do not worry. The injury is not that bad.", {"level":"B1","gapTarget":"Verletzung"}),
  w("b1-l4-s5", "die Krankenschwester", "noun", "nurse", "Meine Cousine möchte gern Kranken- schwester werden.", "die Krankenschwester, -n", "My cousin wants to become a nurse.", {"level":"B1","gapTarget":""}),
  w("b1-l4-s5", "müde", "adj", "tired", "Ich bin müde. Ich gehe schlafen.", "", "I'm tired. I'm going to sleep.", {"level":"B1","gapTarget":"müde"}),
  w("b1-l5-s1", "das Brot", "noun", "bread", "Brot kaufe ich immer beim Bäcker, nicht im Supermarkt.", "das Brot, -e", "I always buy bread at the bakery, not at the supermarket.", {"level":"B1","gapTarget":"Brot"}),
  w("b1-l5-s1", "das Fleisch", "noun", "meat", "Fleisch mag ich nicht.", "", "I do not like meat.", {"level":"B1","gapTarget":"Fleisch"}),
  w("b1-l5-s1", "das Gemüse", "noun", "vegetables", "Wir kaufen das Gemüse direkt beim Bauern.", "", "We buy our vegetables straight from the farmer.", {"level":"B1","gapTarget":"Gemüse"}),
  w("b1-l5-s1", "der Käse", "noun", "cheese", "Möchtest du Käse aufs Brot?", "", "Would you like some cheese on your bread?", {"level":"B1","gapTarget":"Käse"}),
  w("b1-l5-s2", "kochen", "verb", "to cook", "Ich koche gern.", "kochen, kocht, kochte, hat gekocht", "I like cooking.", {"level":"B1","gapTarget":""}),
  w("b1-l5-s2", "backen", "verb", "to bake", "Wenn du kommst, backe ich einen Kuchen.", "backen, bäckt/backt, backte, hat gebacken", "If you come, I will bake a cake.", {"level":"B1","gapTarget":""}),
  w("b1-l5-s2", "das Gewürz", "noun", "spice", "Von den scharfen Gewürzen bekommt man Durst.", "das Gewürz, -e", "Hot spices make you thirsty.", {"level":"B1","gapTarget":"Gewürz"}),
  w("b1-l5-s2", "das Salz", "noun", "salt", "Gib mir bitte mal das Salz!", "das Salz, -e", "Pass me the salt, please!", {"level":"B1","gapTarget":"Salz"}),
  w("b1-l5-s3", "das Restaurant", "noun", "restaurant", "Wir essen heute im Restaurant.", "das Restaurant, -s", "We are eating at a restaurant today.", {"level":"B1","gapTarget":"Restaurant"}),
  w("b1-l5-s3", "die Speisekarte", "noun", "menu", "Bitte, die Speisekarte.", "die Speisekarte, -n", "The menu, please.", {"level":"B1","gapTarget":"Speisekarte"}),
  w("b1-l5-s3", "die Nachspeise", "noun", "dessert", "Nach dem Essen gab es noch eine leckere Nachspeise", "die Nachspeise, -n (D, A) → Dessert nächst-", "After the meal there was also a delicious dessert.", {"level":"B1","gapTarget":"Nachspeise"}),
  w("b1-l5-s3", "das Trinkgeld", "noun", "tip", "Ich habe dem Kellner zwei Euro Trinkgeld gegeben.", "das Trinkgeld, -er", "I gave the waiter a two euro tip.", {"level":"B1","gapTarget":"Trinkgeld"}),
  w("b1-l5-s4", "einkaufen", "verb", "to shop; to buy groceries", "Wir gehen einmal pro Woche einkaufen.", "einkaufen, kauft ein, kaufte ein, hat eingekauft", "We go shopping once a week.", {"level":"B1","gapTarget":"einkaufen"}),
  w("b1-l5-s4", "der Supermarkt", "noun", "supermarket", "Donnerstags gehe ich immer in den Supermarkt.", "der Supermarkt, ¨-e", "On Thursdays I always go to the supermarket.", {"level":"B1","gapTarget":""}),
  w("b1-l5-s4", "der Markt", "noun", "market", "Ich gehe heute auf den Markt.", "der Markt, ¨-e", "I am going to the market today.", {"level":"B1","gapTarget":"Markt"}),
  w("b1-l5-s4", "die Kasse", "noun", "checkout; till", "Zahlen Sie bitte an der Kasse.", "die Kasse, -n", "Please pay at the checkout.", {"level":"B1","gapTarget":"Kasse"}),
  w("b1-l5-s5", "der Hunger", "noun", "hunger", "Möchtest du Suppe? – Nein danke, ich habe keinen Hunger.", "", "Do you want soup? – No thanks, I'm not hungry.", {"level":"B1","gapTarget":"Hunger"}),
  w("b1-l5-s5", "der Durst", "noun", "thirst", "Ich hole Ihnen etwas zu trinken. Sie haben sicher Durst.", "", "I'll get you something to drink. You must be thirsty.", {"level":"B1","gapTarget":"Durst"}),
  w("b1-l5-s5", "durstig", "adj", "thirsty", "Du bist sicher durstig. Was möchtest du trinken?", "", "You must be thirsty. What do you want to drink?", {"level":"B1","gapTarget":"durstig"}),
  w("b1-l5-s5", "satt", "adj", "full (not hungry)", "Möchten Sie noch etwas? – Nein danke, ich bin satt.", "", "Do you want anything else? – No thanks, I'm tired.", {"level":"B1","gapTarget":"satt"})
];

// Optional hand written overrides, keyed by term.
// exampleTranslations supplies an English gloss when an entry has no exampleEn.
// curatedExamples appends extra example sentences beyond the source one.
// Both are empty: every current entry carries its own Goethe sentence and translation.
const exampleTranslations = {};

const curatedExamples = {};

/* ============================================================
   Deutsch B1 Vokabeln, engine
   (dataset above: chapters, lessons, vocab, exampleTranslations, curatedExamples)
   ============================================================ */

/* ---------- vocab factory helpers (used by dataset above, hoisted) ---------- */
function w(lesson, term, type, translation, example, form, exampleEn = "", meta = {}) {
  const lessonMeta = lessons.find((entry) => entry.id === lesson);
  return {
    id: `${lesson}-${term.toLowerCase().replace(/[^a-zäöüß0-9]+/gi, "-")}`,
    chapter: lessonMeta?.chapter || "k5",
    lesson,
    term,
    type,
    translation,
    example,
    form,
    exampleEn,
    // surface form the source marked as the target word, used to place the cloze gap
    gapTarget: meta.gapTarget || "",
    level: meta.level || "B1",
    priority: meta.priority || "core"
  };
}
function h(lesson, term, type, translation, example, form, exampleEn, level = "B1") {
  return w(lesson, term, type, translation, example, form, exampleEn, { priority: "focus", level });
}

/* ============================================================
   State
   ============================================================ */
// pilot branch uses its own key so pilot progress never mixes with real progress
const STATE_KEY = "b1-course-v1";
const defaultState = {
  xp: 0,
  goal: 20,
  sound: true,
  heartsMode: true,
  items: {},                       // id -> { seen, correct, wrong, mastery, due }
  lessons: {},                     // lessonId -> { crown, sessions }
  streak: { count: 0, lastDay: "" },
  daily: { day: "", xp: 0 },
  speech: { auto: true, rate: 0.85, voiceURI: "" }
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)) || {};
    return {
      ...defaultState,
      ...saved,
      items: saved.items || {},
      lessons: saved.lessons || {},
      streak: { ...defaultState.streak, ...(saved.streak || {}) },
      daily: { ...defaultState.daily, ...(saved.daily || {}) },
      speech: { ...defaultState.speech, ...(saved.speech || {}) }
    };
  } catch {
    return JSON.parse(JSON.stringify(defaultState));
  }
}
function saveState() { localStorage.setItem(STATE_KEY, JSON.stringify(state)); }

function itemState(id) {
  if (!state.items[id]) state.items[id] = { seen: 0, correct: 0, wrong: 0, mastery: 0, due: 0 };
  return state.items[id];
}
function lessonState(id) {
  if (!state.lessons[id]) state.lessons[id] = { crown: 0, sessions: 0 };
  return state.lessons[id];
}

let state = loadState();

/* runtime */
let currentChapter = "b1";
let germanVoices = [];
let bankFilter = "all";
let session = null;   // active session or null

/* ============================================================
   DOM references
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const els = {
  body: document.body,
  hud: $("#hud"),
  streakCount: $("#streakCount"),
  goalArc: $("#goalArc"),
  goalText: $("#goalText"),
  hudGoal: $("#hudGoal"),
  heartCount: $("#heartCount"),
  hudHearts: $("#hudHearts"),
  openSettings: $("#openSettings"),
  home: $("#home"),
  chapterTabs: $("#chapterTabs"),
  heroCrest: $("#heroCrest"),
  heroNumber: $("#heroNumber"),
  heroTitle: $("#heroTitle"),
  heroSummary: $("#heroSummary"),
  heroCrownCount: $("#heroCrownCount"),
  path: $("#path"),
  session: $("#session"),
  quitSession: $("#quitSession"),
  sbarFill: $("#sbarFill"),
  sessionHearts: $("#sessionHearts"),
  stage: $("#stage"),
  feedbackSheet: $("#feedbackSheet"),
  primaryBtn: $("#primaryBtn"),
  bank: $("#bank"),
  bankMeta: $("#bankMeta"),
  searchInput: $("#searchInput"),
  bankChips: $("#bankChips"),
  wordList: $("#wordList"),
  bottomNav: $("#bottomNav"),
  settingsModal: $("#settingsModal"),
  profileStats: $("#profileStats"),
  goalOptions: $("#goalOptions"),
  soundToggle: $("#soundToggle"),
  autoSpeak: $("#autoSpeak"),
  speechRate: $("#speechRate"),
  voiceSelect: $("#voiceSelect"),
  voiceStatus: $("#voiceStatus"),
  heartsToggle: $("#heartsToggle"),
  resetProgress: $("#resetProgress"),
  confetti: $("#confetti")
};

/* ============================================================
   Small utilities
   ============================================================ */
function escapeHtml(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function escapeAttr(v) { return escapeHtml(v).replace(/'/g, "&#39;"); }
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function normalize(v) {
  return String(v).toLowerCase()
    .replace(/[.,;:!?()"'„“”]/g, "")
    .replace(/\s+/g, " ").trim();
}
function stripArticle(term) {
  return term.replace(/^(der|die|das|eine|einen|einem|einer|ein)\s+/i, "").trim();
}
function firstVerb(term) {
  return term.split(" ").find((p) => /en$|eln$|ern$/.test(p)) || stripArticle(term);
}
function makeGap(sentence, term, preferred = "") {
  // preferred comes from the source markup and is tried first, it is more reliable than guessing
  const derived = [term, stripArticle(term), firstVerb(term)].filter(Boolean).sort((a, b) => b.length - a.length);
  const cands = [preferred, ...derived].filter(Boolean);
  for (const c of cands) {
    const esc = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const next = sentence.replace(new RegExp(esc, "i"), '<span class="gap">_____</span>');
    if (next !== sentence) return next;
  }
  return null;
}
function cleanSpeechText(text) {
  return String(text).replace(/\(.+?\)/g, "").replace(/\s+/g, " ").trim();
}
function pad2(n) { return String(n).padStart(2, "0"); }
function dayStr(d) { return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
function todayStr() { return dayStr(new Date()); }
function yesterdayStr() { const d = new Date(); d.setDate(d.getDate() - 1); return dayStr(d); }

/* ============================================================
   Dataset helpers
   ============================================================ */
function chapterMeta(id = currentChapter) { return chapters.find((c) => c.id === id) || chapters[0]; }
function chapterWords(id = currentChapter) { return vocab.filter((v) => v.chapter === id); }
function chapterLessons(id = currentChapter) { return lessons.filter((l) => l.chapter === id); }
function lessonWords(lessonId) { return vocab.filter((v) => v.lesson === lessonId); }

function learningExamples(item) {
  const base = [{
    de: item.example,
    en: item.exampleEn || exampleTranslations[item.term] || `Uses “${item.translation}” in context.`,
    gap: item.gapTarget || ""
  }];
  return base.concat(curatedExamples[item.term] || []);
}
function stableIndex(value, modulo) {
  let total = 0;
  for (let i = 0; i < value.length; i += 1) total += value.charCodeAt(i);
  return modulo ? total % modulo : 0;
}
function choosePracticeExample(item) {
  const ex = learningExamples(item);
  return ex[stableIndex(`${item.id}-${itemState(item.id).seen}`, ex.length)] || ex[0];
}
function makeOptions(item) {
  const pool = shuffle(vocab.filter((o) => o.id !== item.id && o.lesson === item.lesson)).slice(0, 3).map((o) => o.translation);
  while (pool.length < 3) {
    const c = vocab[Math.floor(Math.random() * vocab.length)].translation;
    if (c !== item.translation && !pool.includes(c)) pool.push(c);
  }
  return shuffle([item.translation, ...pool.slice(0, 3)]);
}
function makeTermOptions(item) {
  const pool = shuffle(vocab.filter((o) => o.id !== item.id && o.lesson === item.lesson)).slice(0, 3).map((o) => o.term);
  while (pool.length < 3) {
    const c = vocab[Math.floor(Math.random() * vocab.length)].term;
    if (c !== item.term && !pool.includes(c)) pool.push(c);
  }
  return shuffle([item.term, ...pool.slice(0, 3)]);
}

/* ============================================================
   Progress helpers
   ============================================================ */
function isLearned(item) { return itemState(item.id).seen > 0; }
function speechAvailable() { return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window; }

function ensureDaily() {
  const t = todayStr();
  if (state.daily.day !== t) { state.daily = { day: t, xp: 0 }; saveState(); }
}
function addXp(n) {
  ensureDaily();
  state.xp += n;
  state.daily.xp += n;
  saveState();
  updateHud();
}
function registerStreak() {
  const t = todayStr();
  if (state.streak.lastDay === t) return;
  state.streak.count = state.streak.lastDay === yesterdayStr() ? state.streak.count + 1 : 1;
  state.streak.lastDay = t;
  saveState();
}
function levelFor(xp) { return Math.floor(xp / 120) + 1; }

function recordAnswer(item, correct) {
  const s = itemState(item.id);
  s.seen += 1;
  if (correct) {
    s.correct += 1;
    s.mastery = Math.min(5, s.mastery + 1);
    s.due = Date.now() + reviewInterval(item, s.mastery);
  } else {
    s.wrong += 1;
    s.mastery = Math.max(0, s.mastery - 1);
    s.due = Date.now() + (item.priority === "focus" ? 8000 : 20000);
  }
  saveState();
}
function reviewInterval(item, mastery) {
  const steps = [45000, 120000, 300000, 900000, 2400000, 6000000];
  return steps[Math.min(mastery, steps.length - 1)];
}

/* ============================================================
   Speech
   ============================================================ */
function initSpeech() {
  els.autoSpeak.checked = Boolean(state.speech.auto);
  els.soundToggle.checked = Boolean(state.sound);
  els.heartsToggle.checked = Boolean(state.heartsMode);
  els.speechRate.value = String(state.speech.rate);
  if (!speechAvailable()) {
    els.voiceStatus.textContent = "Speech is not available in this browser.";
    els.autoSpeak.disabled = true; els.speechRate.disabled = true; els.voiceSelect.disabled = true;
    return;
  }
  populateVoices();
  window.speechSynthesis.onvoiceschanged = populateVoices;
}
function populateVoices() {
  const voices = window.speechSynthesis.getVoices();
  germanVoices = voices.filter((v) => v.lang.toLowerCase().startsWith("de"));
  const current = state.speech.voiceURI;
  els.voiceSelect.innerHTML = '<option value="">Best available</option>';
  germanVoices.forEach((v) => {
    const o = document.createElement("option");
    o.value = v.voiceURI; o.textContent = `${v.name} (${v.lang})`;
    els.voiceSelect.appendChild(o);
  });
  if (germanVoices.some((v) => v.voiceURI === current)) els.voiceSelect.value = current;
  else { state.speech.voiceURI = ""; }
  els.voiceStatus.textContent = germanVoices.length
    ? `${germanVoices.length} German voice${germanVoices.length === 1 ? "" : "s"} available.`
    : "No German voice found. The browser will use its closest voice.";
}
function selectedVoice() {
  return germanVoices.find((v) => v.voiceURI === state.speech.voiceURI)
    || germanVoices.find((v) => v.lang.toLowerCase() === "de-de")
    || germanVoices[0] || null;
}
function speak(text) {
  if (!text || !speechAvailable()) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(cleanSpeechText(text));
  u.lang = "de-DE";
  u.rate = Number(state.speech.rate) || 0.85;
  u.voice = selectedVoice();
  window.speechSynthesis.speak(u);
}

/* ============================================================
   Sound effects (Web Audio, no assets)
   ============================================================ */
let actx = null;
function audio() {
  if (!state.sound) return null;
  try { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
  if (actx.state === "suspended") actx.resume();
  return actx;
}
function tone(freq, start, dur, vol = 0.18, type = "sine") {
  const ctx = audio(); if (!ctx) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type; osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(vol, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.02);
}
function sndCorrect() { tone(587.33, 0, 0.12); tone(880, 0.08, 0.18); }
function sndWrong() { tone(196, 0, 0.22, 0.16, "sawtooth"); tone(155.56, 0.06, 0.26, 0.14, "sawtooth"); }
function sndFanfare() { [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.11, 0.32, 0.16, "triangle")); }

/* ============================================================
   View switching
   ============================================================ */
function setView(view) {
  if (view !== "session" && session) session = null;
  els.body.dataset.view = view;
  els.hud.hidden = view === "session";
  els.bottomNav.hidden = view === "session";
  els.home.hidden = view !== "home";
  els.bank.hidden = view !== "bank";
  els.session.hidden = view !== "session";
  els.bottomNav.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.nav === (view === "bank" ? "bank" : "home"));
  });
  window.scrollTo(0, 0);
}

/* ============================================================
   HUD + Home
   ============================================================ */
function updateHud() {
  ensureDaily();
  els.streakCount.textContent = state.streak.count;
  const pct = Math.max(0, Math.min(1, state.goal ? state.daily.xp / state.goal : 1));
  const circ = 2 * Math.PI * 15.5;
  els.goalArc.style.strokeDashoffset = String(circ * (1 - pct));
  els.goalText.textContent = `${state.daily.xp}/${state.goal}`;
  els.heartCount.textContent = state.heartsMode ? "5" : "∞";
  els.hudHearts.classList.toggle("spent", !state.heartsMode);
}

function renderChapterTabs() {
  els.chapterTabs.innerHTML = "";
  chapters.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "chapter-tab" + (c.id === currentChapter ? " active" : "");
    btn.type = "button";
    btn.innerHTML = `<small>Kap.</small><b>${c.number}</b>`;
    btn.addEventListener("click", () => { currentChapter = c.id; renderHome(); });
    els.chapterTabs.appendChild(btn);
  });
}

function renderHome() {
  renderChapterTabs();
  const c = chapterMeta();
  const cls = chapterLessons();
  els.heroCrest.textContent = c.number;
  els.heroNumber.textContent = c.number;
  els.heroTitle.textContent = c.title;
  els.heroSummary.textContent = c.subtitle;
  const crownTotal = cls.reduce((sum, l) => sum + lessonState(l.id).crown, 0);
  els.heroCrownCount.textContent = crownTotal;

  els.path.innerHTML = "";
  const firstUnfinished = cls.findIndex((l) => lessonState(l.id).crown < 5);
  let lastGroup = null;
  cls.forEach((lesson, i) => {
    // a lesson holds several sub-lessons, print its heading when the group changes
    if (lesson.group && lesson.group !== lastGroup) {
      lastGroup = lesson.group;
      const groupWords = vocab.filter((v) => {
        const l = lessons.find((x) => x.id === v.lesson);
        return l && l.group === lesson.group;
      });
      const groupDone = groupWords.filter(isLearned).length;
      const head = document.createElement("div");
      head.className = "lesson-head";
      head.innerHTML = `<span class="lh-title">${escapeHtml(lesson.groupTitle || "")}</span>
        <span class="lh-count">${groupDone}/${groupWords.length}</span>`;
      els.path.appendChild(head);
    }
    const words = lessonWords(lesson.id);
    const ls = lessonState(lesson.id);
    const learned = words.filter(isLearned).length;
    const learnedPct = words.length ? Math.round((learned / words.length) * 100) : 0;
    const done = ls.crown >= 5;
    const started = ls.crown > 0 || learned > 0;
    const isCurrent = i === firstUnfinished;

    const row = document.createElement("div");
    row.className = "path-row" + (isCurrent ? " current" : "");
    row.style.transform = `translateX(${Math.round(Math.sin(i * 0.9) * 62)}px)`;

    const bubble = isCurrent
      ? `<div class="start-bubble">${started ? "Continue" : "Start"}</div>` : "";
    const crownBadge = ls.crown > 0
      ? `<span class="node-crown"><span>👑</span>${ls.crown}</span>` : "";

    row.innerHTML = `
      ${bubble}
      <button class="node ${done ? "done" : started ? "started" : ""}" type="button" aria-label="${escapeAttr(lesson.title)}">
        <span class="node-ring" style="--p:${done ? 100 : learnedPct}"></span>
        <span class="node-face">${lesson.icon || "•"}</span>
        ${crownBadge}
      </button>
      <div class="node-label">${escapeHtml(lesson.title)}</div>
      <div class="node-sub">${done ? "Mastered · " : ""}${learned}/${words.length} words</div>`;
    row.querySelector(".node").addEventListener("click", () => startLessonSession(lesson.id));
    els.path.appendChild(row);
  });

  // Chapter review node
  const learnedInChapter = chapterWords().filter(isLearned).length;
  const reviewRow = document.createElement("div");
  reviewRow.className = "path-row";
  reviewRow.style.transform = "translateX(0)";
  reviewRow.innerHTML = `
    <button class="node review-node" type="button" aria-label="Mixed review">
      <span class="node-face">🏋️</span>
    </button>
    <div class="node-label">Mixed review</div>
    <div class="node-sub">${learnedInChapter ? "Refresh weak words" : "Learn some words first"}</div>`;
  reviewRow.querySelector(".node").addEventListener("click", () => startPracticeSession(currentChapter));
  els.path.appendChild(reviewRow);

  updateHud();
}

/* ============================================================
   Question building
   ============================================================ */
function pickModes(item, crown, count) {
  const noun = item.type === "noun";
  const canListen = speechAvailable();
  let bag;
  if (crown <= 0) bag = ["meaning", "reverse", noun ? "article" : "meaning"];
  else if (crown === 1) bag = ["meaning", "reverse", "typing", noun ? "article" : "cloze", "cloze"];
  else if (crown <= 3) bag = ["typing", "cloze", "reverse", noun ? "article" : "typing", canListen ? "listen" : "meaning"];
  else bag = ["typing", "cloze", canListen ? "listen" : "typing", "typing", noun ? "article" : "cloze"];
  const picked = shuffle(bag);
  const out = [];
  for (const m of picked) { if (!out.includes(m)) out.push(m); if (out.length >= count) break; }
  while (out.length < count) out.push(picked[out.length % picked.length]);
  return out.slice(0, count);
}

function buildQuestion(item, mode) {
  if (mode === "article" && item.type === "noun") {
    const article = item.term.split(" ")[0];
    if (["der", "die", "das"].includes(article.toLowerCase())) {
      return {
        item, mode, kind: "choice",
        title: "Which article?", sub: item.type,
        promptHtml: `<div class="prompt-bubble center">${escapeHtml(stripArticle(item.term))}</div>`,
        speak: item.term,
        answer: article, options: ["der", "die", "das"]
      };
    }
    mode = "meaning";
  }
  if (mode === "typing") {
    return {
      item, mode, kind: "input",
      title: "Write it in German", sub: item.type,
      promptHtml: `<div class="prompt-bubble center">${escapeHtml(item.translation)}</div>`,
      speak: null,
      answer: item.term, accepts: [item.term, stripArticle(item.term)]
    };
  }
  if (mode === "cloze") {
    const ex = choosePracticeExample(item);
    const gap = makeGap(ex.de, item.term, ex.gap);
    if (!gap) return buildQuestion(item, "typing");
    return {
      item, mode, kind: "input",
      title: "Fill the gap", sub: ex.en,
      promptHtml: `<div class="prompt-bubble prompt-cloze">${gap}</div>`,
      speak: null,
      answer: ex.gap || item.term,
      accepts: [ex.gap, item.term, stripArticle(item.term), firstVerb(item.term)].filter(Boolean),
      example: ex
    };
  }
  if (mode === "listen" && speechAvailable()) {
    return {
      item, mode, kind: "choice",
      title: "What did you hear?", sub: "Tap the meaning",
      promptHtml: `<div class="prompt-box"><button class="prompt-speaker big" type="button" data-speak="${escapeAttr(item.term)}">🔊</button><div class="prompt-hint">Listen and choose the meaning</div></div>`,
      speak: item.term, autospeak: true,
      answer: item.translation, options: makeOptions(item)
    };
  }
  if (mode === "reverse") {
    return {
      item, mode, kind: "choice",
      title: "Choose the German word", sub: "",
      promptHtml: `<div class="prompt-bubble center">${escapeHtml(item.translation)}</div>`,
      speak: null,
      answer: item.term, options: makeTermOptions(item)
    };
  }
  // default: meaning
  return {
    item, mode: "meaning", kind: "choice",
    title: "Choose the meaning", sub: item.form || item.type,
    promptHtml: `<div class="prompt-box"><button class="prompt-speaker" type="button" data-speak="${escapeAttr(item.term)}">🔊</button><div class="prompt-bubble">${escapeHtml(item.term)}</div></div>`,
    speak: item.term,
    answer: item.translation, options: makeOptions(item)
  };
}

function isCorrect(answer, q) {
  if (answer == null || answer === "") return false;
  if (q.kind === "choice") return answer === q.answer;
  const n = normalize(answer);
  return q.accepts.some((a) => normalize(a) === n);
}

/* ============================================================
   Session engine
   ============================================================ */
function learningOrder(a, b) {
  const pa = a.priority === "focus" ? 0 : 1;
  const pb = b.priority === "focus" ? 0 : 1;
  const sa = itemState(a.id), sb = itemState(b.id);
  return (pa - pb) || (sa.mastery - sb.mastery) || (sa.seen - sb.seen);
}

function startLessonSession(lessonId) {
  const lesson = lessons.find((l) => l.id === lessonId);
  const words = [...lessonWords(lessonId)].sort(learningOrder);
  const crown = lessonState(lessonId).crown;
  const queue = [];
  let slot = 0;
  const MAX_NEW = 8;
  let introduced = 0;

  words.forEach((item) => {
    const fresh = !isLearned(item);
    if (fresh && introduced < MAX_NEW) {
      introduced += 1;
      queue.push({ type: "teach", item, slot: slot++ });
      pickModes(item, 0, 2).forEach((mode) => queue.push({ type: "q", item, mode, slot: slot++ }));
    } else if (!fresh) {
      pickModes(item, crown, crown >= 2 ? 2 : 1).forEach((mode) => queue.push({ type: "q", item, mode, slot: slot++ }));
    }
  });

  // If nothing new and nothing seen (shouldn't happen), still teach first words
  if (!queue.length && words.length) {
    words.slice(0, MAX_NEW).forEach((item) => {
      queue.push({ type: "teach", item, slot: slot++ });
      pickModes(item, 0, 2).forEach((mode) => queue.push({ type: "q", item, mode, slot: slot++ }));
    });
  }

  // Mixed review tail over the words that appeared
  const appeared = [...new Set(queue.map((s) => s.item))];
  const tail = shuffle(appeared).map((item) => ({ type: "q", item, mode: pickModes(item, Math.max(1, crown), 1)[0], slot: slot++ }));
  queue.push(...tail);

  launchSession({ kind: "lesson", lessonId, chapterId: lesson.chapter, title: lesson.title, crown, queue });
}

function startPracticeSession(chapterId) {
  const learned = chapterWords(chapterId).filter(isLearned);
  if (learned.length < 1) {
    // nothing to practice, gently redirect
    setView("home");
    return;
  }
  const ordered = [...learned].sort((a, b) => (itemState(a.id).due - itemState(b.id).due) || (itemState(a.id).mastery - itemState(b.id).mastery));
  const pool = ordered.slice(0, 16);
  let slot = 0;
  const queue = shuffle(pool).map((item) => ({
    type: "q", item, mode: pickModes(item, Math.max(2, itemState(item.id).mastery), 1)[0], slot: slot++
  }));
  launchSession({ kind: "practice", chapterId, title: "Mixed review", queue });
}

function launchSession(base) {
  const total = base.queue.length;
  session = {
    ...base,
    pos: 0,
    hearts: 5,
    heartsMode: state.heartsMode,
    totalSlots: total,
    passed: new Set(),
    slotFails: {},
    correct: 0,
    answered: 0,
    startedNew: base.queue.filter((s) => s.type === "teach").length,
    selected: null,
    awaiting: false,
    lastCorrect: null,
    xpEarned: 0
  };
  setView("session");
  renderStep();
}

function updateSessionBar() {
  const pct = session.totalSlots ? (session.passed.size / session.totalSlots) * 100 : 0;
  els.sbarFill.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  els.sessionHearts.hidden = !session.heartsMode;
  els.sessionHearts.querySelector("strong").textContent = session.hearts;
}

function renderStep() {
  session.selected = null;
  session.awaiting = false;
  hideFeedback();
  els.primaryBtn.className = "btn-primary";
  if (session.pos >= session.queue.length) { finishSession(); return; }
  const step = session.queue[session.pos];
  updateSessionBar();

  if (step.type === "teach") { renderTeach(step); return; }
  session.currentQ = buildQuestion(step.item, step.mode);
  renderQuestion(session.currentQ);
}

function renderTeach(step) {
  const item = step.item;
  const examples = learningExamples(item).slice(0, 2);
  const focus = item.priority === "focus";
  els.primaryBtn.textContent = "Continue";
  els.primaryBtn.disabled = false;
  els.stage.innerHTML = `
    <div class="teach">
      <span class="teach-badge ${focus ? "focus" : ""}">${focus ? "Focus word" : "New word"} · ${escapeHtml(item.level)}</span>
      <div class="teach-term">${escapeHtml(item.term)}</div>
      <div class="teach-trans">${escapeHtml(item.translation)}</div>
      ${item.form ? `<div class="teach-form">${escapeHtml(item.type)} · ${escapeHtml(item.form)}</div>` : `<div class="teach-form">${escapeHtml(item.type)}</div>`}
      <button class="teach-speak" type="button" data-speak="${escapeAttr(item.term)}">🔊 Listen</button>
      <div class="teach-examples">
        ${examples.map((ex) => `
          <div class="ex-card" data-speak="${escapeAttr(ex.de)}">
            <span class="ex-play">🔊</span>
            <div class="ex-de">${escapeHtml(ex.de)}</div>
            <div class="ex-en">${escapeHtml(ex.en)}</div>
          </div>`).join("")}
      </div>
    </div>`;
  if (state.speech.auto) window.setTimeout(() => speak(item.term), 180);
}

function renderQuestion(q) {
  els.primaryBtn.textContent = "Check";
  els.primaryBtn.disabled = q.kind !== "input" ? true : false;
  const optionsHtml = q.kind === "choice"
    ? `<div class="options">${q.options.map((opt, i) => `
        <button class="option" type="button" data-opt="${escapeAttr(opt)}">
          <span class="kbd">${i + 1}</span><span>${escapeHtml(opt)}</span>
        </button>`).join("")}</div>`
    : `<input class="answer-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in German">
       <div class="input-hint"></div>`;

  els.stage.innerHTML = `
    <div><div class="q-title">${escapeHtml(q.title)}</div>${q.sub ? `<div class="q-sub">${escapeHtml(q.sub)}</div>` : ""}</div>
    ${q.promptHtml}
    ${optionsHtml}`;

  if (q.kind === "choice") {
    els.stage.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", () => {
        session.selected = btn.dataset.opt;
        els.stage.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
        btn.classList.add("selected");
        els.primaryBtn.disabled = false;
      });
    });
  } else {
    const input = els.stage.querySelector(".answer-input");
    input.addEventListener("input", () => { els.primaryBtn.disabled = input.value.trim() === ""; });
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); onPrimary(); } });
    setTimeout(() => input.focus(), 60);
  }
  if (q.autospeak && state.speech.auto) window.setTimeout(() => speak(q.speak), 220);
}

function onPrimary() {
  if (!session) return;
  const step = session.queue[session.pos];

  // teach step
  if (step && step.type === "teach") {
    recordSeen(step.item);
    session.passed.add(step.slot);
    session.pos += 1;
    renderStep();
    return;
  }

  // continue after a checked answer
  if (session.awaiting) {
    hideFeedback();
    if (session.heartsMode && session.hearts <= 0) { renderFail(); return; }
    session.pos += 1;
    renderStep();
    return;
  }

  // grade the answer
  const q = session.currentQ;
  let answer = session.selected;
  if (q.kind === "input") answer = els.stage.querySelector(".answer-input").value;
  if (q.kind === "choice" && answer == null) return;

  const correct = isCorrect(answer, q);
  recordAnswer(q.item, correct);
  session.answered += 1;
  session.awaiting = true;

  if (correct) {
    session.correct += 1;
    session.passed.add(step.slot);
    addXp(2);
    session.xpEarned += 2;
    sndCorrect();
  } else {
    session.slotFails[step.slot] = (session.slotFails[step.slot] || 0) + 1;
    if (session.heartsMode) session.hearts = Math.max(0, session.hearts - 1);
    // requeue this slot (unless it has failed too many times)
    if (session.slotFails[step.slot] < 3) {
      session.queue.push({ type: "q", item: q.item, mode: q.mode, slot: step.slot, retry: true });
    } else {
      session.passed.add(step.slot); // give it to them to avoid a lock
    }
    sndWrong();
  }

  lockChoices(q, answer, correct);
  showFeedback(correct, q, answer);
  updateSessionBar();
}

function recordSeen(item) {
  const s = itemState(item.id);
  s.seen = Math.max(1, s.seen);
  s.mastery = Math.max(s.mastery, 1);
  if (!s.due) s.due = Date.now();
  saveState();
}

function lockChoices(q, answer, correct) {
  if (q.kind === "choice") {
    els.stage.querySelectorAll(".option").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.opt === q.answer) btn.classList.add("correct");
      else if (btn.dataset.opt === answer && !correct) btn.classList.add("wrong");
    });
  } else {
    const input = els.stage.querySelector(".answer-input");
    if (input) { input.disabled = true; input.classList.add(correct ? "correct" : "wrong"); }
  }
}

function showFeedback(correct, q, answer) {
  const item = q.item;
  const ex = q.example || learningExamples(item)[0];
  els.feedbackSheet.className = `feedback-sheet ${correct ? "correct" : "wrong"}`;
  els.feedbackSheet.hidden = false;
  els.feedbackSheet.removeAttribute("aria-hidden");
  const heartsOut = session.heartsMode && session.hearts <= 0;
  const headText = correct ? "Nice!" : heartsOut ? "Out of hearts" : "Correct answer:";
  const detail = correct
    ? `<b>${escapeHtml(item.term)}</b> · ${escapeHtml(item.translation)}`
    : `<b>${escapeHtml(q.answer)}</b><div class="fb-ex" style="margin-top:2px">${escapeHtml(item.term)} · ${escapeHtml(item.translation)}</div>`;
  els.feedbackSheet.innerHTML = `
    <div class="fb-inner">
      <div class="fb-head"><span class="fb-mark">${correct ? "✓" : "✕"}</span>${headText}</div>
      <div class="fb-body">${detail}</div>
      <div class="fb-ex">${escapeHtml(ex.de)}<span class="en"> · ${escapeHtml(ex.en)}</span></div>
      <button class="fb-speak" type="button" data-speak="${escapeAttr(item.term)}">🔊 Listen</button>
    </div>`;
  void els.feedbackSheet.offsetHeight; // flush layout so the slide-up transition plays
  els.feedbackSheet.classList.add("show");

  els.primaryBtn.textContent = heartsOut ? "See results" : "Continue";
  els.primaryBtn.className = `btn-primary ${correct ? "go-correct" : "go-wrong"}`;
  els.primaryBtn.disabled = false;
  if (!correct) { els.stage.classList.remove("shake"); void els.stage.offsetWidth; els.stage.classList.add("shake"); }
  els.primaryBtn.focus();
}

function hideFeedback() {
  els.feedbackSheet.className = "feedback-sheet";
  els.feedbackSheet.innerHTML = "";
  els.feedbackSheet.hidden = true;
  els.feedbackSheet.setAttribute("aria-hidden", "true");
}

/* ============================================================
   Session finish / fail
   ============================================================ */
function finishSession() {
  const accuracy = session.answered ? Math.round((session.correct / session.answered) * 100) : 100;
  let bonus = 10 + (session.heartsMode ? session.hearts * 2 : 4);
  if (accuracy === 100) bonus += 5;
  addXp(bonus);
  session.xpEarned += bonus;

  const goalWasMet = state.daily.xp >= state.goal;
  registerStreak();

  let crownedUp = false;
  if (session.kind === "lesson") {
    const ls = lessonState(session.lessonId);
    if (ls.crown < 5) { ls.crown += 1; crownedUp = true; }
    ls.sessions += 1;
    saveState();
  }

  sndFanfare();
  burstConfetti();
  renderResult({ accuracy, crownedUp, goalWasMet });
}

function renderResult({ accuracy, crownedUp, goalWasMet }) {
  const crown = session.kind === "lesson" ? lessonState(session.lessonId).crown : 0;
  const crownLine = session.kind === "lesson"
    ? (crownedUp
        ? `<div class="crown-pop">👑 Crown ${crown}/5 earned!</div>`
        : `<div class="crown-pop">👑 Crown ${crown}/5 · already maxed</div>`)
    : "";
  els.stage.innerHTML = `
    <div class="result">
      <div class="result-emoji">${crownedUp ? "👑" : "🎉"}</div>
      <h2>${session.kind === "lesson" ? "Lesson complete!" : "Review done!"}</h2>
      <p class="result-sub">${escapeHtml(session.title)}</p>
      ${crownLine}
      <div class="result-stats">
        <div class="result-stat yellow"><div class="rs-label">Total XP</div><div class="rs-value">+${session.xpEarned}</div></div>
        <div class="result-stat blue"><div class="rs-label">Accuracy</div><div class="rs-value">${accuracy}%</div></div>
        <div class="result-stat red"><div class="rs-label">Streak</div><div class="rs-value">🔥${state.streak.count}</div></div>
      </div>
      ${goalWasMet ? `<div class="crown-pop" style="color:var(--orange)">⚡ Daily goal reached!</div>` : `<div class="result-sub">${state.goal - state.daily.xp} XP to today's goal</div>`}
    </div>`;
  hideFeedback();
  els.primaryBtn.className = "btn-primary";
  els.primaryBtn.textContent = "Continue";
  els.primaryBtn.disabled = false;
  els.primaryBtn.focus();
  session.done = true;
}

function renderFail() {
  const weak = [...new Set(session.queue.filter((s) => session.slotFails[s.slot]).map((s) => s.item))].slice(0, 6);
  els.stage.innerHTML = `
    <div class="result">
      <div class="result-emoji">💔</div>
      <h2>Out of hearts</h2>
      <p class="result-sub">You made it ${Math.round((session.passed.size / session.totalSlots) * 100)}% of the way. These words need another look:</p>
      <div class="result-stats">
        ${weak.map((it) => `<div class="result-stat red"><div class="rs-value" style="font-size:1rem">${escapeHtml(it.term)}</div></div>`).join("") || `<p class="result-sub">Give it another go!</p>`}
      </div>
    </div>`;
  hideFeedback();
  els.primaryBtn.className = "btn-primary go-wrong";
  els.primaryBtn.textContent = "Try again";
  els.primaryBtn.disabled = false;
  session.failed = true;
}

function endSessionButton() {
  // primary button pressed on a result/fail screen
  if (session.failed) {
    const lessonId = session.lessonId, chapterId = session.chapterId, kind = session.kind;
    if (kind === "lesson") startLessonSession(lessonId);
    else startPracticeSession(chapterId);
    return;
  }
  setView("home");
  renderHome();
}

/* ============================================================
   Confetti
   ============================================================ */
function burstConfetti() {
  const canvas = els.confetti;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);
  const W = window.innerWidth, H = window.innerHeight;
  const colors = ["#58cc02", "#1cb0f6", "#ffc800", "#ce82ff", "#ff4b4b", "#ff9600"];
  const parts = Array.from({ length: 130 }, () => ({
    x: W / 2 + (Math.random() - 0.5) * 120,
    y: H * 0.32,
    vx: (Math.random() - 0.5) * 9,
    vy: Math.random() * -11 - 4,
    s: 6 + Math.random() * 8,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    c: colors[Math.floor(Math.random() * colors.length)]
  }));
  let frame = 0;
  function tick() {
    ctx.clearRect(0, 0, W, H);
    frame += 1;
    parts.forEach((p) => {
      p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (frame < 150) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, W, H);
  }
  tick();
}

/* ============================================================
   Words / Bank
   ============================================================ */
function crownGlyphs(mastery) {
  const filled = Math.min(5, mastery);
  return `<span class="crn ${filled ? "" : "empty"}">👑</span><span>${filled}/5</span>`;
}
function renderBank() {
  const c = chapterMeta();
  els.bankMeta.textContent = `Kapitel ${c.number} · ${c.title}`;
  renderBankChips();
  const query = normalize(els.searchInput.value || "");
  let items = chapterWords();
  if (bankFilter === "learning") items = items.filter((i) => isLearned(i) && itemState(i.id).mastery < 5);
  else if (bankFilter === "mastered") items = items.filter((i) => itemState(i.id).mastery >= 5);
  else if (bankFilter === "focus") items = items.filter((i) => i.priority === "focus");
  else if (bankFilter === "new") items = items.filter((i) => !isLearned(i));
  items = items.filter((i) => normalize(`${i.term} ${i.translation} ${i.form} ${i.example}`).includes(query));

  els.wordList.innerHTML = "";
  if (!items.length) {
    els.wordList.innerHTML = `<p class="bank-meta" style="padding:20px 4px">No words match.</p>`;
    return;
  }
  const frag = document.createDocumentFragment();
  items.forEach((item) => {
    const s = itemState(item.id);
    const ex = learningExamples(item)[0];
    const div = document.createElement("div");
    div.className = "word-item";
    const lessonTitle = lessons.find((l) => l.id === item.lesson)?.title || item.lesson;
    div.innerHTML = `
      <div class="word-crowns">${crownGlyphs(s.mastery)}</div>
      <div class="word-main">
        <h3>${escapeHtml(item.term)}</h3>
        <div class="w-meta">${escapeHtml([lessonTitle, item.priority === "focus" ? "focus" : "", item.type, item.form].filter(Boolean).join(" · "))}</div>
        <div class="w-trans">${escapeHtml(item.translation)}</div>
        <div class="w-ex">${escapeHtml(ex.de)}<span class="en">${escapeHtml(ex.en)}</span></div>
      </div>
      <button class="speak" type="button" data-speak="${escapeAttr(item.term)}">🔊</button>`;
    frag.appendChild(div);
  });
  els.wordList.appendChild(frag);
}
function renderBankChips() {
  const chips = [
    { id: "all", label: "All" },
    { id: "new", label: "New" },
    { id: "learning", label: "Learning" },
    { id: "mastered", label: "Mastered" },
    { id: "focus", label: "Focus" }
  ];
  els.bankChips.innerHTML = "";
  chips.forEach((chip) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip" + (bankFilter === chip.id ? " active" : "");
    btn.type = "button";
    btn.textContent = chip.label;
    btn.addEventListener("click", () => { bankFilter = chip.id; renderBank(); });
    els.bankChips.appendChild(btn);
  });
}

/* ============================================================
   Settings / Profile
   ============================================================ */
function openSettings() {
  renderProfileStats();
  renderGoalOptions();
  els.settingsModal.hidden = false;
}
function closeSettings() { els.settingsModal.hidden = true; }
function renderProfileStats() {
  const learned = vocab.filter(isLearned).length;
  const mastered = vocab.filter((v) => itemState(v.id).mastery >= 5).length;
  const crowns = Object.values(state.lessons).reduce((s, l) => s + (l.crown || 0), 0);
  const tiles = [
    { ico: "⭐", val: state.xp, lbl: "Total XP" },
    { ico: "🏅", val: `Lv ${levelFor(state.xp)}`, lbl: "Level" },
    { ico: "🔥", val: state.streak.count, lbl: "Day streak" },
    { ico: "👑", val: crowns, lbl: "Crowns" },
    { ico: "📚", val: `${learned}/${vocab.length}`, lbl: "Words seen" },
    { ico: "✅", val: mastered, lbl: "Mastered" }
  ];
  els.profileStats.innerHTML = tiles.map((t) => `
    <div class="stat-tile"><span class="st-ico">${t.ico}</span><div><div class="st-val">${t.val}</div><div class="st-lbl">${t.lbl}</div></div></div>`).join("");
}
function renderGoalOptions() {
  const goals = [10, 20, 30, 50];
  els.goalOptions.innerHTML = "";
  goals.forEach((g) => {
    const btn = document.createElement("button");
    btn.className = "pill" + (state.goal === g ? " active" : "");
    btn.type = "button";
    btn.textContent = `${g} XP`;
    btn.addEventListener("click", () => { state.goal = g; saveState(); renderGoalOptions(); updateHud(); });
    els.goalOptions.appendChild(btn);
  });
}

/* ============================================================
   Events
   ============================================================ */
els.primaryBtn.addEventListener("click", () => {
  if (!session) return;
  if (session.done || session.failed) { endSessionButton(); return; }
  onPrimary();
});

els.quitSession.addEventListener("click", () => {
  if (session && !session.done && !session.failed && session.answered > 0) {
    if (!confirm("Quit this session? Progress on answered words is saved.")) return;
  }
  setView("home");
  renderHome();
});

els.bottomNav.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-btn");
  if (!btn) return;
  const nav = btn.dataset.nav;
  if (nav === "home") { setView("home"); renderHome(); }
  else if (nav === "bank") { setView("bank"); renderBank(); }
  else if (nav === "practice") { startPracticeSession(currentChapter); }
  else if (nav === "settings") { openSettings(); }
});

els.openSettings.addEventListener("click", openSettings);
els.hudGoal.addEventListener("click", openSettings);
els.hudHearts.addEventListener("click", openSettings);
els.settingsModal.querySelectorAll("[data-close-settings]").forEach((el) => el.addEventListener("click", closeSettings));

els.searchInput.addEventListener("input", renderBank);

els.soundToggle.addEventListener("change", () => { state.sound = els.soundToggle.checked; if (state.sound) audio(); saveState(); });
els.autoSpeak.addEventListener("change", () => { state.speech.auto = els.autoSpeak.checked; saveState(); });
els.heartsToggle.addEventListener("change", () => { state.heartsMode = els.heartsToggle.checked; saveState(); updateHud(); });
els.speechRate.addEventListener("change", () => { state.speech.rate = Number(els.speechRate.value); saveState(); });
els.voiceSelect.addEventListener("change", () => { state.speech.voiceURI = els.voiceSelect.value; saveState(); });

els.resetProgress.addEventListener("click", () => {
  if (!confirm("Reset all progress, crowns and streaks?")) return;
  state = JSON.parse(JSON.stringify(defaultState));
  state.speech = loadState().speech; // keep chosen voice
  saveState();
  closeSettings();
  setView("home");
  renderHome();
});

// speak buttons (event delegation)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-speak]");
  if (!btn) return;
  audio(); // unlock audio on gesture
  speak(btn.dataset.speak);
});

// keyboard shortcuts inside a session
document.addEventListener("keydown", (e) => {
  if (els.body.dataset.view !== "session" || !session) return;
  if (e.key === "Enter") {
    if (!els.primaryBtn.disabled) { e.preventDefault(); els.primaryBtn.click(); }
    return;
  }
  if (session.awaiting || session.done || session.failed) return;
  const q = session.currentQ;
  if (q && q.kind === "choice" && /^[1-9]$/.test(e.key)) {
    const idx = Number(e.key) - 1;
    const opts = els.stage.querySelectorAll(".option");
    if (opts[idx]) { e.preventDefault(); opts[idx].click(); }
  }
});

/* ============================================================
   Init
   ============================================================ */
ensureDaily();
initSpeech();
setView("home");
renderHome();
renderBankChips();
