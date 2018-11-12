export function updateArray(arr: any[], element: any): any {

  console.log('updateArray', element);

  for (let i = 0; i < arr.length; i++) {
    if (element['_id'] === arr[i]['_id']) {
      arr[i] = element;
    }
  }

  return arr;
}

export function deleteFromArray(arr: any[], id: any): any {
  console.log('deleteFromArray');
  for (let i = 0; i < arr.length; i++) {

    if (id === arr[i]._id) {

      arr.splice(i, 1);
    }
  }

  return arr;
}
