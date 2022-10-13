export type ProjectType = {
	title: string;
	subtitle: string;
	description: string;
	imgUrl: string;
	pageUrl: string;
	githubUrl: string;
};

export const PROJECT_ASSETS: ProjectType[] = [
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
			'Stronę stworzyłem w celu ćwiczenia umiejętności pracy z danymi zewnętrznymi oraz projektowania przejrzystego interfejsu użytkownika. Aplikacja krzysta z API serwisu tvmazecom i pozwala na wyszukiwanie po tytule pozycji z bogatej bazy  seriali z całego świata. Użytkownik uzyskuje informację o sezonach, opisy odcinków, informacje o aktorach i obsadzie. Strona została napisana za pomocą React.js i zaprojektowana przeze mnie. Jest responsywna i ostylowana SCSS z użyciem metodologii BEM. Obsługa stanu w aplikacji odbywa się z użyciem React Context API',
		imgUrl: 'tvseries',
		pageUrl: 'https://grzegorzwirtek.github.io/tv-series/',
		githubUrl: 'https://github.com/GrzegorzWirtek/tv-series',
	},
	{
		title: 'Sudoku z panelem logowania',
		subtitle:
			'HTML | Sass/SCSS | JavaScript (OOP) | Node.js | Express | MongoDB Atlas/Mongoose',
		description:
			'Aplikacja do układania 12 plansz sudoku o różnym poziomie trudności. Zawiera panel pozwalający na założenie konta, logowanie się i zapisywania postępów w grze. Aplikację napisałem na własny użytek, próbując sił w tworzeniu logiki do złożónej łamigłówki, ćwicząc przy okazji programowanie obiektowe w JavaScript, oraz komunikację z backendem i bazą danych. Projekt zawiera zarówno część frontendową jak i backendową. Backend odpowiedzialny jest za komunikację z bazą danych MongoDB Atlas, gdzie przechowywane są dane logowania, oraz postępy gracza. Frontend napisany za pomocą JavaScript, z autorskim algorytmem sprawdzającym poprawność wypełniania pól przez gracza. Strona została zaprojektowana przeze mnie i ostylowana przy pomocy Sass/SCSS. Pierwsze wczytanie strony może trwać kilka sekund i nie jest wadą aplikacji, ale wynika ze specyfiki darmowego hostingu na Heroku.com, gdzie strona została przeze mnie umieszczona. Interfejs użytkownika zaprojektowany jest na smartfona, choć może być obsługiwany z poziomu monitora komputera',
		imgUrl: 'sudoku',
		pageUrl: 'https://sudoku-with-login.herokuapp.com/',
		githubUrl: 'https://github.com/GrzegorzWirtek/sudoku-login',
	},
	{
		title: 'Tytuł 4',
		subtitle: 'Subtytuł 2',
		description: 'Opis 2',
		imgUrl: 'blog',
		pageUrl: 'https://google.com',
		githubUrl: 'https://github.com/GrzegorzWirtek/fryzjer-cms',
	},
	{
		title: 'Tytuł 5',
		subtitle: 'Subtytuł 2',
		description: 'Opis 2',
		imgUrl: 'expenses',
		pageUrl: 'https://google.com',
		githubUrl: 'https://github.com/GrzegorzWirtek/fryzjer-cms',
	},
];
