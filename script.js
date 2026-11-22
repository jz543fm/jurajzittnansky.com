"use strict";

/* =========================================================
   PORTFOLIO TRANSLATIONS
   Default: Slovak
   Supported: SK, EN, DE, AR, JA, FR, IT, PL
========================================================= */

const translations = {
  sk: {
    navAbout: "O mne",
    navExperience: "Skúsenosti",
    navStack: "Technológie",
    navProjects: "Projekty",
    navContact: "Kontakt",
    sayHello: 'Napíš mi <span aria-hidden="true">↗</span>',
    availability: "SOFTVÉROVÝ INŽINIER · SLOVENSKO",
    heroGreeting: "Ahoj, volám sa",
    heroDescription: "Prepájam vývoj softvéru, cloud-native infraštruktúru a bezpečnostné myslenie pri budovaní spoľahlivých systémov.",
    exploreWork: 'Pozrieť projekty <span aria-hidden="true">↗</span>',
    getInTouch: "Kontakt",
    aboutEyebrow: "01 / O MNE",
    aboutTitle: "Technológie, ktoré dávajú zmysel.",
    aboutText1: "Som softvérový inžinier zo Slovenska. Počas svojej kariéry som pracoval na vývoji softvéru, DevOps, cloudovej infraštruktúre a automatizácii.",
    aboutText2: "Baví ma navrhovať a budovať škálovateľné distribuované systémy, najmä v prostredí Kubernetes.",
    aboutText3: "Zaujímam sa aj o cybersecurity, bezpečnostné testovanie a Linuxové prostredia.",
    experienceEyebrow: "02 / KARIÉRA",
    experienceTitle: "Pracovné skúsenosti",
    experienceSubtitle: "Cesta naprieč vývojom softvéru, infraštruktúrou a cloud-native technológiami.",
    job1Date: "AUG 2025 — SÚČASNOSŤ",
    job1Text: "Vývoj softvérových riešení, technická architektúra a cloud-native technológie vrátane Kubernetes operátorov a controllerov.",
    job2Text: "Privátna AI cloudová infraštruktúra, Kubernetes platformy, CI/CD, monitoring, alerting a automatizácia.",
    job3Text: "Automatizácia infraštruktúry a technické úlohy v oblasti DevOps.",
    job4Title: "Software Developer / DevOps Engineer",
    job4Text: "Skúsenosti s vývojom softvéru, Linux systémami, vývojom aplikácií a infraštruktúrou.",
    stackEyebrow: "03 / TECHNOLÓGIE",
    stackTitle: "Môj technický stack",
    stackSubtitle: "Nástroje a technológie, s ktorými mám praktické skúsenosti.",
    stackCloud: "Cloud a infraštruktúra",
    stackObserve: "Monitoring a observabilita",
    stackCode: "Programovanie",
    stackSecurity: "Cybersecurity",
    stackTools: "Nástroje a platformy",
    projectsEyebrow: "04 / VYBRANÉ PROJEKTY",
    projectsTitle: "Veci, ktoré som vytvoril.",
    projectsSubtitle: "Praktické projekty a technické experimenty z môjho GitHubu.",
    project1Text: "Kontajnerizované prostredie Kali Linux na bezpečnostné testovanie a experimentovanie.",
    project2Text: "Kontajnerizované prostredie Parrot OS s edíciami Core a Security a príkladmi nasadenia.",
    project3Text: "Experimenty so záťažovým testovaním Kubernetes workloadov a správania klastra.",
    project4Text: "Vlastná konfigurácia Starship promptu a skripty pre pohodlnejšie prostredie príkazového riadka.",
    moreGithub: 'Ďalšie projekty na GitHube <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / VZDELANIE",
    educationTitle: "Základy, na ktorých staviam.",
    degreeMaster: "Inžinierske štúdium · Informatika",
    degreeBachelor: "Bakalárske štúdium · Počítačové siete",
    contactEyebrow: "06 / KONTAKT",
    contactTitle: 'Máš zaujímavú<br><span>technickú výzvu?</span>',
    contactText: "Rád sa porozprávam o technológiách, technických nápadoch a zaujímavých projektoch.",
    formName: "Tvoje meno",
    formEmail: "Tvoj e-mail",
    formMessage: "Správa",
    formSubmit: "Odoslať správu",
    formNote: "Formulár otvorí tvoju e-mailovú aplikáciu.",
    formError: "Skontroluj, prosím, meno, e-mailovú adresu a správu.",
    contactName: "Ján Novák",
    contactEmail: "jan@example.com",
    contactMessage: "Napíš mi o svojom nápade..."
  },

  en: {
    navAbout: "About",
    navExperience: "Experience",
    navStack: "Technologies",
    navProjects: "Projects",
    navContact: "Contact",
    sayHello: 'Say hello <span aria-hidden="true">↗</span>',
    availability: "SOFTWARE ENGINEER · SLOVAKIA",
    heroGreeting: "Hello, my name is",
    heroDescription: "I combine software engineering, cloud-native infrastructure and a security mindset to build reliable systems.",
    exploreWork: 'Explore projects <span aria-hidden="true">↗</span>',
    getInTouch: "Get in touch",
    aboutEyebrow: "01 / ABOUT",
    aboutTitle: "Technology that makes sense.",
    aboutText1: "I am a software engineer from Slovakia. Throughout my career, I have worked in software development, DevOps, cloud infrastructure and automation.",
    aboutText2: "I enjoy designing and building scalable distributed systems, especially in Kubernetes environments.",
    aboutText3: "I am also interested in cybersecurity, security testing and Linux environments.",
    experienceEyebrow: "02 / CAREER",
    experienceTitle: "Work experience",
    experienceSubtitle: "A journey across software development, infrastructure and cloud-native technologies.",
    job1Date: "AUG 2025 — PRESENT",
    job1Text: "Software development, technical architecture and cloud-native technologies, including Kubernetes operators and controllers.",
    job2Text: "Private AI cloud infrastructure, Kubernetes platforms, CI/CD, monitoring, alerting and automation.",
    job3Text: "Infrastructure automation and technical tasks in the DevOps field.",
    job4Title: "Software Developer / DevOps Engineer",
    job4Text: "Experience with software development, Linux systems, application development and infrastructure.",
    stackEyebrow: "03 / TECHNOLOGIES",
    stackTitle: "My tech stack",
    stackSubtitle: "Tools and technologies I have hands-on experience with.",
    stackCloud: "Cloud and infrastructure",
    stackObserve: "Monitoring and observability",
    stackCode: "Programming",
    stackSecurity: "Cybersecurity",
    stackTools: "Tools and platforms",
    projectsEyebrow: "04 / SELECTED PROJECTS",
    projectsTitle: "Things I have built.",
    projectsSubtitle: "Practical projects and technical experiments from my GitHub.",
    project1Text: "A containerized Kali Linux environment for security testing and experimentation.",
    project2Text: "A containerized Parrot OS environment with Core and Security editions and deployment examples.",
    project3Text: "Experiments with Kubernetes workload stress testing and cluster behaviour.",
    project4Text: "A custom Starship prompt configuration and scripts for a more convenient command-line environment.",
    moreGithub: 'More projects on GitHub <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / EDUCATION",
    educationTitle: "The foundations I build on.",
    degreeMaster: "Master's degree · Informatics",
    degreeBachelor: "Bachelor's degree · Computer Networks",
    contactEyebrow: "06 / CONTACT",
    contactTitle: 'Have an interesting<br><span>technical challenge?</span>',
    contactText: "I would be happy to talk about technology, technical ideas and interesting projects.",
    formName: "Your name",
    formEmail: "Your email",
    formMessage: "Message",
    formSubmit: "Send message",
    formNote: "The form will open your email application.",
    formError: "Please check your name, email address and message.",
    contactName: "John Doe",
    contactEmail: "john@example.com",
    contactMessage: "Tell me about your idea..."
  },

  de: {
    navAbout: "Über mich",
    navExperience: "Erfahrung",
    navStack: "Technologien",
    navProjects: "Projekte",
    navContact: "Kontakt",
    sayHello: 'Kontakt aufnehmen <span aria-hidden="true">↗</span>',
    availability: "SOFTWAREINGENIEUR · SLOWAKEI",
    heroGreeting: "Hallo, ich heiße",
    heroDescription: "Ich verbinde Softwareentwicklung, cloud-native Infrastruktur und Sicherheitsdenken, um zuverlässige Systeme zu entwickeln.",
    exploreWork: 'Projekte ansehen <span aria-hidden="true">↗</span>',
    getInTouch: "Kontakt",
    aboutEyebrow: "01 / ÜBER MICH",
    aboutTitle: "Technologie mit Sinn.",
    aboutText1: "Ich bin Software Engineer aus der Slowakei. Im Laufe meiner Karriere habe ich in der Softwareentwicklung, DevOps, Cloud-Infrastruktur und Automatisierung gearbeitet.",
    aboutText2: "Ich entwickle gerne skalierbare verteilte Systeme, insbesondere in Kubernetes-Umgebungen.",
    aboutText3: "Außerdem interessiere ich mich für Cybersecurity, Sicherheitstests und Linux-Umgebungen.",
    experienceEyebrow: "02 / KARRIERE",
    experienceTitle: "Berufserfahrung",
    experienceSubtitle: "Mein Weg durch Softwareentwicklung, Infrastruktur und cloud-native Technologien.",
    job1Date: "AUG 2025 — HEUTE",
    job1Text: "Softwareentwicklung, technische Architektur und cloud-native Technologien, einschließlich Kubernetes Operators und Controller.",
    job2Text: "Private KI-Cloud-Infrastruktur, Kubernetes-Plattformen, CI/CD, Monitoring, Alerting und Automatisierung.",
    job3Text: "Infrastrukturautomatisierung und technische Aufgaben im DevOps-Bereich.",
    job4Title: "Software Developer / DevOps Engineer",
    job4Text: "Erfahrung in Softwareentwicklung, Linux-Systemen, Anwendungsentwicklung und Infrastruktur.",
    stackEyebrow: "03 / TECHNOLOGIEN",
    stackTitle: "Mein Tech-Stack",
    stackSubtitle: "Tools und Technologien, mit denen ich praktische Erfahrung habe.",
    stackCloud: "Cloud und Infrastruktur",
    stackObserve: "Monitoring und Observability",
    stackCode: "Programmierung",
    stackSecurity: "Cybersecurity",
    stackTools: "Tools und Plattformen",
    projectsEyebrow: "04 / AUSGEWÄHLTE PROJEKTE",
    projectsTitle: "Meine Projekte.",
    projectsSubtitle: "Praktische Projekte und technische Experimente auf meinem GitHub.",
    project1Text: "Eine containerisierte Kali-Linux-Umgebung für Sicherheitstests und Experimente.",
    project2Text: "Eine containerisierte Parrot-OS-Umgebung mit Core- und Security-Editionen sowie Bereitstellungsbeispielen.",
    project3Text: "Experimente mit Belastungstests von Kubernetes-Workloads und dem Verhalten des Clusters.",
    project4Text: "Eine eigene Starship-Prompt-Konfiguration und Skripte für eine komfortablere Kommandozeilenumgebung.",
    moreGithub: 'Weitere Projekte auf GitHub <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / AUSBILDUNG",
    educationTitle: "Das Fundament meiner Arbeit.",
    degreeMaster: "Masterstudium · Informatik",
    degreeBachelor: "Bachelorstudium · Computernetzwerke",
    contactEyebrow: "06 / KONTAKT",
    contactTitle: 'Eine interessante<br><span>technische Herausforderung?</span>',
    contactText: "Ich freue mich auf Gespräche über Technologien, technische Ideen und interessante Projekte.",
    formName: "Dein Name",
    formEmail: "Deine E-Mail",
    formMessage: "Nachricht",
    formSubmit: "Nachricht senden",
    formNote: "Das Formular öffnet dein E-Mail-Programm.",
    formError: "Bitte überprüfe deinen Namen, deine E-Mail-Adresse und deine Nachricht.",
    contactName: "Max Mustermann",
    contactEmail: "max@example.com",
    contactMessage: "Erzähl mir von deiner Idee..."
  },

  ar: {
    navAbout: "نبذة عني",
    navExperience: "الخبرة",
    navStack: "التقنيات",
    navProjects: "المشاريع",
    navContact: "اتصل بي",
    sayHello: 'تواصل معي <span aria-hidden="true">↗</span>',
    availability: "مهندس برمجيات · سلوفاكيا",
    heroGreeting: "مرحباً، اسمي",
    heroDescription: "أجمع بين هندسة البرمجيات والبنية التحتية السحابية والتفكير الأمني لبناء أنظمة موثوقة.",
    exploreWork: 'استكشف المشاريع <span aria-hidden="true">↗</span>',
    getInTouch: "تواصل معي",
    aboutEyebrow: "01 / نبذة عني",
    aboutTitle: "تقنية لها هدف.",
    aboutText1: "أنا مهندس برمجيات من سلوفاكيا. عملت خلال مسيرتي في تطوير البرمجيات وDevOps والبنية التحتية السحابية والأتمتة.",
    aboutText2: "أستمتع بتصميم وبناء الأنظمة الموزعة القابلة للتوسع، خصوصاً باستخدام Kubernetes.",
    aboutText3: "أهتم أيضاً بالأمن السيبراني واختبارات الأمان وبيئات Linux.",
    experienceEyebrow: "02 / المسيرة المهنية",
    experienceTitle: "الخبرة العملية",
    experienceSubtitle: "مسيرة تجمع بين تطوير البرمجيات والبنية التحتية والتقنيات السحابية الحديثة.",
    job1Date: "أغسطس 2025 — حتى الآن",
    job1Text: "تطوير البرمجيات والهندسة التقنية والتقنيات السحابية، بما في ذلك Kubernetes Operators وControllers.",
    job2Text: "البنية التحتية السحابية الخاصة بالذكاء الاصطناعي ومنصات Kubernetes وCI/CD والمراقبة والتنبيهات والأتمتة.",
    job3Text: "أتمتة البنية التحتية والمهام التقنية في مجال DevOps.",
    job4Title: "مطور برمجيات / مهندس DevOps",
    job4Text: "خبرة في تطوير البرمجيات وأنظمة Linux وتطوير التطبيقات والبنية التحتية.",
    stackEyebrow: "03 / التقنيات",
    stackTitle: "مجموعة تقنياتي",
    stackSubtitle: "الأدوات والتقنيات التي أمتلك خبرة عملية بها.",
    stackCloud: "السحابة والبنية التحتية",
    stackObserve: "المراقبة وقابلية الرصد",
    stackCode: "البرمجة",
    stackSecurity: "الأمن السيبراني",
    stackTools: "الأدوات والمنصات",
    projectsEyebrow: "04 / مشاريع مختارة",
    projectsTitle: "مشاريع قمت ببنائها.",
    projectsSubtitle: "مشاريع عملية وتجارب تقنية على GitHub.",
    project1Text: "بيئة Kali Linux تعمل داخل حاويات لاختبارات الأمان والتجارب.",
    project2Text: "بيئة Parrot OS داخل حاويات بإصداري Core وSecurity مع أمثلة للنشر.",
    project3Text: "تجارب لاختبار ضغط أحمال Kubernetes وسلوك العنقود.",
    project4Text: "إعداد مخصص لموجه Starship ونصوص برمجية لتحسين بيئة سطر الأوامر.",
    moreGithub: 'المزيد من المشاريع على GitHub <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / التعليم",
    educationTitle: "الأساس الذي أبني عليه.",
    degreeMaster: "درجة الماجستير · المعلوماتية",
    degreeBachelor: "درجة البكالوريوس · شبكات الحاسوب",
    contactEyebrow: "06 / التواصل",
    contactTitle: 'هل لديك<br><span>تحدٍ تقني مثير؟</span>',
    contactText: "يسعدني التحدث عن التقنيات والأفكار التقنية والمشاريع المثيرة للاهتمام.",
    formName: "اسمك",
    formEmail: "بريدك الإلكتروني",
    formMessage: "الرسالة",
    formSubmit: "إرسال الرسالة",
    formNote: "سيفتح النموذج تطبيق البريد الإلكتروني لديك.",
    formError: "يرجى التحقق من الاسم والبريد الإلكتروني والرسالة.",
    contactName: "الاسم الكامل",
    contactEmail: "name@example.com",
    contactMessage: "أخبرني عن فكرتك..."
  },

  ja: {
    navAbout: "プロフィール",
    navExperience: "職務経験",
    navStack: "技術",
    navProjects: "プロジェクト",
    navContact: "お問い合わせ",
    sayHello: 'お問い合わせ <span aria-hidden="true">↗</span>',
    availability: "ソフトウェアエンジニア · スロバキア",
    heroGreeting: "こんにちは、",
    heroDescription: "ソフトウェア開発、クラウドネイティブなインフラ、セキュリティの視点を組み合わせ、信頼性の高いシステムを構築しています。",
    exploreWork: 'プロジェクトを見る <span aria-hidden="true">↗</span>',
    getInTouch: "お問い合わせ",
    aboutEyebrow: "01 / プロフィール",
    aboutTitle: "価値を生み出すテクノロジー。",
    aboutText1: "スロバキアを拠点とするソフトウェアエンジニアです。これまでソフトウェア開発、DevOps、クラウドインフラ、自動化に携わってきました。",
    aboutText2: "特に Kubernetes 環境で、スケーラブルな分散システムを設計・構築することに関心があります。",
    aboutText3: "サイバーセキュリティ、セキュリティテスト、Linux 環境にも関心があります。",
    experienceEyebrow: "02 / キャリア",
    experienceTitle: "職務経験",
    experienceSubtitle: "ソフトウェア開発、インフラ、クラウドネイティブ技術にわたる経験。",
    job1Date: "2025年8月 — 現在",
    job1Text: "Kubernetes Operator や Controller を含む、ソフトウェア開発、技術アーキテクチャ、クラウドネイティブ技術。",
    job2Text: "プライベートAIクラウドインフラ、Kubernetesプラットフォーム、CI/CD、監視、アラート、自動化。",
    job3Text: "インフラの自動化および DevOps 分野の技術業務。",
    job4Title: "ソフトウェア開発者 / DevOps エンジニア",
    job4Text: "ソフトウェア開発、Linux システム、アプリケーション開発、インフラに関する経験。",
    stackEyebrow: "03 / 技術",
    stackTitle: "技術スタック",
    stackSubtitle: "実務経験のあるツールと技術。",
    stackCloud: "クラウドとインフラ",
    stackObserve: "監視と可観測性",
    stackCode: "プログラミング",
    stackSecurity: "サイバーセキュリティ",
    stackTools: "ツールとプラットフォーム",
    projectsEyebrow: "04 / プロジェクト",
    projectsTitle: "これまでに作ったもの。",
    projectsSubtitle: "GitHub で公開している実践的なプロジェクトと技術的な実験。",
    project1Text: "セキュリティテストや実験向けのコンテナ化された Kali Linux 環境。",
    project2Text: "Core と Security エディションおよびデプロイ例を備えたコンテナ化 Parrot OS 環境。",
    project3Text: "Kubernetes ワークロードの負荷テストとクラスター動作に関する実験。",
    project4Text: "Starship プロンプトのカスタム設定と、コマンドライン環境を改善するスクリプト。",
    moreGithub: 'GitHub のその他のプロジェクト <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / 学歴",
    educationTitle: "仕事を支える基礎。",
    degreeMaster: "修士課程 · 情報学",
    degreeBachelor: "学士課程 · コンピュータネットワーク",
    contactEyebrow: "06 / お問い合わせ",
    contactTitle: '興味深い<br><span>技術的な課題はありますか？</span>',
    contactText: "技術、技術的なアイデア、興味深いプロジェクトについてぜひお話ししましょう。",
    formName: "お名前",
    formEmail: "メールアドレス",
    formMessage: "メッセージ",
    formSubmit: "メッセージを送信",
    formNote: "フォームを送信するとメールアプリが開きます。",
    formError: "名前、メールアドレス、メッセージを確認してください。",
    contactName: "氏名",
    contactEmail: "name@example.com",
    contactMessage: "アイデアについて教えてください..."
  },

  fr: {
    navAbout: "À propos",
    navExperience: "Expérience",
    navStack: "Technologies",
    navProjects: "Projets",
    navContact: "Contact",
    sayHello: 'Me contacter <span aria-hidden="true">↗</span>',
    availability: "INGÉNIEUR LOGICIEL · SLOVAQUIE",
    heroGreeting: "Bonjour, je m'appelle",
    heroDescription: "J'associe le développement logiciel, les infrastructures cloud-native et une approche axée sur la sécurité pour construire des systèmes fiables.",
    exploreWork: 'Voir les projets <span aria-hidden="true">↗</span>',
    getInTouch: "Me contacter",
    aboutEyebrow: "01 / À PROPOS",
    aboutTitle: "La technologie qui a du sens.",
    aboutText1: "Je suis ingénieur logiciel originaire de Slovaquie. Au cours de ma carrière, j'ai travaillé dans le développement logiciel, le DevOps, les infrastructures cloud et l'automatisation.",
    aboutText2: "J'aime concevoir et construire des systèmes distribués évolutifs, notamment dans des environnements Kubernetes.",
    aboutText3: "Je m'intéresse également à la cybersécurité, aux tests de sécurité et aux environnements Linux.",
    experienceEyebrow: "02 / CARRIÈRE",
    experienceTitle: "Expérience professionnelle",
    experienceSubtitle: "Un parcours entre développement logiciel, infrastructures et technologies cloud-native.",
    job1Date: "AOÛT 2025 — AUJOURD'HUI",
    job1Text: "Développement logiciel, architecture technique et technologies cloud-native, notamment les opérateurs et contrôleurs Kubernetes.",
    job2Text: "Infrastructure cloud privée pour l'IA, plateformes Kubernetes, CI/CD, supervision, alertes et automatisation.",
    job3Text: "Automatisation des infrastructures et tâches techniques dans le domaine du DevOps.",
    job4Title: "Développeur logiciel / Ingénieur DevOps",
    job4Text: "Expérience en développement logiciel, systèmes Linux, développement d'applications et infrastructures.",
    stackEyebrow: "03 / TECHNOLOGIES",
    stackTitle: "Ma stack technique",
    stackSubtitle: "Outils et technologies que j'utilise en pratique.",
    stackCloud: "Cloud et infrastructure",
    stackObserve: "Supervision et observabilité",
    stackCode: "Programmation",
    stackSecurity: "Cybersécurité",
    stackTools: "Outils et plateformes",
    projectsEyebrow: "04 / PROJETS SÉLECTIONNÉS",
    projectsTitle: "Ce que j'ai créé.",
    projectsSubtitle: "Projets pratiques et expérimentations techniques disponibles sur mon GitHub.",
    project1Text: "Un environnement Kali Linux conteneurisé pour les tests de sécurité et l'expérimentation.",
    project2Text: "Un environnement Parrot OS conteneurisé avec les éditions Core et Security et des exemples de déploiement.",
    project3Text: "Expérimentations autour des tests de charge des workloads Kubernetes et du comportement des clusters.",
    project4Text: "Une configuration personnalisée de Starship et des scripts pour améliorer l'environnement en ligne de commande.",
    moreGithub: 'Plus de projets sur GitHub <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / FORMATION",
    educationTitle: "Les bases sur lesquelles je construis.",
    degreeMaster: "Master · Informatique",
    degreeBachelor: "Licence · Réseaux informatiques",
    contactEyebrow: "06 / CONTACT",
    contactTitle: 'Un défi technique<br><span>intéressant à relever ?</span>',
    contactText: "Je serais ravi d'échanger sur les technologies, les idées techniques et les projets intéressants.",
    formName: "Votre nom",
    formEmail: "Votre e-mail",
    formMessage: "Message",
    formSubmit: "Envoyer le message",
    formNote: "Le formulaire ouvrira votre application de messagerie.",
    formError: "Veuillez vérifier votre nom, votre adresse e-mail et votre message.",
    contactName: "Jean Dupont",
    contactEmail: "jean@example.com",
    contactMessage: "Parlez-moi de votre idée..."
  },

  it: {
    navAbout: "Chi sono",
    navExperience: "Esperienza",
    navStack: "Tecnologie",
    navProjects: "Progetti",
    navContact: "Contatti",
    sayHello: 'Contattami <span aria-hidden="true">↗</span>',
    availability: "INGEGNERE SOFTWARE · SLOVACCHIA",
    heroGreeting: "Ciao, mi chiamo",
    heroDescription: "Unisco sviluppo software, infrastrutture cloud-native e attenzione alla sicurezza per creare sistemi affidabili.",
    exploreWork: 'Scopri i progetti <span aria-hidden="true">↗</span>',
    getInTouch: "Contattami",
    aboutEyebrow: "01 / CHI SONO",
    aboutTitle: "Tecnologia che ha senso.",
    aboutText1: "Sono un ingegnere software slovacco. Nel corso della mia carriera ho lavorato nello sviluppo software, DevOps, infrastrutture cloud e automazione.",
    aboutText2: "Mi piace progettare e realizzare sistemi distribuiti scalabili, soprattutto in ambienti Kubernetes.",
    aboutText3: "Mi interessano anche la cybersecurity, i test di sicurezza e gli ambienti Linux.",
    experienceEyebrow: "02 / CARRIERA",
    experienceTitle: "Esperienza professionale",
    experienceSubtitle: "Un percorso tra sviluppo software, infrastrutture e tecnologie cloud-native.",
    job1Date: "AGO 2025 — PRESENTE",
    job1Text: "Sviluppo software, architettura tecnica e tecnologie cloud-native, inclusi operator e controller Kubernetes.",
    job2Text: "Infrastruttura cloud privata per l'AI, piattaforme Kubernetes, CI/CD, monitoraggio, alerting e automazione.",
    job3Text: "Automazione delle infrastrutture e attività tecniche nell'ambito DevOps.",
    job4Title: "Sviluppatore software / DevOps Engineer",
    job4Text: "Esperienza nello sviluppo software, nei sistemi Linux, nello sviluppo di applicazioni e nelle infrastrutture.",
    stackEyebrow: "03 / TECNOLOGIE",
    stackTitle: "Il mio stack tecnologico",
    stackSubtitle: "Strumenti e tecnologie con cui ho esperienza pratica.",
    stackCloud: "Cloud e infrastruttura",
    stackObserve: "Monitoraggio e osservabilità",
    stackCode: "Programmazione",
    stackSecurity: "Cybersecurity",
    stackTools: "Strumenti e piattaforme",
    projectsEyebrow: "04 / PROGETTI SELEZIONATI",
    projectsTitle: "Quello che ho realizzato.",
    projectsSubtitle: "Progetti pratici ed esperimenti tecnici disponibili sul mio GitHub.",
    project1Text: "Un ambiente Kali Linux containerizzato per test di sicurezza e sperimentazione.",
    project2Text: "Un ambiente Parrot OS containerizzato con edizioni Core e Security ed esempi di distribuzione.",
    project3Text: "Esperimenti con test di carico dei workload Kubernetes e comportamento del cluster.",
    project4Text: "Una configurazione personalizzata di Starship e script per migliorare l'ambiente a riga di comando.",
    moreGithub: 'Altri progetti su GitHub <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / FORMAZIONE",
    educationTitle: "Le basi su cui costruisco.",
    degreeMaster: "Laurea magistrale · Informatica",
    degreeBachelor: "Laurea triennale · Reti informatiche",
    contactEyebrow: "06 / CONTATTI",
    contactTitle: 'Hai una sfida<br><span>tecnica interessante?</span>',
    contactText: "Mi fa piacere parlare di tecnologia, idee tecniche e progetti interessanti.",
    formName: "Il tuo nome",
    formEmail: "La tua e-mail",
    formMessage: "Messaggio",
    formSubmit: "Invia messaggio",
    formNote: "Il modulo aprirà la tua applicazione di posta elettronica.",
    formError: "Controlla il nome, l'indirizzo e-mail e il messaggio.",
    contactName: "Mario Rossi",
    contactEmail: "mario@example.com",
    contactMessage: "Raccontami la tua idea..."
  },

  pl: {
    navAbout: "O mnie",
    navExperience: "Doświadczenie",
    navStack: "Technologie",
    navProjects: "Projekty",
    navContact: "Kontakt",
    sayHello: 'Napisz do mnie <span aria-hidden="true">↗</span>',
    availability: "INŻYNIER OPROGRAMOWANIA · SŁOWACJA",
    heroGreeting: "Cześć, nazywam się",
    heroDescription: "Łączę tworzenie oprogramowania, infrastrukturę cloud-native i podejście oparte na bezpieczeństwie, aby budować niezawodne systemy.",
    exploreWork: 'Zobacz projekty <span aria-hidden="true">↗</span>',
    getInTouch: "Skontaktuj się",
    aboutEyebrow: "01 / O MNIE",
    aboutTitle: "Technologia, która ma sens.",
    aboutText1: "Jestem inżynierem oprogramowania ze Słowacji. W swojej karierze zajmowałem się tworzeniem oprogramowania, DevOps, infrastrukturą chmurową i automatyzacją.",
    aboutText2: "Lubię projektować i budować skalowalne systemy rozproszone, szczególnie w środowiskach Kubernetes.",
    aboutText3: "Interesuję się również cyberbezpieczeństwem, testami bezpieczeństwa i środowiskami Linux.",
    experienceEyebrow: "02 / KARIERA",
    experienceTitle: "Doświadczenie zawodowe",
    experienceSubtitle: "Ścieżka obejmująca rozwój oprogramowania, infrastrukturę i technologie cloud-native.",
    job1Date: "SIE 2025 — OBECNIE",
    job1Text: "Tworzenie oprogramowania, architektura techniczna i technologie cloud-native, w tym operatory i kontrolery Kubernetes.",
    job2Text: "Prywatna infrastruktura chmurowa AI, platformy Kubernetes, CI/CD, monitoring, alertowanie i automatyzacja.",
    job3Text: "Automatyzacja infrastruktury i zadania techniczne w obszarze DevOps.",
    job4Title: "Programista oprogramowania / DevOps Engineer",
    job4Text: "Doświadczenie w tworzeniu oprogramowania, systemach Linux, rozwoju aplikacji i infrastrukturze.",
    stackEyebrow: "03 / TECHNOLOGIE",
    stackTitle: "Mój stack technologiczny",
    stackSubtitle: "Narzędzia i technologie, z którymi mam praktyczne doświadczenie.",
    stackCloud: "Chmura i infrastruktura",
    stackObserve: "Monitoring i obserwowalność",
    stackCode: "Programowanie",
    stackSecurity: "Cyberbezpieczeństwo",
    stackTools: "Narzędzia i platformy",
    projectsEyebrow: "04 / WYBRANE PROJEKTY",
    projectsTitle: "Projekty, które stworzyłem.",
    projectsSubtitle: "Praktyczne projekty i eksperymenty techniczne dostępne na moim GitHubie.",
    project1Text: "Skonteneryzowane środowisko Kali Linux do testów bezpieczeństwa i eksperymentów.",
    project2Text: "Skonteneryzowane środowisko Parrot OS z edycjami Core i Security oraz przykładami wdrożeń.",
    project3Text: "Eksperymenty z testami obciążeniowymi workloadów Kubernetes i zachowaniem klastra.",
    project4Text: "Własna konfiguracja promptu Starship i skrypty usprawniające środowisko wiersza poleceń.",
    moreGithub: 'Więcej projektów na GitHubie <span aria-hidden="true">↗</span>',
    educationEyebrow: "05 / WYKSZTAŁCENIE",
    educationTitle: "Podstawy, na których buduję.",
    degreeMaster: "Studia magisterskie · Informatyka",
    degreeBachelor: "Studia licencjackie · Sieci komputerowe",
    contactEyebrow: "06 / KONTAKT",
    contactTitle: 'Masz ciekawe<br><span>wyzwanie techniczne?</span>',
    contactText: "Chętnie porozmawiam o technologiach, pomysłach technicznych i interesujących projektach.",
    formName: "Twoje imię",
    formEmail: "Twój adres e-mail",
    formMessage: "Wiadomość",
    formSubmit: "Wyślij wiadomość",
    formNote: "Formularz otworzy Twoją aplikację pocztową.",
    formError: "Sprawdź imię, adres e-mail i treść wiadomości.",
    contactName: "Jan Kowalski",
    contactEmail: "jan@example.com",
    contactMessage: "Opowiedz mi o swoim pomyśle lub propozycji współpracy..."
  }
};


