export type ProjectType = {
	title: string;
	subtitle: string;
	description: string;
	imgUrl: string;
	pageUrl: string;
	githubUrl: string;
};

export const PROJECTS_ASSETS: ProjectType[] = [
	{
		title: 'CMS dla strony Salonu fryzjerskiego (REST API)',
		subtitle:
			'React.js | TypeScript | Sass/SCSS | Redux | Firebase | MongoDB Atlas/Mongoose | Axios',
		description:
			'CMS to jedna z trzech części projektu, na który składają się jeszcze frontend i backend salonu fryzjerskiego (dostępne na moim GitHubie). Projekt stworzyłem w celu ćwiczenia tworzenia architektury REST API przy użyciu React.js i TypeScript. Strona jest zaprojektowana przeze mnie, responsywna i wystylizowana w SCSS z użyciem metodologii BEM. Zawiera panel logowania oraz zestaw formularzy do edytowania treści i dodawania/usuwania fotografii na stronie salonu fryzjerskiego. Do obsługi stanu aplikacji wykorzystałem Redux. Fotografie przechowywane są w Firebase Storage, natomiast pozostałe treści w bazie MongoDB Atlas. Backend umieściłem na Heroku.com, korzystając z darmowego hostingu, dlatego pierwsze logowanie może twać dłużej (do 10 sekund). Wynika to ze specyfiki darmowego hostingu, nie jest wadą aplikacji.',
		imgUrl: 'hairsalon',
		pageUrl: 'https://grzegorzwirtek.github.io/fryzjer-cms/',
		githubUrl: 'https://github.com/GrzegorzWirtek/fryzjer-cms',
	},
	{
		title: 'Wyszukiwarka seriali',
		subtitle: 'React.js | Sass/SCSS | Axios',
		description:
			'Stronę stworzyłem w celu ćwiczenia umiejętności pracy z danymi zewnętrznymi oraz projektowania przejrzystego interfejsu użytkownika. Aplikacja krzysta z API serwisu tvmaze.com i pozwala na wyszukiwanie po tytule pozycji z bogatej bazy  seriali z całego świata. Użytkownik uzyskuje informację o sezonach, opisy odcinków, informacje o aktorach i obsadzie. Strona została napisana za pomocą React.js i zaprojektowana przeze mnie. Jest responsywna i ostylowana SCSS z użyciem metodologii BEM. Obsługa stanu w aplikacji odbywa się z użyciem React Context API.',
		imgUrl: 'tvseries',
		pageUrl: 'https://grzegorzwirtek.github.io/tv-series/',
		githubUrl: 'https://github.com/GrzegorzWirtek/tv-series',
	},
	{
		title: 'Sudoku z panelem logowania (REST API)',
		subtitle:
			'HTML | Sass/SCSS | JavaScript (OOP) | Node.js | Express | MongoDB Atlas/Mongoose',
		description:
			'Aplikacja do układania 12 plansz sudoku o różnym poziomie trudności. Zawiera panel pozwalający na założenie konta, logowanie się i zapisywania postępów w grze. Aplikację napisałem na własny użytek, próbując sił w tworzeniu logiki do złożónej łamigłówki, ćwicząc przy okazji programowanie obiektowe w JavaScript, oraz komunikację z backendem i bazą danych. Projekt zawiera zarówno część frontendową jak i backendową. Backend odpowiedzialny jest za komunikację z bazą danych MongoDB Atlas, gdzie przechowywane są dane logowania, oraz postępy gracza. Frontend napisany za pomocą JavaScript, z autorskim algorytmem sprawdzającym poprawność wypełniania pól przez gracza. Strona została zaprojektowana przeze mnie i ostylowana przy pomocy Sass/SCSS. Pierwsze wczytanie strony może trwać kilka sekund i nie jest wadą aplikacji, ale wynika ze specyfiki darmowego hostingu na Heroku.com, gdzie strona została przeze mnie umieszczona.',
		imgUrl: 'sudoku',
		pageUrl: 'https://sudoku-with-login.herokuapp.com/',
		githubUrl: 'https://github.com/GrzegorzWirtek/sudoku-login',
	},
	{
		title: 'Blog z panelem admina do dodawania postów (REST API)',
		subtitle: 'React.js | CSS | Redux',
		description:
			'Frontendowa część strony typu Blog. Wraz z bakcendem (projekt dostępny na moim GitHubie) projekt stanowi część historii mojej nauki tworzenia architektury REST API. Strona jest responsywna, zaprojektowana przeze mnie, oraz zawiera autorskie wpisy i fotografie dokumentujące jedno z moich hobby. Strona jest napisana w React.js, do obsługi stanu użyłem Reduxa, a style napisane zostały w czystym CSS. Projekt zawiera sekcję komentarzy, które można dodawać pod artykułami - są one wysyłane na backend (Node.js, Express) i zapisywane w bazie MongoDB Atlas. Aplikacja zawiera również panel admina, pozwalający na dodawanie i usuwanie wpisów i fotografii, przechowywanych również w MongoDB. Backend umieściłem na darmowym hostingu Heroku.com, przez co pierwsze wczytanie strony może trwać kilka sekund',
		imgUrl: 'blog',
		pageUrl: 'https://grzegorzwirtek.github.io/mern-blog-client/',
		githubUrl: 'https://github.com/GrzegorzWirtek/mern-blog-client',
	},
	{
		title: 'Strona do dzielenia wydatków',
		subtitle: 'React.js | TypeScript | Sass/SCSS',
		description:
			'Napisana na własny użytek, prosta aplikacja przechowująca zapisane informacje w Locale Storage. Pomocna jest w sytuacji, gdy dwie osoby spędzają czas, wspólnie poniesione koszty pokrywa czasem jedna, czasem druga osoba, a na koniec chcą podzielić się wydatkami po równo. Prosty algorytm przelicza wydane kwoty i wyświetla stan konta obu osób. Umieszam ją w portfolio, bo mimo swojej prostoty jest to bardzo wygodne i przydatne narzędzie. Aplikację napisałem w React.js, ćwicząc przy okazji TypeScript, oraz ostylowałem przy pomocy Sass/SCSS. Strona jest responsywna.',
		imgUrl: 'expenses',
		pageUrl: 'https://grzegorzwirtek.github.io/wydatki/',
		githubUrl: 'https://github.com/GrzegorzWirtek/wydatki',
	},
];
