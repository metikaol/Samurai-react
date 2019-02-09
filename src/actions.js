const key = 'LEls10pQ1lqL1lxLehiPoD0P61SpGcQK'

export const saveData = (data, dispatch) => (
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${data}`,
      { 
      method: 'GET',
      })
      .then(res => res.json())
      .then((data) => {
          dispatch({
          type: 'GET_CODE',
          data  
      })
     })
      .catch(err => console.log(err))
)