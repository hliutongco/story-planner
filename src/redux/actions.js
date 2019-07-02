export const saveDescription = (title, description) => {
  return {
    type: "SAVE_DESCRIPTION",
    payload: {
      title: title,
      description: description
    }
  }
}

export const changeTheTitle = (title) => {
  return {
    type: "CHANGE_TITLE",
    payload: {
      title: title
    }
  }
}

export const changeTheTurn = (boolean) => {
  let sectionTitles = ["exposition", "conflict", "rising action", "the turn", "climax", "falling action"]

  if(boolean) sectionTitles = sectionTitles.filter(title => title !== "the turn")

  return {
    type: "CHANGE_THE_TURN",
    payload: sectionTitles
  }
}
