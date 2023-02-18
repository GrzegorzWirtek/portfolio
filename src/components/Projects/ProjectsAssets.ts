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
		title:
			'Sklep muzyczny, umożliwiający dodawanie i usuwanie produktów z poziomu admina (REST API)',
		subtitle:
			'React.js | TypeScript | Sass/SCSS | Redux-Toolkit | MongoDB Atlas/Mongoose | Axios',
		description:
			'Witrynę stworzyłem ćwicząc zastosowanie Redux-Toolkit oraz projektowanie związanej z nim architektury plików. Aplikacja, przy użyciu REST API, komunikuje się z prostym serwerem napisanym w Node.js/Express.js. Dane produktów, zdjęcia konwertowane na format base64 i dane logowania przechowywane są bazie MognoBD Atlas. Administrator posiadający dane logowania może dodawać i usuwać w sklepie produkty wraz ze zdjęciami. Produkty dodawane przez użytkownika do koszyka, przechowywane są w local storage, przy użyciu Redux-Persist. Całość kodu Reactowego napisałem w TypeScript i ostylowałem przy pomocy SCSS z zastosowaniem BEM.',
		imgUrl: 'musicstore',
		pageUrl: 'https://grzegorzwirtek.github.io/music-store/',
		githubUrl: 'https://github.com/GrzegorzWirtek/music-store',
	},
	{
		title: 'CMS dla strony Salonu fryzjerskiego (REST API)',
		subtitle:
			'React.js | TypeScript | Sass/SCSS | Redux | Firebase | MongoDB Atlas/Mongoose | Axios',
		description:
			'CMS to jedna z trzech części projektu w stacku MERN, na który składają się jeszcze frontend i backend salonu fryzjerskiego (dostępne na moim GitHubie). Projekt stworzyłem w celu ćwiczenia tworzenia architektury REST API przy użyciu React.js i TypeScript. Strona jest zaprojektowana przeze mnie, responsywna i wystylizowana w SCSS z użyciem metodologii BEM. Zawiera panel logowania oraz zestaw formularzy do edytowania treści i dodawania/usuwania fotografii na stronie salonu fryzjerskiego. Do obsługi stanu aplikacji wykorzystałem Redux. Fotografie przechowywane są w Firebase Storage, natomiast pozostałe treści w bazie MongoDB Atlas.',
		imgUrl: 'hairsalon',
		pageUrl: 'https://grzegorzwirtek.github.io/fryzjer-cms/',
		githubUrl: 'https://github.com/GrzegorzWirtek/fryzjer-cms',
	},
	{
		title: 'Gra Snake',
		subtitle: 'HTML | Sass/SCSS | JavaScript (OOP)',
		description:
			'Grę typu Snake napisałem przy użyciu prostych narzędzi - JavaScript z użyciem klas, HTML i Css. Celem było zmierzenie się z tworzeniem logiki gry, która zachowywać będzie odpowiednią wydajność oraz ćwiczenie tworzenia architektury kodu JavaScript w podejściu obiektowym.',
		imgUrl: 'snake',
		pageUrl: 'https://grzegorzwirtek.github.io/snake-game/',
		githubUrl: 'https://github.com/GrzegorzWirtek/snake-game',
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
		title: 'Sudoku',
		subtitle: 'HTML | Sass/SCSS | JavaScript (OOP)',
		description:
			'Aplikacja do układania 12 plansz sudoku o różnym poziomie trudności. Projekt utworzyłem ćwicząc umiejętności budowania logiki gry i pisania w JavaScript zorientowanym obiektowo. Jest to stary projekt, utworzony na początkowym etapie nauki JS, umieszczam go jako ciekawostkę.',
		imgUrl: 'sudoku',
		pageUrl: 'https://grzegorzwirtek.github.io/sudoku/',
		githubUrl: 'https://github.com/GrzegorzWirtek/sudoku',
	},
	{
		title: 'Blog z panelem admina do dodawania postów (REST API)',
		subtitle: 'React.js | CSS | Redux',
		description:
			'Frontendowa część strony typu Blog. Wraz z bakcendem (dostępnym na moim GitHubie) projekt stanowi część historii mojej nauki tworzenia architektury REST API w stacku MERN. Strona jest responsywna, zaprojektowana przeze mnie, oraz zawiera autorskie wpisy i fotografie dokumentujące jedno z moich hobby. Strona jest napisana w React.js, do obsługi stanu użyłem Reduxa, a style napisane zostały w czystym CSS. Projekt zawiera sekcję komentarzy, które można dodawać pod artykułami - są one wysyłane na backend (Node.js, Express) i zapisywane w bazie MongoDB Atlas. Aplikacja zawiera również panel admina, pozwalający na dodawanie i usuwanie wpisów i fotografii, przechowywanych również w MongoDB.',
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
