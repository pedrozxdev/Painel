// Lógica de Navegação SPA
        const contentDiv = document.getElementById('content');
        const pageTitle = document.getElementById('page-title');

        const pages = {
            dashboard: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                    <div class="p-6 bg-white dark:bg-darkCard rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <p class="text-sm text-gray-500 uppercase">Total de Clientes</p>
                        <h2 class="text-3xl font-bold mt-2">1,284</h2>
                        <span class="text-green-500 text-sm font-medium"><i class="fas fa-arrow-up"></i> 12% este mês</span>
                    </div>
                    <div class="p-6 bg-white dark:bg-darkCard rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <p class="text-sm text-gray-500 uppercase">Taxa de Churn</p>
                        <h2 class="text-3xl font-bold mt-2">2.1%</h2>
                        <span class="text-red-500 text-sm font-medium"><i class="fas fa-arrow-down"></i> -0.4%</span>
                    </div>
                </div>
                <div class="mt-8 p-6 bg-white dark:bg-darkCard rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-64 flex items-center justify-center">
                    <p class="text-gray-400">Gráfico Analítico principal será renderizado aqui.</p>
                </div>
            `,
            customers: `
                <div class="bg-white dark:bg-darkCard rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fadeIn">
                    <div class="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                        <h3 class="font-bold">Lista de Clientes Recentes</h3>
                        <button class="bg-primary text-white px-4 py-2 rounded-lg text-sm">Novo Cliente</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-gray-50 dark:bg-gray-800 text-xs uppercase">
                                <tr>
                                    <th class="px-6 py-3 text-gray-500">Nome</th>
                                    <th class="px-6 py-3 text-gray-500">Status</th>
                                    <th class="px-6 py-3 text-gray-500">E-mail</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y dark:divide-gray-700 text-sm">
                                <tr>
                                    <td class="px-6 py-4">João Silva</td>
                                    <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Ativo</span></td>
                                    <td class="px-6 py-4">joao@email.com</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">Maria Oliveira</td>
                                    <td class="px-6 py-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Pendente</span></td>
                                    <td class="px-6 py-4">maria@email.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            reports: `
                <div class="bg-white dark:bg-darkCard rounded-xl p-8 text-center animate-fadeIn">
                    <div class="mb-4 text-primary text-5xl"><i class="fas fa-file-invoice-dollar"></i></div>
                    <h3 class="text-xl font-bold mb-2">Relatórios Financeiros</h3>
                    <p class="text-gray-500 mb-6">Gere relatórios detalhados de faturamento e comportamento do cliente.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                        <button class="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Exportar PDF</button>
                        <button class="p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Exportar CSV</button>
                    </div>
                </div>
            `
        };

        function navigate(page) {
            contentDiv.innerHTML = pages[page];
            pageTitle.innerText = page.charAt(0).toUpperCase() + page.slice(1);
            // Salva a última página no localStorage (opcional)
            localStorage.setItem('lastPage', page);
        }

        // Modo Escuro
        function toggleDarkMode() {
            const html = document.documentElement;
            const isDark = html.classList.toggle('dark');
            const iconMob = document.getElementById('theme-icon-mob');
            const iconDesk = document.getElementById('theme-icon-desk');
            
            const iconClass = isDark ? 'fa-sun' : 'fa-moon';
            iconMob.className = `fas ${iconClass} text-lg`;
            iconDesk.className = `fas ${iconClass} w-5 h-5 text-gray-500`;
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        // Carregamento inicial do tema
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }