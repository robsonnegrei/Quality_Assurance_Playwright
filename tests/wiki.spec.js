const { test, expect } = require('@playwright/test');
const { type } = require('os');
const { timeout } = require('../playwright.config');

//Verifica se a página inicial da Wikipedia está correta
test('Estou na Wikipedia', async ({ page }) => {
    // Espere que a página seja carregada e tenha uma srt que contenha "Wikipedia"
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle(/Wikipedia/);

    // Espere que a página tenha um seletor class 'localized-slogan' que contenha o texto"A enciclopédia livre"
    await expect(page.locator('.localized-slogan')).toHaveText(/The Free Encyclopedia/);

    // Espere que a página tenha um seletor que contenha "search-input"
    await expect(page.locator('id=search-input')).toBeVisible();

});

// Pesquisa por "Brasil" na wikipedia
test('Pesquisa por "Brasil"', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');

    await page.locator('#searchInput').fill('Brazil')

    await page.locator('//*[@id="search-form"]/fieldset/button').press('Enter');

    // Espere que a página redirecione para resultado da busca 'Brasil'
    await expect(page).toHaveURL(/Brazil/);
});

// validando o conteudo principal da pagina de busca do Brasil na wikipedia
test('Pesquisa por "Brasil" e verifica o título', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');

    await page.locator('#searchInput').fill('Brazil')

    await page.locator('//*[@id="search-form"]/fieldset/button').press('Enter');

    // Espere que a página redirecione para resultado da busca 'Brazil'
    await expect(page).toHaveURL(/Brazil/);

    // Esperar o carregamento da página do artigo 
    await expect (page.locator('#firstHeading')).toHaveText(/Brazil/);

    // Interagir com o conteúdo principal 
    await expect(page.locator('#bodyContent')).toHaveText(/Brazil/);

    // Interagir com a barra lateral 
    await expect (page.locator('//*[@id="vector-toc"]/div/h2')).toHaveText(/Contents/);

    // Interagir com o conteúdo da barra lateral
    const tocItems = [
        { id: '#toc-Etymology', text: 'Etymology' },
        { id: '#toc-History', text: 'History' },
        { id: '#toc-Geography', text: 'Geography' },
        { id: '#toc-Government_and_politics', text: 'Government and politics' },
        { id: '#toc-Economy', text: 'Economy' },
        { id: '#toc-Demographics', text: 'Demographics' },
        { id: '#toc-Culture', text: 'Culture' },
        { id: '#toc-See_also', text: 'See also' },
        { id: '#toc-Notes', text: 'Notes' },
        { id: '#toc-References', text: 'References' },
        { id: '#toc-External_links', text: 'External links' },
    ];
    for (const item of tocItems) {
        await expect(page.locator(item.id)).toContainText(item.text);
    }
    // Interagir com o rodapé 
    await expect (page.locator('#footer')).toHaveText(/trademark of the Wikimedia Foundation, Inc., a non-profit organization/);
});