const texts = {
  en: {
    prompt: "English",
    texts: {
      correct: "Well done! You played the note <b>{note}</b>.",
      incorrect: "You played the note <b>{note}</b>!",
      desiredNote: " Desired note is <b>{note}</b>.",
      tryAgain: " Try again!",
      playNote: "Play the given note!",
      activating : "Activating microphone and initializing note detection...",
      starting: "Starting note detection...",
      loadingModel: "Loading model...",
      modelLoaded: "Model loaded."
    },
    main: {
      title: "Note Trainer",
      instruction: "Play the note on the <span id=\"instrumentName\"></span>:",
      continue: "Continue",
      startButton: "Start",
      stopButton: "Stop"
      },
    options: {
      optionsTitle: "Options",
      showNoteNameCheckbox: "Show Note Names",
      showArrowsCheckbox: "Show Help Arrows",
      showGhostNoteCheckbox: "Show Ghost Note",
      playNoteCheckbox: "Play Note",
      useBassClefCheckbox: "Activate ",
      showSummaryCheckbox: "Show Summary",
      pauseInput: "Pause",
      toleranceInput: "Tolerance (Hz)",
      instrumentSaxTenorRadio: "Tenor Sax",
      instrumentSaxAltRadio: "Alto Sax",
      instrumentRegularRadio: "Piano",
      smallRangeRadio: "Small",
      middleRangeRadio: "Middle",
      largeRangeRadio: "Large",
      noteFilterCheckbox: "Note Filter",
      noteFilterInput: "Filter Notes",
      showSharpCheckbox: "Activate ",
      showFlatCheckbox: "Activate ",
      languageSelector: "Language",
      instrumentTuning: "Instrument Tuning",
      noteRange: "Note Range",
      accidentals: "Accidentals"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Shows the note name over the staff.\n(Disable this option to learn the direct translation from note to position.)",
      showArrowsCheckboxLabel: "Shows an arrow indicating whether the desired note is higher or lower than the played note.",
      showGhostNoteCheckboxLabel: "Shows a ghost note indicating the currently played note.",
      playNoteCheckboxLabel: "Plays the newly suggested note briefly.",
      useBassClefCheckboxLabel: "Switches to bass clef if needed.",
      showSummaryCheckboxLabel: "Shows a summary when the stop button is pressed.",
      pauseCheckboxLabel: "Specifies the pause (in milliseconds) between a successful note and the next suggested note.",
      toleranceInputLabel: "Allows the specified deviation in Hertz for note recognition.",
      noteFilterCheckboxLabel: "Selects all notes matching the letters in the list. You can also indicate the octave like 'C4 D4 C5', or b und #.",
      showSharpCheckboxLabel: "Selects notes with ♯ (Cis, Dis, Fis, Gis, Ais).",
      showFlatCheckboxLabel: "Selects notes with ♭ (Des, Es, Ges, As, bB).",
      instrumentSaxTenorRadioLabel: "The tenor saxophone is notated a major ninth (14 semitones) higher than it sounds and is therefore tuned in B♭.",
      instrumentSaxAltRadioLabel: "The alto saxophone is notated a major sixth (9 semitones) higher than it sounds and is therefore tuned in E♭.",
      instrumentRegularRadioLabel: "Most instruments are notated as they sound.",
      smallRangeRadioLabel: "Selects just a small range of notes.",
      middleRangeRadioLabel: "Selects a medium range of notes.",
      largeRangeRadioLabel: "Selects a large range of notes."
    },
    summary: {
      summaryHeading: "Summary",
      summaryMessage: "Notes you should practice:",
      successMessage: "Great! No mistakes made!",
      closeButton: "Close",
    }
  },
  de: {
    prompt: "Deutsch",
    texts: {
      correct: "Gut gemacht! Du hast den Ton <b>{note}</b> gespielt.",
      incorrect: "Du hast den Ton <b>{note}</b> gespielt!",
      desiredNote: " Gewünschter Ton ist <b>{note}</b>.",
      tryAgain: " Versuche es noch einmal!",
      playNote: "Spiele den angegebenen Ton!",
      activating : "Aktiviere Mikrofon und initialisiere Notenerkennung...",
      starting: "Starte Notenerkennung...",
      loadingModel: "Lade Modell...",
      modelLoaded: "Modell geladen."
    },
    main: {
      title: "Noten Trainer",
      instruction: "Spiele den Ton auf dem <span id=\"instrumentName\"></span>:",
      continue: "Weiter",
      startButton: "Start",
      stopButton: "Stopp"
    },
    options: {  
      optionsTitle: "Optionen",
      showNoteNameCheckbox: "Zeige Notennamen",
      showArrowsCheckbox: "Zeige Hilfspfeile",
      showGhostNoteCheckbox: "Zeige Geisternote",
      playNoteCheckbox: "Spiele Ton",
      useBassClefCheckbox: "Aktiviere ",
      showSummaryCheckbox: "Zeige Zusammenfassung",
      pauseInput: "Pause",
      toleranceInput: "Toleranz (Hz)",
      instrumentSaxTenorRadio: "Tenor Sax",
      instrumentSaxAltRadio: "Alt Sax",
      instrumentRegularRadio: "Klavier",
      smallRangeRadio: "Klein",
      middleRangeRadio: "Mittel",
      largeRangeRadio: "Groß",
      noteFilterCheckbox: "Noten Filter",
      noteFilterInput: "Noten filtern",
      showSharpCheckbox: "Aktiviere ",
      showFlatCheckbox: "Aktiviere ",
      languageSelector: "Sprache",
      instrumentTuning: "Instrumenten Stimmung",
      noteRange: "Notenraum",
      accidentals: "Vorzeichen"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Zeigt den Notennamen über den Noteninien an.\n(Deaktiviere diese Option um die direkte Übersetzung von Note zu Position zu lernen.)",
      showArrowsCheckboxLabel: "Zeigt einen Pfeil an, der angibt, ob die gewünschte Note höher oder tiefer wie der gespielte Ton ist.",
      showGhostNoteCheckboxLabel: "Zeigt eine Geisternote an, die den aktuell gespielten Ton anzeigt.",
      playNoteCheckboxLabel: "Spielt kurz den neu vorgeschlagenen Ton ab.",
      useBassClefCheckboxLabel: "Wechselt bei Bedarf in den Bassschlüssel.",
      showSummaryCheckboxLabel: "Zeigt eine Zusammenfassung wenn die Stopp-Taste gedrückt wird.",
      pauseCheckboxLabel: "Gibt die Pause (in Millisekunden) zwischen einem erfolgreichen Ton und dem nächsten vorgeschlagenen Ton an.",
      toleranceInputLabel: "Erlaubt bei der Ton-Erkennung die angegebene Abweichung in Hertz.",
      noteFilterCheckboxLabel: "Wählt alle Töne aus, die den Buchstaben in der Liste entsprechen.\nEs kann auch die Oktave angegeben werden, z.B. 'C4 D4 C5', oder b und #.",
      showSharpCheckboxLabel: "Wählt auch Noten mit ♯ (Cis, Dis, Fis, Gis, Ais) aus.",
      showFlatCheckboxLabel: "Wählt auch Noten mit ♭ (Des, Es, Ges, As, B) aus.",
      instrumentSaxTenorRadioLabel: "Das Tenorsaxophon notiert eine große None (14 Halbtöne) höher als klingend und ist damit in B gestimmt.",
      instrumentSaxAltRadioLabel: "Das Altsaxophon notiert eine große Sexte (9 Halbtöne) höher als klingend und ist damit in Es gestimmt.",
      instrumentRegularRadioLabel: "Die meisten Instrumente notieren wie klingend.",
      smallRangeRadioLabel: "Wählt nur einen kleinen Notenraum aus.",
      middleRangeRadioLabel: "Wählt einen mittleren Notenraum aus.",
      largeRangeRadioLabel: "Wählt einen großen Notenraum aus."
    },
    summary: {
      summaryHeading: "Zusammenfassung",
      summaryMessage: "Noten, die Du noch üben solltest:",
      successMessage: "Super! Keine Fehler gemacht!",
      closeButton: "Schließen",
    }
  },
  it: {
    prompt: "Italiano",
    texts: {
      correct: "Ben fatto! Hai suonato la nota <b>{note}</b>.",
      incorrect: "Hai suonato la nota <b>{note}</b>!",
      desiredNote: " La nota desiderata è <b>{note}</b>.",
      tryAgain: " Riprova!",
      playNote: "Suona la nota indicata!",
      activating : "Attivazione del microfono e inizializzazione del rilevamento delle note...",
      starting: "Avvio del rilevamento delle note...",
      loadingModel: "Caricamento del modello...",
      modelLoaded: "Modello caricato."
    },
    main: {
      title: "Allenatore di Note",
      instruction: "Suona la nota sul <span id=\"instrumentName\"></span>:",
      continue: "Continua",
      startButton: "Inizia",
      stopButton: "Ferma"
    },
    options: {
      optionsTitle: "Opzioni",
      showNoteNameCheckbox: "Mostra i nomi delle note",
      showArrowsCheckbox: "Mostra frecce di aiuto",
      showGhostNoteCheckbox: "Mostra nota fantasma",
      playNoteCheckbox: "Suona la nota",
      useBassClefCheckbox: "Attiva ",
      showSummaryCheckbox: "Mostra riepilogo",
      pauseInput: "Pausa",
      toleranceInput: "Tolleranza (Hz)",
      instrumentSaxTenorRadio: "Sax Tenore",
      instrumentSaxAltRadio: "Sax Alto",
      instrumentRegularRadio: "Pianoforte",
      smallRangeRadio: "Piccolo",
      middleRangeRadio: "Medio",
      largeRangeRadio: "Grande",
      noteFilterCheckbox: "Filtro note",
      noteFilterInput: "Filtra note",
      showSharpCheckbox: "Attiva ",
      showFlatCheckbox: "Attiva ",
      languageSelector: "Lingua",
      instrumentTuning: "Accordatura dello strumento",
      noteRange: "Gamma di note",
      accidentals: "Alterazioni"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Mostra il nome della nota sopra il pentagramma.\n(Disabilita questa opzione per imparare la traduzione diretta da nota a posizione.)",
      showArrowsCheckboxLabel: "Mostra una freccia che indica se la nota desiderata è più alta o più bassa della nota suonata.",
      showGhostNoteCheckboxLabel: "Mostra una nota fantasma che indica la nota attualmente suonata.",
      playNoteCheckboxLabel: "Suona brevemente la nota appena suggerita.",
      useBassClefCheckboxLabel: "Passa alla chiave di basso se necessario.",
      showSummaryCheckboxLabel: "Mostra un riepilogo quando viene premuto il pulsante di stop.",
      pauseCheckboxLabel: "Specifica la pausa (in millisecondi) tra una nota corretta e la prossima nota suggerita.",
      toleranceInputLabel: "Consente la deviazione specificata in Hertz per il riconoscimento delle note.",
      noteFilterCheckboxLabel: "Seleziona tutte le note che corrispondono alle lettere nell'elenco. Puoi anche indicare l'ottava come 'C4 D4 C5', o b e #.",
      showSharpCheckboxLabel: "Seleziona le note con ♯ (Do#, Re#, Fa#, Sol#, La#).",
      showFlatCheckboxLabel: "Seleziona le note con ♭ (Re♭, Mi♭, Sol♭, La♭, Si♭).",
      instrumentSaxTenorRadioLabel: "Il sassofono tenore è notato una nona maggiore (14 semitoni) più alta di come suona ed è quindi accordato in Si♭.",
      instrumentSaxAltRadioLabel: "Il sassofono alto è notato una sesta maggiore (9 semitoni) più alta di come suona ed è quindi accordato in Mi♭.",
      instrumentRegularRadioLabel: "La maggior parte degli strumenti è notata come suona.",
      smallRangeRadioLabel: "Seleziona solo una piccola gamma di note.",
      middleRangeRadioLabel: "Seleziona una gamma media di note.",
      largeRangeRadioLabel: "Seleziona una grande gamma di note."
    },
    summary: {
      summaryHeading: "Riepilogo",
      summaryMessage: "Note che dovresti praticare:",
      successMessage: "Ottimo! Nessun errore!",
      closeButton: "Chiudi",
    }
  },
  fr: {
    prompt: "Français",
    texts: {
      correct: "Bien joué! Vous avez joué la note <b>{note}</b>.",
      incorrect: "Vous avez joué la note <b>{note}</b>!",
      desiredNote: " La note désirée est <b>{note}</b>.",
      tryAgain: " Réessayez!",
      playNote: "Jouez la note donnée!",
      activating : "Activation du microphone et initialisation de la détection des notes...",
      starting: "Démarrage de la détection des notes...",
      loadingModel: "Chargement du modèle...",
      modelLoaded: "Modèle chargé."
    },
    main: {
      title: "Entraîneur de Notes",
      instruction: "Jouez la note sur le <span id=\"instrumentName\"></span>:",
      continue: "Continuer",
      startButton: "Démarrer",
      stopButton: "Arrêter"
    },
    options: {
      optionsTitle: "Options",
      showNoteNameCheckbox: "Afficher les noms des notes",
      showArrowsCheckbox: "Afficher les flèches d'aide",
      showGhostNoteCheckbox: "Afficher la note fantôme",
      playNoteCheckbox: "Jouer la note",
      useBassClefCheckbox: "Activer ",
      showSummaryCheckbox: "Afficher le résumé",
      pauseInput: "Pause",
      toleranceInput: "Tolérance (Hz)",
      instrumentSaxTenorRadio: "Sax Ténor",
      instrumentSaxAltRadio: "Sax Alto",
      instrumentRegularRadio: "Piano",
      smallRangeRadio: "Petit",
      middleRangeRadio: "Moyen",
      largeRangeRadio: "Grand",
      noteFilterCheckbox: "Filtre de notes",
      noteFilterInput: "Filtrer les notes",
      showSharpCheckbox: "Activer ",
      showFlatCheckbox: "Activer ",
      languageSelector: "Langue",
      instrumentTuning: "Accordage de l'instrument",
      noteRange: "Gamme de notes",
      accidentals: "Altérations"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Affiche le nom de la note au-dessus de la portée.\n(Désactivez cette option pour apprendre la traduction directe de la note à la position.)",
      showArrowsCheckboxLabel: "Affiche une flèche indiquant si la note désirée est plus haute ou plus basse que la note jouée.",
      showGhostNoteCheckboxLabel: "Affiche une note fantôme indiquant la note actuellement jouée.",
      playNoteCheckboxLabel: "Joue brièvement la note nouvellement suggérée.",
      useBassClefCheckboxLabel: "Passe à la clé de fa si nécessaire.",
      showSummaryCheckboxLabel: "Affiche un résumé lorsque le bouton d'arrêt est enfoncé.",
      pauseCheckboxLabel: "Spécifie la pause (en millisecondes) entre une note correcte et la prochaine note suggérée.",
      toleranceInputLabel: "Permet la déviation spécifiée en Hertz pour la reconnaissance des notes.",
      noteFilterCheckboxLabel: "Sélectionne toutes les notes correspondant aux lettres de la liste. Vous pouvez également indiquer l'octave comme 'C4 D4 C5', ou b et #.",
      showSharpCheckboxLabel: "Sélectionne les notes avec ♯ (Do#, Ré#, Fa#, Sol#, La#).",
      showFlatCheckboxLabel: "Sélectionne les notes avec ♭ (Ré♭, Mi♭, Sol♭, La♭, Si♭).",
      instrumentSaxTenorRadioLabel: "Le saxophone ténor est noté une neuvième majeure (14 demi-tons) plus haut qu'il ne sonne et est donc accordé en Si♭.",
      instrumentSaxAltRadioLabel: "Le saxophone alto est noté une sixte majeure (9 demi-tons) plus haut qu'il ne sonne et est donc accordé en Mi♭.",
      instrumentRegularRadioLabel: "La plupart des instruments sont notés comme ils sonnent.",
      smallRangeRadioLabel: "Sélectionne juste une petite gamme de notes.",
      middleRangeRadioLabel: "Sélectionne une gamme moyenne de notes.",
      largeRangeRadioLabel: "Sélectionne une grande gamme de notes."
    },
    summary: {
      summaryHeading: "Résumé",
      summaryMessage: "Notes que vous devriez pratiquer:",
      successMessage: "Super! Aucun erreur!",
      closeButton: "Fermer",
      topIncorrectNotes: "top 3 notes"
    }
  },
  es: {
    prompt: "Español",
    texts: {
      correct: "¡Bien hecho! Tocaste la nota <b>{note}</b>.",
      incorrect: "¡Tocaste la nota <b>{note}</b>!",
      desiredNote: " La nota deseada es <b>{note}</b>.",
      tryAgain: " ¡Inténtalo de nuevo!",
      playNote: "¡Toca la nota dada!",
      activating : "Activando el micrófono e inicializando la detección de notas...",
      starting: "Iniciando la detección de notas...",
      loadingModel: "Cargando modelo...",
      modelLoaded: "Modelo cargado."
    },
    main: {
      title: "Entrenador de Notas",
      instruction: "Toca la nota en el <span id=\"instrumentName\"></span>:",
      continue: "Continuar",
      startButton: "Iniciar",
      stopButton: "Detener"
    },
    options: {
      optionsTitle: "Opciones",
      showNoteNameCheckbox: "Mostrar nombres de notas",
      showArrowsCheckbox: "Mostrar flechas de ayuda",
      showGhostNoteCheckbox: "Mostrar nota fantasma",
      playNoteCheckbox: "Tocar nota",
      useBassClefCheckbox: "Activar ",
      showSummaryCheckbox: "Mostrar resumen",
      pauseInput: "Pausa",
      toleranceInput: "Tolerancia (Hz)",
      instrumentSaxTenorRadio: "Sax Tenor",
      instrumentSaxAltRadio: "Saxo Alto",
      instrumentRegularRadio: "Piano",
      smallRangeRadio: "Pequeño",
      middleRangeRadio: "Medio",
      largeRangeRadio: "Grande",
      noteFilterCheckbox: "Filtro de notas",
      noteFilterInput: "Filtrar notas",
      showSharpCheckbox: "Activar ",
      showFlatCheckbox: "Activar ",
      languageSelector: "Idioma",
      instrumentTuning: "Afinación del instrumento",
      noteRange: "Rango de notas",
      accidentals: "Alteraciones"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Muestra el nombre de la nota sobre el pentagrama.\n(Desactiva esta opción para aprender la traducción directa de la nota a la posición.)",
      showArrowsCheckboxLabel: "Muestra una flecha que indica si la nota deseada es más alta o más baja que la nota tocada.",
      showGhostNoteCheckboxLabel: "Muestra una nota fantasma que indica la nota que se está tocando actualmente.",
      playNoteCheckboxLabel: "Reproduce brevemente la nota recién sugerida.",
      useBassClefCheckboxLabel: "Cambia a la clave de fa si es necesario.",
      showSummaryCheckboxLabel: "Muestra un resumen cuando se presiona el botón de detener.",
      pauseCheckboxLabel: "Especifica la pausa (en milisegundos) entre una nota correcta y la siguiente nota sugerida.",
      toleranceInputLabel: "Permite la desviación especificada en Hertz para el reconocimiento de notas.",
      noteFilterCheckboxLabel: "Selecciona todas las notas que coinciden con las letras en la lista. También puedes indicar la octava como 'C4 D4 C5', o b y #.",
      showSharpCheckboxLabel: "Selecciona notas con ♯ (Do#, Re#, Fa#, Sol#, La#).",
      showFlatCheckboxLabel: "Selecciona notas con ♭ (Re♭, Mi♭, Sol♭, La♭, Si♭).",
      instrumentSaxTenorRadioLabel: "El saxofón tenor se nota una novena mayor (14 semitonos) más alta de lo que suena y, por lo tanto, está afinado en Si♭.",
      instrumentSaxAltRadioLabel: "El saxofón alto se nota una sexta mayor (9 semitonos) más alta de lo que suena y, por lo tanto, está afinado en Mi♭.",
      instrumentRegularRadioLabel: "La mayoría de los instrumentos se notan como suenan.",
      smallRangeRadioLabel: "Selecciona solo un pequeño rango de notas.",
      middleRangeRadioLabel: "Selecciona un rango medio de notas.",
      largeRangeRadioLabel: "Selecciona un gran rango de notas."
    }
  },
  pt: {
    prompt: "Português",
    texts: {
      correct: "Bem feito! Você tocou a nota <b>{note}</b>.",
      incorrect: "Você tocou a nota <b>{note}</b>!",
      desiredNote: " A nota desejada é <b>{note}</b>.",
      tryAgain: " Tente novamente!",
      playNote: "Toque a nota dada!",
      activating: "Ativando o microfone e inicializando a detecção de notas...",
      starting: "Iniciando a detecção de notas...",
      loadingModel: "Carregando modelo...",
      modelLoaded: "Modelo carregado."
    },
    main: {
      title: "Treinador de Notas",
      instruction: "Toque a nota no <span id=\"instrumentName\"></span>:",
      continue: "Continuar",
      startButton: "Iniciar",
      stopButton: "Parar"
    },
    options: {
      optionsTitle: "Opções",
      showNoteNameCheckbox: "Mostrar nomes das notas",
      showArrowsCheckbox: "Mostrar setas de ajuda",
      showGhostNoteCheckbox: "Mostrar nota fantasma",
      playNoteCheckbox: "Tocar nota",
      useBassClefCheckbox: "Ativar ",
      showSummaryCheckbox: "Mostrar resumo",
      pauseInput: "Pausa",
      toleranceInput: "Tolerância (Hz)",
      instrumentSaxTenorRadio: "Sax Tenor",
      instrumentSaxAltRadio: "Sax Alto",
      instrumentRegularRadio: "Piano",
      smallRangeRadio: "Pequeno",
      middleRangeRadio: "Médio",
      largeRangeRadio: "Grande",
      noteFilterCheckbox: "Filtro de notas",
      noteFilterInput: "Filtrar notas",
      showSharpCheckbox: "Ativar ",
      showFlatCheckbox: "Ativar ",
      languageSelector: "Idioma",
      instrumentTuning: "Afinação do instrumento",
      noteRange: "Gama de notas",
      accidentals: "Acidentais"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Mostra o nome da nota acima da pauta.\n(Desative esta opção para aprender a tradução direta de nota para posição.)",
      showArrowsCheckboxLabel: "Mostra uma seta indicando se a nota desejada é mais alta ou mais baixa do que a nota tocada.",
      showGhostNoteCheckboxLabel: "Mostra uma nota fantasma indicando a nota atualmente tocada.",
      playNoteCheckboxLabel: "Toca brevemente a nota recém-sugerida.",
      useBassClefCheckboxLabel: "Muda para a clave de fá, se necessário.",
      showSummaryCheckboxLabel: "Mostra um resumo quando o botão de parar é pressionado.",
      pauseCheckboxLabel: "Especifica a pausa (em milissegundos) entre uma nota correta e a próxima nota sugerida.",
      toleranceInputLabel: "Permite a variação especificada em Hertz para o reconhecimento de notas.",
      noteFilterCheckboxLabel: "Seleciona todas as notas que correspondem às letras na lista. Você também pode indicar a oitava como 'C4 D4 C5', ou b e #.",
      showSharpCheckboxLabel: "Seleciona notas com ♯ (Dó#, Ré#, Fá#, Sol#, Lá#).",
      showFlatCheckboxLabel: "Seleciona notas com ♭ (Ré♭, Mi♭, Sol♭, Lá♭, Si♭).",
      instrumentSaxTenorRadioLabel: "O saxofone tenor é notado uma nona maior (14 semitons) mais alta do que soa e, portanto, está afinado em Si♭.",
      instrumentSaxAltRadioLabel: "O saxofone alto é notado uma sexta maior (9 semitons) mais alta do que soa e, portanto, está afinado em Mi♭.",
      instrumentRegularRadioLabel: "A maioria dos instrumentos é notada como soa.",
      smallRangeRadioLabel: "Seleciona apenas uma pequena gama de notas.",
      middleRangeRadioLabel: "Seleciona uma gama média de notas.",
      largeRangeRadioLabel: "Seleciona uma grande gama de notas."
    },
    summary: {
      summaryHeading: "Resumo",
      summaryMessage: "Notas que você deve praticar:",
      successMessage: "Ótimo! Nenhum erro cometido!",
      closeButton: "Fechar",
    }
  },
  nl: {
    prompt: "Nederlands",
    texts: {
      correct: "Goed gedaan! Je speelde de noot <b>{note}</b>.",
      incorrect: "Je speelde de noot <b>{note}</b>!",
      desiredNote: " Gewenste noot is <b>{note}</b>.",
      tryAgain: " Probeer het opnieuw!",
      playNote: "Speel de gegeven noot!",
      activating: "Microfoon activeren en nootdetectie initialiseren...",
      starting: "Nootdetectie starten...",
      loadingModel: "Model laden...",
      modelLoaded: "Model geladen."
    },
    main: {
      title: "Notentrainer",
      instruction: "Speel de noot op de <span id=\"instrumentName\"></span>:",
      continue: "Doorgaan",
      startButton: "Start",
      stopButton: "Stop"
    },
    options: {
      optionsTitle: "Opties",
      showNoteNameCheckbox: "Toon nootnamen",
      showArrowsCheckbox: "Toon hulppijlen",
      showGhostNoteCheckbox: "Toon spooknoot",
      playNoteCheckbox: "Speel noot",
      useBassClefCheckbox: "Activeer ",
      showSummaryCheckbox: "Toon samenvatting",
      pauseInput: "Pauze",
      toleranceInput: "Tolerantie (Hz)",
      instrumentSaxTenorRadio: "Tenorsaxofoon",
      instrumentSaxAltRadio: "Altsaxofoon",
      instrumentRegularRadio: "Piano",
      smallRangeRadio: "Klein",
      middleRangeRadio: "Middel",
      largeRangeRadio: "Groot",
      noteFilterCheckbox: "Nootfilter",
      noteFilterInput: "Filter noten",
      showSharpCheckbox: "Activeer ",
      showFlatCheckbox: "Activeer ",
      languageSelector: "Taal",
      instrumentTuning: "Instrumentstemming",
      noteRange: "Notenbereik",
      accidentals: "Accidentals"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Toont de nootnaam boven de notenbalk.\n(Deactiveer deze optie om de directe vertaling van noot naar positie te leren.)",
      showArrowsCheckboxLabel: "Toont een pijl die aangeeft of de gewenste noot hoger of lager is dan de gespeelde noot.",
      showGhostNoteCheckboxLabel: "Toont een spooknoot die de momenteel gespeelde noot aangeeft.",
      playNoteCheckboxLabel: "Speelt kort de nieuw voorgestelde noot.",
      useBassClefCheckboxLabel: "Schakelt indien nodig over naar de bassleutel.",
      showSummaryCheckboxLabel: "Toont een samenvatting wanneer de stopknop wordt ingedrukt.",
      pauseCheckboxLabel: "Geeft de pauze (in milliseconden) aan tussen een succesvolle noot en de volgende voorgestelde noot.",
      toleranceInputLabel: "Staat de opgegeven afwijking in Hertz toe voor nootherkenning.",
      noteFilterCheckboxLabel: "Selecteert alle noten die overeenkomen met de letters in de lijst. Je kunt ook het octaaf aangeven zoals 'C4 D4 C5', of b en #.",
      showSharpCheckboxLabel: "Selecteert noten met ♯ (Cis, Dis, Fis, Gis, Ais).",
      showFlatCheckboxLabel: "Selecteert noten met ♭ (Des, Es, Ges, As, Bes).",
      instrumentSaxTenorRadioLabel: "De tenorsaxofoon wordt een grote none (14 halve tonen) hoger genoteerd dan hij klinkt en is daarom gestemd in Bes.",
      instrumentSaxAltRadioLabel: "De altsaxofoon wordt een grote sext (9 halve tonen) hoger genoteerd dan hij klinkt en is daarom gestemd in Es.",
      instrumentRegularRadioLabel: "De meeste instrumenten worden genoteerd zoals ze klinken.",
      smallRangeRadioLabel: "Selecteert slechts een klein bereik van noten.",
      middleRangeRadioLabel: "Selecteert een middelgroot bereik van noten.",
      largeRangeRadioLabel: "Selecteert een groot bereik van noten."
    },
    summary: {
      summaryHeading: "Samenvatting",
      summaryMessage: "Noten die je zou moeten oefenen:",
      successMessage: "Geweldig! Geen fouten gemaakt!",
      closeButton: "Sluiten",
    }
  },
  pl: {
    prompt: "Polski",
    texts: {
      correct: "Dobra robota! Zagrałeś nutę <b>{note}</b>.",
      incorrect: "Zagrałeś nutę <b>{note}</b>!",
      desiredNote: " Pożądana nuta to <b>{note}</b>.",
      tryAgain: " Spróbuj ponownie!",
      playNote: "Zagraj podaną nutę!",
      activating: "Aktywowanie mikrofonu i inicjalizacja wykrywania nut...",
      starting: "Rozpoczynanie wykrywania nut...",
      loadingModel: "Ładowanie modelu...",
      modelLoaded: "Model załadowany."
    },
    main: {
      title: "Trener Nut",
      instruction: "Zagraj nutę na <span id=\"instrumentName\"></span>:",
      continue: "Kontynuuj",
      startButton: "Start",
      stopButton: "Stop"
    },
    options: {
      optionsTitle: "Opcje",
      showNoteNameCheckbox: "Pokaż nazwy nut",
      showArrowsCheckbox: "Pokaż strzałki pomocnicze",
      showGhostNoteCheckbox: "Pokaż duchową nutę",
      playNoteCheckbox: "Zagraj nutę",
      useBassClefCheckbox: "Aktywuj ",
      showSummaryCheckbox: "Pokaż podsumowanie",
      pauseInput: "Pauza",
      toleranceInput: "Tolerancja (Hz)",
      instrumentSaxTenorRadio: "Saksofon tenorowy",
      instrumentSaxAltRadio: "Saksofon altowy",
      instrumentRegularRadio: "Fortepian",
      smallRangeRadio: "Mały",
      middleRangeRadio: "Średni",
      largeRangeRadio: "Duży",
      noteFilterCheckbox: "Filtr nut",
      noteFilterInput: "Filtruj nuty",
      showSharpCheckbox: "Aktywuj ",
      showFlatCheckbox: "Aktywuj ",
      languageSelector: "Język",
      instrumentTuning: "Strojenie instrumentu",
      noteRange: "Zakres nut",
      accidentals: "Znaki przygodne"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Pokazuje nazwę nuty nad pięciolinią.\n(Wyłącz tę opcję, aby nauczyć się bezpośredniego tłumaczenia nuty na pozycję.)",
      showArrowsCheckboxLabel: "Pokazuje strzałkę wskazującą, czy pożądana nuta jest wyższa czy niższa od zagranej nuty.",
      showGhostNoteCheckboxLabel: "Pokazuje duchową nutę wskazującą aktualnie zagrane dźwięki.",
      playNoteCheckboxLabel: "Krótko odtwarza nowo zasugerowaną nutę.",
      useBassClefCheckboxLabel: "Przełącza na klucz basowy, jeśli to konieczne.",
      showSummaryCheckboxLabel: "Pokazuje podsumowanie po naciśnięciu przycisku stop.",
      pauseCheckboxLabel: "Określa pauzę (w milisekundach) między poprawną nutą a następną zasugerowaną nutą.",
      toleranceInputLabel: "Pozwala na określoną odchyłkę w Hertzach dla rozpoznawania nut.",
      noteFilterCheckboxLabel: "Wybiera wszystkie nuty pasujące do liter na liście. Możesz również wskazać oktawę, np. 'C4 D4 C5', lub b i #.",
      showSharpCheckboxLabel: "Wybiera nuty z ♯ (Cis, Dis, Fis, Gis, Ais).",
      showFlatCheckboxLabel: "Wybiera nuty z ♭ (Des, Es, Ges, As, Bes).",
      instrumentSaxTenorRadioLabel: "Saksofon tenorowy jest notowany o dużą nonę (14 półtonów) wyżej niż brzmi i jest strojony w B♭.",
      instrumentSaxAltRadioLabel: "Saksofon altowy jest notowany o dużą sekstę (9 półtonów) wyżej niż brzmi i jest strojony w E♭.",
      instrumentRegularRadioLabel: "Większość instrumentów jest notowana tak, jak brzmi.",
      smallRangeRadioLabel: "Wybiera tylko mały zakres nut.",
      middleRangeRadioLabel: "Wybiera średni zakres nut.",
      largeRangeRadioLabel: "Wybiera duży zakres nut."
    },
    summary: {
      summaryHeading: "Podsumowanie",
      summaryMessage: "Nuty, które powinieneś ćwiczyć:",
      successMessage: "Świetnie! Bez błędów!",
      closeButton: "Zamknij",
    }
  },
  hu: {
    prompt: "Magyar",
    texts: {
      correct: "Jól van! A(z) <b>{note}</b> hangot játszottad.",
      incorrect: "A(z) <b>{note}</b> hangot játszottad!",
      desiredNote: " A kívánt hang <b>{note}</b>.",
      tryAgain: " Próbáld újra!",
      playNote: "Játszd el a megadott hangot!",
      activating: "Mikrofon aktiválása és hangfelismerés inicializálása...",
      starting: "Hangfelismerés indítása...",
      loadingModel: "Modell betöltése...",
      modelLoaded: "Modell betöltve."
    },
    main: {
      title: "Hang Tréner",
      instruction: "Játszd el a hangot a <span id=\"instrumentName\"></span>-on:",
      continue: "Folytatás",
      startButton: "Indítás",
      stopButton: "Leállítás"
    },
    options: {
      optionsTitle: "Beállítások",
      showNoteNameCheckbox: "Hangnevek megjelenítése",
      showArrowsCheckbox: "Segítségnyújtó nyíl megjelenítése",
      showGhostNoteCheckbox: "Szellemlény megjelenítése",
      playNoteCheckbox: "Hang lejátszása",
      useBassClefCheckbox: "Basszuskulcs használata ",
      showSummaryCheckbox: "Összefoglaló megjelenítése",
      pauseInput: "Szünet",
      toleranceInput: "Tolerancia (Hz)",
      instrumentSaxTenorRadio: "Tenor szaxofon",
      instrumentSaxAltRadio: "Alt szaxofon",
      instrumentRegularRadio: "Zongora",
      smallRangeRadio: "Kicsi",
      middleRangeRadio: "Közepes",
      largeRangeRadio: "Nagy",
      noteFilterCheckbox: "Hangszűrő",
      noteFilterInput: "Hangok szűrése",
      showSharpCheckbox: "Keresztek megjelenítése ",
      showFlatCheckbox: "B-k megjelenítése ",
      languageSelector: "Nyelv",
      instrumentTuning: "Hangszer hangolása",
      noteRange: "Hangterjedelem",
      accidentals: "Előjegyzések"
    },
    tooltips: {
      showNoteNameCheckboxLabel: "Megjeleníti a hang nevét a kottán.\n(Kapcsold ki ezt az opciót, hogy megtanuld a hang közvetlen fordítását a pozícióra.)",
      showArrowsCheckboxLabel: "Egy nyíl mutatja, hogy a kívánt hang magasabb vagy alacsonyabb-e, mint a megszólalt hang.",
      showGhostNoteCheckboxLabel: "Egy szellemlény mutatja a jelenleg megszólalt hangot.",
      playNoteCheckboxLabel: "Röviden lejátsza az újonnan javasolt hangot.",
      useBassClefCheckboxLabel: "Szükség esetén átvált basszuskulcsra.",
      showSummaryCheckboxLabel: "Összefoglalót jelenít meg, amikor a leállítás gombot megnyomják.",
      pauseCheckboxLabel: "Meghatározza a szünetet (milliszekundumban) egy sikeres hang és a következő javasolt hang között.",
      toleranceInputLabel: "Megengedi a megadott eltérést Hertzben a hangfelismeréshez.",
      noteFilterCheckboxLabel: "Kiválasztja az összes hangot, amely megfelel a listában szereplő betűknek. Az oktávot is megadhatod, mint például 'C4 D4 C5', vagy b és #.",
      showSharpCheckboxLabel: "Kiválasztja a ♯ hangokat (Cisz, Disz, Fisz, Gisz, Aisz).",
      showFlatCheckboxLabel: "Kiválasztja a ♭ hangokat (Desz, Esz, Gesz, Asz, B).",
      instrumentSaxTenorRadioLabel: "A tenor szaxofon egy nagy nonával (14 félhanggal) magasabban van notálva, mint ahogy szól, ezért B♭-ban van hangolva.",
      instrumentSaxAltRadioLabel: "Az alt szaxofon egy nagy szexttel (9 félhanggal) magasabban van notálva, mint ahogy szól, ezért E♭-ban van hangolva.",
      instrumentRegularRadioLabel: "A legtöbb hangszer úgy van notálva, ahogy szól.",
      smallRangeRadioLabel: "Csak egy kis hangterjedelmet választ ki.",
      middleRangeRadioLabel: "Közepes hangterjedelmet választ ki.",
      largeRangeRadioLabel: "Nagy hangterjedelmet választ ki."
    },
    summary: {
      summaryHeading: "Összefoglaló",
      summaryMessage: "Hangok, amelyeket gyakorolnod kellene:",
      successMessage: "Nagyszerű! Nincs hiba!",
      closeButton: "Bezárás",
    }
  }  
};