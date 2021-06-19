
export const getUser = async (action, login, password) => {
  const res = await fetch(`https://hack4lem-backend.herokuapp.com/user?login=${login}&password=${password}`);
  const json = await res.json();
  action(json.data);
};

export const postData = async () => {
  await fetch(`https://hack4lem-backend.herokuapp.com/user`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
    .then((res) => console.log(res));
};

export const patchData = async (dataToSend, action, id) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        dataToSend,
      ),
    }).then((res) => res.json())
    .then((res) => action(res));
};

export const deleteData = async (id, action) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
    .then((res) => action(res));

};

export const alertTrigger = (condition, history) => condition && setTimeout(() => {
  history.push('/Tasks');
}, 2000);

export const loginTigger = (history) => setTimeout(() => {
  history.push('/dashboard');
}, 2000);
