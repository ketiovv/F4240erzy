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


        let questions = [
            {
                id: 1,
                contentOfQuestion: "Co NIE jest prawdą o Bootstrapie?",
                stageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                contentOfQuestion: "Na ile kolumn jest podzielona responsywna siatka bootstrapowa?",
                stageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                contentOfQuestion: "Za co odpowiada reboot w Bootstrapie?",
                stageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 4,
                contentOfQuestion: "Na jakim języku opiera się Angular?",
                stageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //stage 2
            {
                id: 5,
                contentOfQuestion: "Jakiego dekoratora używa się w celu stworzenia nowego modułu w Angularze?",
                stageId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 6,
                contentOfQuestion: "Jakiego polecenia należy użyć w celu stworzenia nowego projektu Angular?",
                stageId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 7,
                contentOfQuestion: "Czym zasadniczo jest Materialize?",
                stageId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 8,
                contentOfQuestion: "Czym był inspirowany Material Design?",
                stageId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //stage 3
            {
                id: 9,
                contentOfQuestion: "Jak Materialize obsługuje układ kolumnowy?\n",
                stageId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 10,
                contentOfQuestion: "Co oznacza AMD w Dojo JS?",
                stageId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 11,
                contentOfQuestion: "Jaka funkcja służy do ładowania modułów w Dojo Toolkit?",
                stageId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 12,
                contentOfQuestion: "W której wersji Dojo porzucono nazwę toolkit?",
                stageId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //stage 4
            {
                id: 13,
                contentOfQuestion: "Jaki framework wykorzystuje LayoutIt:",
                stageId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 14,
                contentOfQuestion: "Do ilu musi sumować się liczba jednostek w rzędzie (Grid):",
                stageId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 15,
                contentOfQuestion: "Jakie są opcje pobrania projektu z seriwsu LayoutIt:",
                stageId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 16,
                contentOfQuestion: "Czy do używania Drag & Drop API wymagane jest użycie biblioteki jQuery?",
                stageId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // stage 5
            {
                id: 17,
                contentOfQuestion: "Kiedy wywoływane jest zdarzenie dragLeave?",
                stageId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 18,
                contentOfQuestion: "Jaki atrybut należy nadać strefie upuszczenia przeciąganego elementu?",
                stageId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 19,
                contentOfQuestion: " Które z wymienionych NIE jest zaletą Vue?",
                stageId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 20,
                contentOfQuestion: "Jacy są główni konkurenci Vue?",
                stageId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            //stage 6
            {
                id: 21,
                contentOfQuestion: "Kiedy wywoływane jest zdarzenie dragLeave?",
                stageId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 22,
                contentOfQuestion: "Jaki atrybut należy nadać strefie upuszczenia przeciąganego elementu?",
                stageId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 23,
                contentOfQuestion: " Które z wymienionych NIE jest zaletą Vue?",
                stageId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 24,
                contentOfQuestion: "Jacy są główni konkurenci Vue?",
                stageId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
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
            // question 1
            {
                contentOfAnswer: "Składa się m. in. z plików napisanych w CSS.",
                correct: false,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Składa się m. in. z plików napisanych w JavaScript.",
                correct: false,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Jest backendowym frameworkiem.",
                correct: true,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Jest frontendowym frameworkiem.",
                correct: false,
                questionId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 2
            {
                contentOfAnswer: "10",
                correct: false,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "12",
                correct: true,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "14",
                correct: false,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "16",
                correct: false,
                questionId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 3
            {
                contentOfAnswer: "za inicjalizację zmiennych",
                correct: false,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "za wczytanie zewnętrznych zależności",
                correct: false,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "za zmianę stylów domyślnych",
                correct: true,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "za restart strony po awarii",
                correct: false,
                questionId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 4
            {
                contentOfAnswer: "TypeScript",
                correct: true,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Java",
                correct: false,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Python",
                correct: false,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Ruby",
                correct: false,
                questionId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 5
            {
                contentOfAnswer: "@Component",
                correct: false,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "@Pipe",
                correct: false,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "@NgModule",
                correct: true,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "@HostBinding",
                correct: false,
                questionId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 6
            {
                contentOfAnswer: "ng generate",
                correct: false,
                questionId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "ng new",
                correct: true,
                questionId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "ng serve",
                correct: false,
                questionId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "ng test",
                correct: false,
                questionId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 7
            {
                contentOfAnswer: "arkuszem stylów",
                correct: true,
                questionId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "pluginem do edytora tekstoweg",
                correct: false,
                questionId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "środowiskiem graficznym do projektowania stron",
                correct: false,
                questionId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 8
            {
                contentOfAnswer: "metalem i drewnemw",
                correct: false,
                questionId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "kredą",
                correct: false,
                questionId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "farbą olejną",
                correct: false,
                questionId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "papierem i atramentem",
                correct: true,
                questionId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 9
            {
                contentOfAnswer: "za pomocą display: grid",
                correct: false,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "za pomocą display: flex",
                correct: false,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "za pomocą position: relative/absolute",
                correct: false,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "za pomocą margin,left,right",
                correct: true,
                questionId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 10
            {
                contentOfAnswer: "Asynchronous Module Definition",
                correct: true,
                questionId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Asynchronous Member Definition",
                correct: false,
                questionId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Automatic Member Definition",
                correct: false,
                questionId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Automatic Module Definition",
                correct: false,
                questionId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 11
            {
                contentOfAnswer: "define",
                correct: false,
                questionId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "import",
                correct: false,
                questionId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "require",
                correct: true,
                questionId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "load",
                correct: false,
                questionId: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 12
            {
                contentOfAnswer: "1.5",
                correct: false,
                questionId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "2.0",
                correct: true,
                questionId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "2.5",
                correct: false,
                questionId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "3.0",
                correct: false,
                questionId: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 13
            {
                contentOfAnswer: "Foundation",
                correct: false,
                questionId: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Bootstrap",
                correct: true,
                questionId: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Materialize",
                correct: false,
                questionId: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Material UI",
                correct: false,
                questionId: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 14
            {
                contentOfAnswer: "5",
                correct: false,
                questionId: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "12",
                correct: true,
                questionId: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "17",
                correct: false,
                questionId: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: " 20",
                correct: false,
                questionId: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 15
            {
                contentOfAnswer: "Nie da się pobrać",
                correct: false,
                questionId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Można pobrać tylko HTML",
                correct: false,
                questionId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Można pobrać tylko Zip całego projektu",
                correct: false,
                questionId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Można pobrać HTML lub cały projekt w Zip",
                correct: true,
                questionId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 16
            {
                contentOfAnswer: "Tak, zawsze",
                correct: false,
                questionId: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Tak, kiedy używamy HTML5",
                correct: false,
                questionId: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Tak, gdy chcemy obsługiwać upuszczanie plików",
                correct: false,
                questionId: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Nie",
                correct: true,
                questionId: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 17
            {
                contentOfAnswer: "Kiedy element zostanie upuszczony w prawidłowej strefie zrzutu",
                correct: false,
                questionId: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Zawsze kiedy zakończy się operacja przeciągania",
                correct: false,
                questionId: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Kiedy element opuszcza prawidłową strefę zrzutu",
                correct: true,
                questionId: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Kiedy element opuszcza swoją pierwotną pozycję",
                correct: false,
                questionId: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 18
            {
                contentOfAnswer: "draggable=”true”",
                correct: false,
                questionId: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "editable=”true”",
                correct: false,
                questionId: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "dropZone=”true”",
                correct: false,
                questionId: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Żaden",
                correct: true,
                questionId: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 19
            {
                contentOfAnswer: "Prostota",
                correct: false,
                questionId: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Elastyczność",
                correct: true,
                questionId: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Rozmiar",
                correct: false,
                questionId: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Szybkość",
                correct: false,
                questionId: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 20
            {
                contentOfAnswer: "Django, Jquery",
                correct: false,
                questionId: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Angular, React",
                correct: true,
                questionId: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Bootstrap, Dojo",
                correct: false,
                questionId: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "React, Jquery",
                correct: false,
                questionId: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 21
            {
                contentOfAnswer: "Obiekty",
                correct: true,
                questionId: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Metody",
                correct: false,
                questionId: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Wartości obliczane dynamicznie",
                correct: false,
                questionId: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Nie ma takiego pola",
                correct: false,
                questionId: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 22
            {
                contentOfAnswer: "pliki graficzne",
                correct: false,
                questionId: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "pliki wykonywalne",
                correct: false,
                questionId: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "pliki tekstowe",
                correct: true,
                questionId: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "archiwa skompresowanych plików",
                correct: false,
                questionId: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 23
            {
                contentOfAnswer: "4 Megabajty",
                correct: false,
                questionId: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "4 Kilobajty",
                correct: true,
                questionId: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "16 Megabajtów",
                correct: false,
                questionId: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "16 Kilobajtów",
                correct: false,
                questionId: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // question 24
            {
                contentOfAnswer: "Sami ustawiamy datę przechowywania",
                correct: false,
                questionId: 24,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Do czasu zamknięcia karty",
                correct: true,
                questionId: 24,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "Nie ma limitu czasu",
                correct: false,
                questionId: 24,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contentOfAnswer: "24 godziny",
                correct: false,
                questionId: 24,
                createdAt: new Date(),
                updatedAt: new Date()
            },
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
        await queryInterface.bulkDelete('stages', null, {});
        await queryInterface.bulkDelete('questions', null, {});
        return queryInterface.bulkDelete('answers', null, {});
    }
};