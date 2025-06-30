db.collection("complaints")
  .orderBy("createdAt", "desc")
  .onSnapshot(snapshot => {
    const list = document.getElementById("complaints-list");
    list.innerHTML = "";
    snapshot.forEach(doc => {
      const li = document.createElement("li");
      li.textContent = doc.data().title + " - " + doc.data().description;
      list.appendChild(li);
    });
  });
