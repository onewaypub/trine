import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const coworkers = [
  { "id": 11, "name": "August Nice",        "project": "Schneckenrennen", "elevel": "e1", "ek": 600,  "vk": 601, "role": "developer",  "team": "ATeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "20.12.2018",  "dateofleaving": "",            "onboarded": false,  "offboarded": false,  "company": "Company1"},
  { "id": 12, "name": "Simon Narco",        "project": "Schneckenrennen", "elevel": "e1", "ek": 750,  "vk": 800, "role": "developer",  "team": "ATeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "20.12.2016",  "dateofleaving": "20.02.2017",  "onboarded": true,   "offboarded": true,   "company": "Company2"},
  { "id": 13, "name": "Bombo Bombasto",     "project": "Schneckenrennen", "elevel": "e1", "ek": 900,  "vk": 800, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "20.01.2016",  "dateofleaving": "20.04.2018",  "onboarded": true,   "offboarded": false,  "company": "Company2"},
  { "id": 14, "name": "Celina Celeritas",   "project": "Schneckenrennen", "elevel": "e1", "ek": 500,  "vk": 600, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "23.08.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "Comp3",    },
  { "id": 15, "name": "Franzi Magneta",     "project": "Schneckenrennen", "elevel": "e1", "ek": 300,  "vk": 450, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "12.03.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "Company2"},
  { "id": 16, "name": "Herbert RubberMan",  "project": "Schneckenrennen", "elevel": "e1", "ek": 1200, "vk": 800, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "06.04.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "",       },
  { "id": 17, "name": "Nicolaus Dynama",    "project": "Schneckenrennen", "elevel": "e1", "ek": 800,  "vk": 800, "role": "developer",  "team": "CTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "30.01.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "",       },
  { "id": 18, "name": "Detlef Dr IQ",       "project": "Schneckenrennen", "elevel": "e1", "ek": 799,  "vk": 800, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "22.03.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "Company1"},
  { "id": 19, "name": "Djego Magma",        "project": "Schneckenrennen", "elevel": "e1", "ek": 650,  "vk": 800, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "14.02.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "Company1"},
  { "id": 20, "name": "Anton Tornado",      "project": "Schneckenrennen", "elevel": "e1", "ek": 600,  "vk": 800, "role": "developer",  "team": "BTeam",  "dateofrequest": "20.10.2016",  "dateofjoining": "01.12.2018",  "dateofleaving": "",            "onboarded": true,   "offboarded": false,  "company": "Company1"}    
  ];
    return {coworkers};
  }
}
