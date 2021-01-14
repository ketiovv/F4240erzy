'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        let stages = [{
                stageNumber: 1,
                amount: 500,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 2,
                amount: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 3,
                amount: 2000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 4,
                amount: 5000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 5,
                amount: 10000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 6,
                amount: 20000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 7,
                amount: 40000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 8,
                amount: 75000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 9,
                amount: 125000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 10,
                amount: 250000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 11,
                amount: 500000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                stageNumber: 12,
                amount: 1000000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];

        let addedStages = await queryInterface.bulkInsert('stages', stages, {});


        let questions = [{
                // stage 7
                id: 25,
                contentOfQuestion: "Czym jest Electron?",
                stageId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 26,
                contentOfQuestion: "Kto jest autorem Electronu?",
                stageId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 27,
                contentOfQuestion: "Co jest zaletą korzystania z Electrona?",
                stageId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 28,
                contentOfQuestion: "Wewnątrz jakiego tagu należy umieścić informacje kontaktowe?",
                stageId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // stage 8
            {
                id: 29,
                contentOfQuestion: "Który typ pola był dostępny przed HTML5?",
                stageId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 30,
                contentOfQuestion: "Jakiego elementu semantycznego należy użyć do pokazania postępu jakiegoś zadania?",
                stageId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 31,
                contentOfQuestion: "WebAssembly umożliwia uruchamianie kodu w innym języku niż WA którego szybkość działania jest:",
                stageId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 32,
                contentOfQuestion: "Założeniem WebAssembly NIE JEST:",
                stageId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // stage 9
            {
                id: 33,
                contentOfQuestion: "Które ze stwierdzeń jest prawdą?",
                stageId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 34,
                contentOfQuestion: "Czym jest ARIA?",
                stageId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 35,
                contentOfQuestion: "Jaka jest główna zasada korzystania z ARIA?",
                stageId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 36,
                contentOfQuestion: "O czym decyduje atrybut aria-live?",
                stageId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // stage 10
            {
                id: 37,
                contentOfQuestion: "Protokół https różni się od http",
                stageId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 38,
                contentOfQuestion: "Czy odznaki zaufania('visa','mastercard','AES 256bit') wyznaczają bezpieczne strony?",
                stageId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 39,
                contentOfQuestion: "Jak szybko sprawdzić czy adres strony, w którą chcemy wejść pokrywa się z rzeczywistym jej adresem?",
                stageId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 40,
                contentOfQuestion: "Chciałbyś uzyskać informacje o właścicielu witryny, którą przeglądasz, ale nie zostały one umieszczone na samej stronie. Które z poniższych narzędzi może Ci pomóc zdobyć takowe dane?",
                stageId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // stage 11
            {
                id: 41,
                contentOfQuestion: "Biblioteka Qooxdoo pozwala tworzyć aplikacje:",
                stageId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 42,
                contentOfQuestion: "Użycia jakich języków wymaga Qooxdoo?",
                stageId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 43,
                contentOfQuestion: "Wybierz zdanie, które nie jest prawdziwe: ",
                stageId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 44,
                contentOfQuestion: "Jak nazywała się pierwsza przeglądarka internetowa?",
                stageId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // stage 12
            {
                id: 45,
                contentOfQuestion: "Wskaż, które z poniższych NIE JEST zapytaniem HTTP.",
                stageId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 46,
                contentOfQuestion: "Kiedy miał miejsce pierwszy udokumentowany atak typu DoS?",
                stageId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 47,
                contentOfQuestion: "Kotlin to statycznie typowany język programowania działający na maszynie wirtualnej Javy. Skąd wzięła się jego nazwa?",
                stageId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 48,
                contentOfQuestion: "Twórca języka C# stworzył jeszcze jeden spośród niżej wymienionych, który to?",
                stageId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },


        ]

        let addedQuestions = await queryInterface.bulkInsert('questions', questions, {});


        let answers = [
            // question 25
            {
                contentOfAnswer: "Frameworkiem do tworzenia aplikacji mobilnych",
                correct: false,
                questionId: 25,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Frameworkiem do tworzenia aplikacji webowych",
                correct: false,
                questionId: 25,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Frameworkiem do tworzenia aplikacji desktopowych",
                correct: true,
                questionId: 25,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Edytorem tekstu do tworzenia aplikacji webowych",
                correct: false,
                questionId: 25,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 26
            {
                contentOfAnswer: "Riot",
                correct: false,
                questionId: 26,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "GitHub",
                correct: true,
                questionId: 26,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Oracle",
                correct: false,
                questionId: 26,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "IBM",
                correct: false,
                questionId: 26,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 27
            {
                contentOfAnswer: "Wysoka wydajność aplikacji",
                correct: false,
                questionId: 27,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Niskie zużycie pamięci RAM",
                correct: false,
                questionId: 27,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Silnik, z którego korzysta Electron",
                correct: false,
                questionId: 27,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Wieloplatformowość",
                correct: true,
                questionId: 27,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 28
            {
                contentOfAnswer: "<header>",
                correct: false,
                questionId: 28,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "<aside>",
                correct: false,
                questionId: 28,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "<footer>",
                correct: false,
                questionId: 28,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "<address>",
                correct: true,
                questionId: 28,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 29
            {
                contentOfAnswer: "<input type='number'>",
                correct: false,
                questionId: 29,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "<input type='text'>",
                correct: true,
                questionId: 29,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "<input type='url'>",
                correct: false,
                questionId: 29,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "<input type='email'>",
                correct: false,
                questionId: 29,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 30
            {
                contentOfAnswer: "meter",
                correct: false,
                questionId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "output",
                correct: false,
                questionId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "progress",
                correct: true,
                questionId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "mark",
                correct: false,
                questionId: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 31
            {
                contentOfAnswer: "niemal natywnej szybkości",
                correct: true,
                questionId: 31,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "znacznie wolniejsza niż zwykle",
                correct: false,
                questionId: 31,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "znacznie szybsza niż zwykle",
                correct: false,
                questionId: 31,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "WebAssembly nie umożliwia takich kompilacji nie swojego kodu",
                correct: false,
                questionId: 31,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 32
            {
                contentOfAnswer: "Być szybki i efektywny",
                correct: false,
                questionId: 32,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Być czytelny i debugowalny",
                correct: false,
                questionId: 32,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Być bezpieczny",
                correct: false,
                questionId: 32,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Działać tylko z językiem WA oraz JS",
                correct: true,
                questionId: 32,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 33
            {
                contentOfAnswer: "WebAssembly powstał, by zastąpić JavaScript.",
                correct: false,
                questionId: 33,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "WebAssembly nie posiada wstecznej kompatybilności dla starszych przeglądarek.",
                correct: false,
                questionId: 33,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "WebAssembly obsługiwany jest przez większość z przeglądarek większych dostawców.",
                correct: true,
                questionId: 33,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Założeniem WebAssembly nie jest bezpieczeństwo.",
                correct: false,
                questionId: 33,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 34
            {
                contentOfAnswer: "Frameworkiem JavaScript",
                correct: false,
                questionId: 34,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Systemem asystującym przeglądanie Internetu dla osób niepełnosprawnych",
                correct: true,
                questionId: 34,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Zbiorem zasad, których należy przestrzegać przy projektowaniu strony internetowej",
                correct: false,
                questionId: 34,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Systemem zarządzającym bazą danych strony internetowej",
                correct: false,
                questionId: 34,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 35
            {
                contentOfAnswer: "Tworzenie strony w wielu językach",
                correct: false,
                questionId: 35,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Używanie domyślnych tagów HTML",
                correct: true,
                questionId: 35,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Używanie tagów prostych HTML i określanie działania za pomocą atrybutu 'role'",
                correct: false,
                questionId: 35,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Tworzenie strony w języku danego regionu",
                correct: false,
                questionId: 35,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 36
            {
                contentOfAnswer: "O widoczności wizualnej kontrolki na stronie",
                correct: false,
                questionId: 36,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "O aktywności kontrolki na stronie",
                correct: false,
                questionId: 36,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "O sposobie informowania (bądź braku informowania) o zmianach zachodzących w kontrolkach",
                correct: true,
                questionId: 36,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "O widoczności kontrolki na stronie dla programów wspomagających",
                correct: false,
                questionId: 36,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 37
            {
                contentOfAnswer: "zwiększonym bezpieczeństwem",
                correct: true,
                questionId: 37,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "usprawnioną prędkością ładowania strony",
                correct: false,
                questionId: 37,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "umożliwia tworzenie kopi zapasowej na maszynie użytkonika",
                correct: false,
                questionId: 37,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "pozwala na zmniejszenie ilości wymaganych bibliotek",
                correct: false,
                questionId: 37,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 38
            {
                contentOfAnswer: "tak",
                correct: false,
                questionId: 38,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "tylko wtedy gdy domena jest zarejstrowana w UE lub USA",
                correct: false,
                questionId: 38,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "gdy strona posiada https w URL",
                correct: false,
                questionId: 38,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "nie",
                correct: true,
                questionId: 38,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 39
            {
                contentOfAnswer: "Klikając na nią lewym przyciskiem myszy i dalej wybierając opcję: 'zbadaj'.",
                correct: false,
                questionId: 39,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Umieszczając nad witryną strony kursor myszy i odczytując wyświetlony jej adres w lewym dolnym rogu przeglądarki.",
                correct: true,
                questionId: 39,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Skopiować adres linku do strony i poszukać dalej informacji o niej.",
                correct: false,
                questionId: 39,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Sprawdzając jej samo źródło.",
                correct: false,
                questionId: 39,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 40
            {
                contentOfAnswer: "transparencyreport.google.com",
                correct: false,
                questionId: 40,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "microsoft.ajax.report.org",
                correct: false,
                questionId: 40,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "lookup.icann.org",
                correct: true,
                questionId: 40,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "serfujbezpiecznie.pl",
                correct: false,
                questionId: 40,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 41
            {
                contentOfAnswer: "Mobilne",
                correct: false,
                questionId: 41,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Desktopowe",
                correct: false,
                questionId: 41,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Webowe",
                correct: false,
                questionId: 41,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Wszystkie z powyższych",
                correct: true,
                questionId: 41,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 42
            {
                contentOfAnswer: "JavaScript",
                correct: true,
                questionId: 42,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "JavaScript i HTML",
                correct: false,
                questionId: 42,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "HTML i CSS",
                correct: false,
                questionId: 42,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "JavaScript, HTML i CSS",
                correct: false,
                questionId: 42,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 43
            {
                contentOfAnswer: "Qooxdoo jest obiektowo zorientowany",
                correct: false,
                questionId: 43,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Qooxdoo pozwala na dziedziczenie",
                correct: false,
                questionId: 43,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Qooxdoo nie pozwala na tworzenie interfejsów",
                correct: true,
                questionId: 43,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Qooxdoo to framework opensource",
                correct: false,
                questionId: 43,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 44
            {
                contentOfAnswer: "World Wild Web",
                correct: false,
                questionId: 44,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Erwise",
                correct: false,
                questionId: 44,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "World Wide Web",
                correct: true,
                questionId: 44,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Internet Explorer",
                correct: false,
                questionId: 44,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 45
            {
                contentOfAnswer: "Put",
                correct: false,
                questionId: 45,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Host",
                correct: true,
                questionId: 45,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Delete",
                correct: false,
                questionId: 45,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Patch",
                correct: false,
                questionId: 45,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 46
            {
                contentOfAnswer: "luty 2000r.",
                correct: true,
                questionId: 46,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "kwiecień 1996r.",
                correct: false,
                questionId: 46,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "wrzesień 1999r.",
                correct: false,
                questionId: 46,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "styczeń 1989r.",
                correct: false,
                questionId: 46,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 47
            {
                contentOfAnswer: "od ketchupu",
                correct: false,
                questionId: 47,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "od wyspy",
                correct: true,
                questionId: 47,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "od kotliny kłodzkiej",
                correct: false,
                questionId: 47,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "od słowa kluczowego Javy odpowiadającego za asynchroniczne działanie",
                correct: false,
                questionId: 47,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 48
            {
                contentOfAnswer: "Python",
                correct: false,
                questionId: 48,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "C",
                correct: false,
                questionId: 48,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "TypeScript",
                correct: true,
                questionId: 48,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "C++",
                correct: false,
                questionId: 48,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ];

        await queryInterface.bulkInsert('answers', answers, {});

        console.log(addedStages)
        console.log(addedQuestions)
    },
    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('stages', null, {});
    }
};