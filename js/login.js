async function loadData(){
    let responde=await fetch(DATA_URL);
    let json = await Response.json();
    showData(json.name);
}