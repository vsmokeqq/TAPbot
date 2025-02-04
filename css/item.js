    const item = document.getElementById("item");
    let modalOpen = false;
    
    if (item) {
        item.addEventListener("click", function () {
            if (!modalOpen) {
                openModal();
            }
        });
    }

    function openModal() {
        modalOpen = true;
        const modal = document.createElement("div");
        modal.id = "modal";
        modal.innerHTML = `
            <h3>Вы уверены, что хотите купить:</h3>
            <button id="closeModal">Да</button>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById("closeModal").addEventListener("click", function () {
            modal.remove();
            modalOpen = false;
        });
    }