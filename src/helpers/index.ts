export function formatCurrency(quantity: number) { //Formatear el signo de dolar en la isquierda
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}