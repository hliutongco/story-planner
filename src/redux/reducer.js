
const initialState = {
  title: "Untitled",
  storyStructure: {
    exposition: "Please add a description",
    conflict: "Please add a description",
    "rising action": "Please add a description",
    "the turn": "Please add a description",
    climax: "Please add a description",
    "falling action": "Please add a description"
  },
  sectionTitles: ["exposition", "conflict", "rising action", "the turn", "climax", "falling action"],
  characters: []
}

// Eventual structure:
// users: [
//   {
//     name: "Helen",
//     stories: [
//       {
//         title: "The Little Mermaid",
//         storyStructure: {
//           exposition: "Please add a description",
//           conflict: "Please add a description",
//           "rising action": "Please add a description",
//           "the turn": "Please add a description",
//           climax: "Please add a description",
//           "falling action": "Please add a description"
//         },
//         sectionTitles: ["exposition", "conflict", "rising action", "the turn", "climax", "falling action"]
//       }
//     ]
//   }
// ]

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.payload.title
      }
    case "CHANGE_THE_TURN":
      return {
        ...state,
        sectionTitles: action.payload
      }
    case "SAVE_DESCRIPTION":
      return {
        ...state,
        storyStructure: {
          ...state.storyStructure,
          [action.payload.title]: action.payload.description
        }
      }
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload]
      }
    default:
      return state
  }
}
