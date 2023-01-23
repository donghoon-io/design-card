export let reference = [
    "Chaudry, B. M., Connelly, K. H., Siek, K. A., & Welch, J. L. (2012, January). Mobile interface design for low-literacy populations. In Proceedings of the 2nd ACM SIGHIT international health informatics symposium (pp. 91-100).",
    "McNally, B., Kumar, P., Hordatt, C., Mauriello, M. L., Naik, S., Norooz, L., ... & Druin, A. (2018, April). Co-designing mobile online safety applications with children. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (pp. 1-9).",
    "Schneider, T., Hois, J., Rosenstein, A., Ghellal, S., Theofanou-Fülbier, D., & Gerlicher, A. R. (2021, May). Explain yourself! transparency for positive ux in autonomous driving. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (pp. 1-12)."
]

export let paper_infos = [
    "In this study, the authors found that the low-literacy population preferred larger and medium-sized widgets, as well as radio buttons, when using touch screen interfaces on mobile devices. This suggests that designers should create larger widgets with feedback mechanisms to better accommodate this population.",
    "The authors conducted two co-design sessions with 12 children to investigate their perceptions of parental mobile monitoring technologies and explore their interaction preferences. The results showed that children accepted certain parental controls, and preferred controls that emphasized restriction, taught risk coping, and automated interactions.",
    "The authors evaluated the effects of transparency on the UX of autonomous driving, and found that explanations during/after the ride can help mitigate negative user experience. They contribute an initial guideline for autonomous driving experience design, combining the areas of UX, explainable AI, and autonomous driving."
]

export let titles = [
    [
        {
            value: "Designing bigger widgets and visualizing interactions",
            name: "Gerund format",
        },
        {
            value: "Make widgets bigger and visualize interactions",
            name: "Verb format",
        },
        {
            value: "Widgets and interactions",
            name: "Short noun"
        },
        {
            value: "Big widgets and visualized interactions",
            name: "Long noun",
        }
    ],
    [
        {
            value: "Balancing parental mobile monitoring",
            name: "Gerund format",
        },
        {
            value: "Balance monitoring and child's privacy",
            name: "Verb format",
        },
        {
            value: "Parental mobile monitoring",
            name: "Short noun" },
        {
            value: "Balance between monitoring and the privacy of children",
            name: "Long noun",
        }
    ],
    [
        {
            value: "Explaining ride to improve UX",
            name: "Gerund format",
        },
        {
            value: "Explain driving environment real-time to improve UX",
            name: "Verb format",
        },
        {
            value: "Live explanation of rides",
            name: "Short noun" },
        {
            value: "Explanation of rides in a real-time which can improve UX",
            name: "Long noun",
        }
    ]
];
export let design_implications = [
    [
        {
            name: "Short",
            value: "When designing for low-literacy population, widgets should be bigger and interactions should be visualized.",
        },
        {
            name: "Mid-length",
            value: "Designers should design widgets that are bigger in size and allow the user to visualize interactions while designing for low-literacy population.",
        },
        {
            name: "Long",
            value: "Given that low-literacy population in this study preferred bigger widgets, such as radio buttons, and visualized interactions, designers should consider including bigger widgets and interaction visualization in their design.",
        },
    ],
    [
        {
            name: "Short",
            value: "Parental mobile monitoring apps should restrict monitoring or actively incorporate (semi-)automated monitoring.",
        },
        {
            name: "Mid-length",
            value: "Parental mobile monitoring applications should restrict monitoring or actively incorporate semi-automated/automated monitoring to help protect children's privacy.",
        },
        {
            name: "Long",
            value: "Parental mobile monitoring applications should emphasize the use of restriction over monitoring features and incorporate automated or semi-automated monitoring approaches to help protect children while maintaining a layer of privacy.",
        },
    ],
    [
        {
            name: "Short",
            value: "Live explanations should be provided to help neutralize the negative effects on the UX.",
        },
        {
            name: "Mid-length",
            value: "Live explanations should be provided to neutralise the possible negative effects of autonomous driving on the user experience.",
        },
        {
            name: "Long",
            value: "Live explanations of the driving should be provided to passengers in order to neutralise the possible negative effects autonomous driving has on the user experience.",
        },
    ]
];
export let images = [
    { value: 1, name: "B&W - Abstract" },
    { value: 2, name: "B&W - Realistic" },
    { value: 3, name: "Color - Abstract" },
    { value: 4, name: "Color - Realistic" }
];

