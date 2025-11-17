document.addEventListener('DOMContentLoaded', () => {
    const modelFilter = document.getElementById('modelFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchBar = document.getElementById('searchBar');
    const partsTableBody = document.querySelector('#partsTable tbody');
    let allParts = [];

    // Carregar os dados do JSON
    fetch('JSON/parts.json')
        .then(response => response.json())
        .then(data => {
            allParts = data;
            populateCategoryFilter(allParts);
            renderTable(allParts);
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));

    // Popular o filtro de categorias
    function populateCategoryFilter(parts) {
        const categories = [...new Set(parts.map(part => part.categoria))];
        categories.sort().forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    // Renderizar a tabela com os dados fornecidos
    function renderTable(partsToRender) {
        partsTableBody.innerHTML = ''; // Limpar a tabela existente
        if (partsToRender.length === 0) {
            const row = partsTableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 6; // Número de colunas na tabela
            cell.textContent = 'Nenhuma peça encontrada.';
            cell.style.textAlign = 'center';
            return;
        }

        partsToRender.forEach(part => {
            const row = partsTableBody.insertRow();
            row.insertCell().textContent = part.id;
            row.insertCell().textContent = part.nome;
            row.insertCell().textContent = part.descricao;
            row.insertCell().textContent = part.categoria;
            row.insertCell().textContent = part.compatibilidade.join(', ');
            row.insertCell().textContent = part.codigo_original;
        });
    }

    // Função para aplicar todos os filtros e busca
    function applyFilters() {
        const selectedModel = modelFilter.value;
        const selectedCategory = categoryFilter.value;
        const searchTerm = searchBar.value.toLowerCase();

        let filteredParts = allParts.filter(part => {
            const matchesModel = selectedModel === 'all' || part.compatibilidade.includes(selectedModel);
            const matchesCategory = selectedCategory === 'all' || part.categoria === selectedCategory;
            const matchesSearch = part.nome.toLowerCase().includes(searchTerm) ||
                                  part.descricao.toLowerCase().includes(searchTerm) ||
                                  part.codigo_original.toLowerCase().includes(searchTerm);
            return matchesModel && matchesCategory && matchesSearch;
        });

        renderTable(filteredParts);
    }

    // Adicionar listeners para os filtros e barra de busca
    modelFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    searchBar.addEventListener('input', applyFilters);
});

