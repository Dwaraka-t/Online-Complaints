function submitComplaint() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  db.collection("complaints").add({
    title: title,
    description: description,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => alert("Complaint submitted!"))
  .catch(error => alert(error.message));
}