/* =========================================================
   PAGE METADATA
   The academic title Ing. is preserved in every language.
========================================================= */

const titles = {
  sk: "Ing. Juraj Žittňanský | Softvérový inžinier",
  en: "Ing. Juraj Žittňanský | Software Engineer",
  de: "Ing. Juraj Žittňanský | Software Engineer",
  ar: "Ing. Juraj Žittňanský | مهندس برمجيات",
  ja: "Ing. Juraj Žittňanský | ソフトウェアエンジニア",
  fr: "Ing. Juraj Žittňanský | Ingénieur logiciel",
  it: "Ing. Juraj Žittňanský | Ingegnere del software",
  pl: "Ing. Juraj Žittňanský | Inżynier oprogramowania"
};

const descriptions = {
  sk: "Ing. Juraj Žittňanský — softvérový inžinier so zameraním na Kubernetes, cloudovú infraštruktúru, distribuované systémy, DevOps a cybersecurity.",
  en: "Ing. Juraj Žittňanský — Software Engineer focused on Kubernetes, cloud infrastructure, distributed systems, DevOps and cybersecurity.",
  de: "Ing. Juraj Žittňanský — Software Engineer mit Schwerpunkt auf Kubernetes, Cloud-Infrastruktur, verteilten Systemen, DevOps und Cybersecurity.",
  ar: "Ing. Juraj Žittňanský — مهندس برمجيات متخصص في Kubernetes والبنية التحتية السحابية والأنظمة الموزعة وDevOps والأمن السيبراني.",
  ja: "Ing. Juraj Žittňanský — Kubernetes、クラウドインフラ、分散システム、DevOps、サイバーセキュリティを専門とするソフトウェアエンジニア。",
  fr: "Ing. Juraj Žittňanský — ingénieur logiciel spécialisé dans Kubernetes, les infrastructures cloud, les systèmes distribués, le DevOps et la cybersécurité.",
  it: "Ing. Juraj Žittňanský — ingegnere software specializzato in Kubernetes, infrastrutture cloud, sistemi distribuiti, DevOps e cybersecurity.",
  pl: "Ing. Juraj Žittňanský — inżynier oprogramowania specjalizujący się w Kubernetes, infrastrukturze chmurowej, systemach rozproszonych, DevOps i cyberbezpieczeństwie."
};

