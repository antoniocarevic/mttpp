# Metode i tehnike testiranja programske podrške
## Projektni zadatak - automatsko testiranje demo web shopa
U ovom projektnom zadatku testirane su funkcionalnosti demo web shopa [Luma – Magento eCommerce](https://magento.softwaretestingboard.com/). <br>
  
Korišteni alati: 
  - Node.js -> JavaScript runtime enviroment
  - TypeScript -> programski jezik koji je nadogradnja na JavaScript
  - Playwright -> testni okvir za automatsko testiranje web stranica
  - Visual Studio Code -> uređivać koda

Postavljanje zadatka  
Za početak, potrebno je preuzeti potrebne alate. Node.js moguće je preuzeti [ovdje](https://nodejs.org/en/download).  
Visual Studio Code je dostupan [ovdje](https://code.visualstudio.com/download).  
Nakon instaliranja i postavljanja VS code-a potrebno je instalirati Playwright ekstenziju. Tutorijal za to dostupan je [ovdje](https://playwright.dev/docs/getting-started-vscode). U novu mapu u kojoj smo instalirali Playwright ekstenziju, u mapu tests potrebno je dodati datoteku testovi.spec.ts koja se može preuzeti sa ovog repozitorija. U testing modu moguće je pokrenuti svaki test zasebno, te ako se označi u postavkama "Show browser" će se viditi kako se test izvodi prilikom pokretanja. Svi testovi su pokrenuti u Chrome web pregledniku, iako postoji mogućnost testiranja i u drugim preglednicima.  
### Testni slučajevi
1. Registracija novog korisnika
   - Pristupa se stranici preko linka koji odmah vodi na kreiranje novog računa. Unosi se ime, prezime, email adresa, lozinka i potvrda lozinke. Zatim se klikom na "Create an Account" gumb provjerava je li se pojavila poruka "Thank you for registering" kako bi se utvrdilo uspješno registriranje.
2. Promjena lozinke
   - Test ulazi na stranicu i logira postojećeg korisnika. Zatim ide na uređivanje korisničkog profila i odabire opciju promjene lozinke. Unosi se stara lozinka, zatim nova i potvrda nove lozinke. Pritiskom tipke "Save" se provjerava je li se pojavila poruka "You saved the account information" za potvrdu uspješno promjenjene lozinke.
3. Dodavanje produkta u košaricu
   - Pristupa se stranici te se provjerava je li korisnik ulogiran. Ako nije, logira se postojeći korisnik, odlazi se na stranicu sa produktima. Odabire se produkt kao i njegova veličina i boja te se produkt dodaje u košaricu. Kao potvrda uspješnosti dodavanja produkta izbacuje se poruka koja sadrži "You added".
4. Proces naplate
   -  Logira se postojeći korisnik i pristupa košarici. Ako se prvi puta obavlja proces naplate, popunjavaju se sva potrebna polja. Nakon prvog obavljanja web stranica čuva podatke o prijašnjoj uplati te je samo potrebno odabrati dobavljača. Klikom na gumb "Place Order" izvršava se naplata i završava kupnja.
5. Dodavanje na listu želja
   - Prvo se provjerava je li korisnik ulogiran, te ako nije se logira postojeći korisnik. Zatim se ide na stranicu sa produktima, odabire se jedan od ponuđenih produkata. Klikom na ikonicu srca produkt se dodaje na listu želja. Kako bi se potvrdila ispravnost testa provjerava se postoji li poruka koja sadrži "has been added to your Wish List".
