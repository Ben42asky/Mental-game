import type { Scenarios } from "@/types"

export const scenarios: Scenarios = {
  sports: {
    title: "Sports",
    image: "/sports.png?height=400&width=400",
    scenes: [
      {
        question: "What advice would you give the athlete before the race?",
        description:
          "The athlete is feeling nervous as they stand at the starting blocks. Their heart is racing, and they can see their competitors warming up.",
        image: "/sports_scene1.png?height=400&width=400",
        options: [
          {
            text: "Take a deep breath and visualize success",
            feedback: "Why this matters:",
            consequences:
              "Deep breathing reduces anxiety and visualization helps prepare mentally for optimal performance",
          },
          {
            text: "Focus on the competitors' weaknesses",
            feedback: "Why this doesn't matter:",
            consequences: "Focusing on others takes away from your own preparation and increases anxiety",
          },
          {
            text: "Distract yourself with the crowd",
            feedback: "Why this doesn't matter:",
            consequences: "Distractions break concentration and preparation, leading to poor performance",
          },
        ],
        positive: 0,
      },
      {
        question: "How do you think the athlete will handle a delay?",
        description:
          "A slight delay has been announced before the race begins. The athlete must decide how to stay focused despite the unexpected situation.",
        image: "/sports_scene2.png?height=400&width=400",
        options: [
          {
            text: "Panic and feel tense",
            feedback: "Why this doesn't matter:",
            consequences: "Panicking wastes valuable energy and increases stress hormones",
          },
          {
            text: "Chat with competitors to pass time",
            feedback: "Why this matters:",
            consequences: "Light conversation helps maintain a relaxed state while staying mentally prepared",
          },
          {
            text: "Calmly stay focused on their technique",
            feedback: "Why this doesn't matter:",
            consequences: "Too much focus during a delay can be mentally exhausting",
          },
        ],
        positive: 1,
      },
    ],
    feedback: {
      positive: "The athlete stayed focused and performed excellently!",
      negative: "The athlete was distracted and lost their focus",
    },
  },
  speech: {
    title: "Public Speaking",
    image: "/speech.png?height=400&width=400",
    scenes: [
      {
        question: "What advice would you give the student as they walk to the stage?",
        description:
          "The student is about to walk to the stage for their speech. They feel nervous as the audience watches them move toward the podium.",
        image: "/speech_scene1.png?height=400&width=400",
        options: [
          {
            text: "Mentally rehearse your introduction",
            feedback: "Why this doesn't matter:",
            consequences: "Last-minute rehearsal while walking can increase anxiety and make you appear distracted",
          },
          {
            text: "Worry about audience reactions",
            feedback: "Why this doesn't matter:",
            consequences: "Focusing on potential negative reactions increases anxiety and affects confidence",
          },
          {
            text: "Keep a steady pace and focus on the podium",
            feedback: "Why this matters:",
            consequences: "A confident walk sets the tone for your speech and helps maintain composure",
          },
        ],
        positive: 2,
      },
      {
        question: "How do you think the student will handle a technical delay?",
        description:
          "The microphone is not working properly, causing a slight delay. The student needs to decide how to respond to this unexpected situation.",
        image: "/speech_scene2.png?height=400&width=400",
        options: [
          {
            text: "Take a deep breath and stay calm",
            feedback: "Why this matters:",
            consequences: "Staying calm during technical difficulties shows professionalism and maintains confidence",
          },
          {
            text: "Panic and forget their lines",
            feedback: "Why this doesn't matter:",
            consequences: "Panicking leads to memory blanks and makes the situation worse",
          },
          {
            text: "Mentally rehearse while waiting",
            feedback: "Why this doesn't matter:",
            consequences:
              "Excessive rehearsal during delays can increase anxiety and disconnect you from the situation",
          },
        ],
        positive: 0,
      },
    ],
    feedback: {
      positive: "The student delivered their speech with confidence",
      negative: "The student struggled with nerves and stumbled through",
    },
  },
  artist: {
    title: "Art Exhibition",
    image: "/artist.png?height=400&width=400",
    scenes: [
      {
        question: "What advice would you give the artist before unveiling their painting?",
        description: "The artist stands nervously in front of a crowd, waiting to unveil their latest masterpiece.",
        image: "/artist_scene1.png?height=200&width=400",
        options: [
          {
            text: "Remind yourself of the effort and creativity you put into the work",
            feedback: "Why this matters:",
            consequences: "Remembering your journey and effort builds confidence and appreciation for your work",
          },
          {
            text: "Focus on the critics in the audience",
            feedback: "Why this doesn't matter:",
            consequences: "Focusing on potential critics increases anxiety and affects confidence",
          },
          {
            text: "Avoid eye contact with the crowd",
            feedback: "Why this doesn't matter:",
            consequences: "Avoiding eye contact appears insecure and disconnects you from your audience",
          },
        ],
        positive: 0,
      },
      {
        question: "What should the artist do after unveiling their painting?",
        description: "The painting has been revealed, and the audience is reacting.",
        image: "/artist_scene2.png?height=400&width=400",
        options: [
          {
            text: "Walk away to avoid the crowd",
            feedback: "Why this doesn't matter:",
            consequences: "Avoiding interaction misses valuable feedback opportunities",
          },
          {
            text: "Smile and accept feedback gracefully",
            feedback: "Why this matters:",
            consequences: "Engaging positively with your audience builds connections and shows professionalism",
          },
          {
            text: "Apologize for any perceived flaws",
            feedback: "Why this doesn't matter:",
            consequences: "Apologizing draws attention to negatives and undermines your work",
          },
        ],
        positive: 1,
      },
    ],
    feedback: {
      positive: "The artist confidently shared their work and connected with the audience",
      negative: "The artist's lack of confidence affected the audience's perception",
    },
  },
  musician: {
    title: "Concert Performance",
    image: "/musician.png?height=400&width=400",
    scenes: [
      {
        question: "What advice would you give the musician before stepping onto the stage?",
        description:
          "The musician waits backstage, feeling the weight of the audience's expectations. They can hear the crowd buzzing with excitement.",
        image: "/musician_scene1.png?height=200&width=400",
        options: [
          {
            text: "Visualize yourself performing flawlessly",
            feedback: "Why this matters:",
            consequences: "Positive visualization reduces anxiety and helps prepare mentally for success",
          },
          {
            text: "Think about the possibility of making mistakes",
            feedback: "Why this doesn't matter:",
            consequences: "Focusing on potential mistakes increases anxiety and can become self-fulfilling",
          },
          {
            text: "Focus on the noise of the crowd",
            feedback: "Why this doesn't matter:",
            consequences: "Getting distracted by the crowd breaks concentration and preparation",
          },
        ],
        positive: 0,
      },
      {
        question: "What should the musician do if they hit a wrong note during the performance?",
        description:
          "The musician accidentally plays a wrong note during their song. The audience seems not to notice, but the musician feels embarrassed.",
        image: "/musician_scene2.pngheight=400&width=400",
        options: [
          {
            text: "Stop and apologize to the audience",
            feedback: "Why this doesn't matter:",
            consequences: "Drawing attention to minor mistakes breaks the performance flow",
          },
          {
            text: "Let the mistake affect the rest of the song",
            feedback: "Why this doesn't matter:",
            consequences: "Dwelling on mistakes affects confidence and leads to more errors",
          },
          {
            text: "Keep going and focus on the rest of the performance",
            feedback: "Why this matters:",
            consequences: "Professional musicians know to continue confidently past small mistakes",
          },
        ],
        positive: 2,
      },
    ],
    feedback: {
      positive: "The musician gave a great performance and left the audience thrilled",
      negative: "The musician's self-doubt impacted the performance",
    },
  },
  teacher: {
    title: "Classroom Lecture",
    image: "/teacher.png?height=400&width=400",
    scenes: [
      {
        question: "What advice would you give the teacher before starting their lecture?",
        description:
          "The teacher stands in front of a classroom of students, preparing to deliver a lecture on a complex topic.",
        image: "/teacher_scene1.png?height=200&width=400",
        options: [
          {
            text: "Start with a confident and clear introduction",
            feedback: "Why this matters:",
            consequences: "A strong start sets the tone and engages students from the beginning",
          },
          {
            text: "Focus on how challenging the topic is",
            feedback: "Why this doesn't matter:",
            consequences: "Emphasizing difficulty can discourage students and create anxiety",
          },
          {
            text: "Avoid eye contact with the students",
            feedback: "Why this doesn't matter:",
            consequences: "Lack of eye contact reduces engagement and connection",
          },
        ],
        positive: 0,
      },
      {
        question: "How should the teacher handle a student's challenging question?",
        description:
          "A student asks a difficult question during the lecture. The teacher needs to respond effectively.",
        image: "/teacher_scene2.png?height=400&width=400",
        options: [
          {
            text: "Dismiss the question to keep the lecture on track",
            feedback: "Why this doesn't matter:",
            consequences: "Dismissing questions discourages participation and critical thinking",
          },
          {
            text: "Acknowledge the question and provide the best answer you can",
            feedback: "Why this matters:",
            consequences: "This shows respect for student curiosity and creates a positive learning environment",
          },
          {
            text: "Criticize the student for asking an off-topic question",
            feedback: "Why this doesn't matter:",
            consequences: "Criticism creates a negative atmosphere and discourages participation",
          },
        ],
        positive: 1,
      },
    ],
    feedback: {
      positive: "The teacher engaged the students and delivered an excellent lecture",
      negative: "The teacher's approach affected student engagement negatively",
    },
  },
  firefighter: {
    title: "Fire Rescue",
    image: "/firefighter.png?height=400&width=400",
    scenes: [
      {
        question: "What advice would you give the firefighter before entering the burning building?",
        description: "The firefighter is gearing up to enter a burning building to save trapped individuals.",
        image: "/firefighter_scene1.png?height=200&width=400",
        options: [
          {
            text: "Think about the risks and hesitate",
            feedback: "Why this doesn't matter:",
            consequences: "Hesitation in emergency situations can cost valuable time and endanger lives",
          },
          {
            text: "Worry about the building collapsing",
            feedback: "Why this doesn't matter:",
            consequences: "Excessive worry can paralyze decision-making in critical moments",
          },
          {
            text: "Focus on your training and stay calm",
            feedback: "Why this matters:",
            consequences: "Staying focused and calm allows you to apply training effectively and make better decisions",
          },
        ],
        positive: 2,
      },
      {
        question: "How should the firefighter handle a panicking victim?",
        description: "The firefighter encounters a victim who is panicking and resisting assistance.",
        image: "/firefighter_scene2.png?height=400&width=400",
        options: [
          {
            text: "Forcefully move them out",
            feedback: "Why this doesn't matter:",
            consequences: "Force can increase panic and potentially cause injury",
          },
          {
            text: "Reassure them and guide them calmly",
            feedback: "Why this matters:",
            consequences: "A calm and reassuring approach helps victims cooperate and leads to safer evacuation",
          },
          {
            text: "Leave them to save others first",
            feedback: "Why this doesn't matter:",
            consequences: "Abandoning a victim goes against rescue protocols and ethics",
          },
        ],
        positive: 1,
      },
    ],
    feedback: {
      positive: "The firefighter's bravery and composure saved lives",
      negative: "The firefighter's approach complicated the rescue operation",
    },
  },
}