const ogLocales = {
  sk: "sk_SK",
  en: "en_US",
  de: "de_DE",
  ar: "ar_AR",
  ja: "ja_JP",
  fr: "fr_FR",
  it: "it_IT",
  pl: "pl_PL"
};

const supportedLanguages = Object.keys(translations);
const languageSelect = document.querySelector("#languageSelect");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");


/* =========================================================
   LANGUAGE SWITCHING
========================================================= */

function setLanguage(language, savePreference = true) {
  const selectedLanguage = supportedLanguages.includes(language)
    ? language
    : "sk";

  const t = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir =
    selectedLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(t, key)) {
      element.innerHTML = t[key];
    } else {
      console.warn(`Missing translation: ${selectedLanguage}.${key}`);
    }
  });

  // Translate placeholders using the data-i18n-placeholder attribute.
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (Object.prototype.hasOwnProperty.call(t, key)) {
      element.placeholder = t[key];
    }
  });

  // Update page title and SEO description.
  document.title = titles[selectedLanguage];

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.content = descriptions[selectedLanguage];
  }

  const authorMeta = document.querySelector('meta[name="author"]');
  if (authorMeta) {
    authorMeta.content = `Ing. Juraj Žittňanský`;
  }

  // Open Graph metadata.
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');

  if (ogTitle) {
    ogTitle.content = titles[selectedLanguage];
  }

  if (ogDescription) {
    ogDescription.content = descriptions[selectedLanguage];
  }

  if (ogLocale) {
    ogLocale.content = ogLocales[selectedLanguage];
  }

  // Twitter metadata.
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  if (twitterTitle) {
    twitterTitle.content = titles[selectedLanguage];
  }

  if (twitterDescription) {
    twitterDescription.content = descriptions[selectedLanguage];
  }

  // Update the language selector.
  if (languageSelect) {
    languageSelect.value = selectedLanguage;
  }

  // Save preference only after an intentional selection or valid initialization.
  if (savePreference) {
    try {
      localStorage.setItem("preferredLanguage", selectedLanguage);
    } catch (error) {
      console.warn("Could not save language preference:", error);
    }
  }
  if (menuToggle) {
    const labels = {
      sk: "Otvoriť navigáciu",
      en: "Open navigation",
      de: "Navigation öffnen",
      ar: "فتح القائمة",
      ja: "ナビゲーションを開く",
      fr: "Ouvrir la navigation",
      it: "Apri la navigazione",
      pl: "Otwórz nawigację"
    };

    menuToggle.setAttribute(
      "aria-label",
      labels[selectedLanguage]
    );
  }
}