export let descriptions = [
    [
        {
            name: "Short",
            text: "Low-literacy users prefer and perform better with larger or medium-sized widgets (e.g., radio buttons), which provide feedback to the user. Designers should consider this when designing widgets for touch screen interfaces of mobile devices.",
            value: 1
        },
        {
            name: "Long",
            text: "Low-literacy population can effectively use GUI widgets and navigation structures on touch screen interfaces. They prefer bigger or medium-sized widgets, and radio buttons work best due to the feedback mechanism. Thus, designers should therefore create widgets that are bigger in size and provide visual feedback to users.",
            value: 2
        },
        {
            name: "Reference",
            text: "Despite the mixed performance, we had a good response from participants on the usefulness of the cross-linked navigation bar. One participant commented, “I would rather use the small pictures on the top to save me from going HOME every time.” Another said, “The tabs were not big enough but they were helpful in giving options.” One more said, “It challenged me to think more about what I was doing.”",
            page: "98",
            value: 3
        },
    ],
    [
        {
            name: "Short",
            text: "Parental mobile monitoring applications should emphasize the use of restriction over monitoring features and incorporate automated or semi-automated approaches in order to protect children while maintaining a layer of privacy and offering time savings for parents.",
            value: 1
        },
        {
            name: "Long",
            text: "Children's designs for parental mobile monitoring applications emphasize the use of restriction over monitoring features, as well as automated or semi-automated monitoring approaches to help protect children while maintaining a layer of privacy. These approaches could create congruence between mobile monitoring activities and the highly varied ways families manage technology use.",
            value: 2
        },
        {
            name: "Reference",
            text: "Children’s designs incorporated automatic interventions across features focused on both self-regulation and parental control. For instance, children designed features for the automatic restriction of contacts when a threat was encountered, a task usually designated to parents: “So, if somebody says a bad word [the app] will automatically say, ‘This person said a bad word. He or she will be blocked so that person can’t talk with you anymore’.” (P9)",
            page: "523",
            value: 3
        },
    ],
    [
        {
            name: "Short",
            text: "Providing live explanations during an autonomous driving scenario had a positive effect on the user experience, while the mobile application afterwards had a different effect depending on whether the passengers had received the live explanations or not.",
            value: 1
        },
        {
            name: "Long",
            text: "The effects of system explanations on the user experience in an autonomous driving scenario was investigated, suggesting that live explanations were sufficient to neutralise the negative effects on the UX. Additionally, the mobile application after the drive was found to be beneficial for those with no live explanations.",
            value: 2
        },
        {
            name: "Reference",
            text: "Participants rated the drive without live explanations (Adrive) with a neutral PQ (M=-0.59, α=0.67), a negative HQ (M=-1.41, α=0.88) leading to a negative overall score (M=-1.00). They rated the mobile application after the drive without live explanations (Aapp) with a neutral PQ (M=0.06, α=0.55) and a neutral HQ (M=- 0.26, α=0.86) leading to a neutral overall score (M=-0.08). For the drive with live explanations (Bdrive) participants evaluated the PQ (M=0.18, α=0.89) and the HQ as neutral (M=-0.51, α=0.71) which resulted in a neutral overall score (M=-0.17). The mobile application after the drive with explanations (Bapp) was rated with a neutral PQ (M=0.30, α=0.90), a neutral HQ (M=-0.50, (α=0.89) and a neutral overallscore (M=-0.10) by the participants.",
            page: "7",
            value: 3
        },
    ]
];