/* =========================================================
   LANGUAGE INITIALIZATION
   First-time visitors always see Slovak.
========================================================= */

let initialLanguage = "sk";

try {
  const savedLanguage = localStorage.getItem("preferredLanguage");

  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    initialLanguage = savedLanguage;
  }
} catch (error) {
  console.warn("Could not read language preference:", error);
}

setLanguage(initialLanguage, false);


/* =========================================================
   LANGUAGE SELECTOR
========================================================= */

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value, true);
  });
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function closeMobileNavigation() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");

  const language = document.documentElement.lang;

  const labels = {
    sk: "Otvoriť navigáciu",
    en: "Open navigation",
    de: "Navigation öffnen",
    ar: "فتح القائمة",
    ja: "ナビゲーションを開く",
    fr: "Ouvrir la navigation",
    it: "Apri la navigazione",
    pl: "Otwórz nawigację"
  };

  menuToggle.setAttribute(
    "aria-label",
    labels[language] || labels.sk
  );
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    const language = document.documentElement.lang;

    const labels = {
      sk: isOpen ? "Zavrieť navigáciu" : "Otvoriť navigáciu",
      en: isOpen ? "Close navigation" : "Open navigation",
      de: isOpen ? "Navigation schließen" : "Navigation öffnen",
      ar: isOpen ? "إغلاق القائمة" : "فتح القائمة",
      ja: isOpen ? "ナビゲーションを閉じる" : "ナビゲーションを開く",
      fr: isOpen ? "Fermer la navigation" : "Ouvrir la navigation",
      it: isOpen ? "Chiudi la navigazione" : "Apri la navigazione",
      pl: isOpen ? "Zamknij nawigację" : "Otwórz nawigację"
    };

    menuToggle.setAttribute(
      "aria-label",
      labels[language] || labels.sk
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      closeMobileNavigation();
      menuToggle.focus();
    }
  });
}


/* =========================================================
   CONTACT FORM
   Opens the user's default email application.
========================================================= */

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();

    const language = document.documentElement.lang || "sk";
    const t = translations[language] || translations.sk;

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !message || !emailIsValid) {
      if (formStatus) {
        formStatus.textContent = t.formError;
      }
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    const mailtoUrl =
      `mailto:zittnansky.juraj@gmail.com?subject=${subject}&body=${body}`;

    if (formStatus) {
      formStatus.textContent = t.formNote;
    }

    window.location.href = mailtoUrl;
  });
}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}