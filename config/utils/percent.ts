interface Datos {
    id: number;
    nombre: string;
    telf: number;
    total: number;
    ventas: number;
    desc: number;
    iva: number;
}

export function calcularPorcentajes(datos: Datos): { ventas: number; desc: number; iva: number } {
    const porcentajeVentas = (datos.ventas / datos.total) * 100;
    const porcentajeDesc = (datos.desc / datos.total) * 100;
    const porcentajeIva = (datos.iva / datos.total) * 100;

    const sumaPorcentajes = porcentajeVentas + porcentajeDesc + porcentajeIva;

    // Validar si la suma total excede el 100%
    if (sumaPorcentajes > 100) {
        // Normalizar los porcentajes para que sumen 100%
        const factorNormalizacion = 100 / sumaPorcentajes;
        return {
            ventas: porcentajeVentas * factorNormalizacion,
            desc: porcentajeDesc * factorNormalizacion,
            iva: porcentajeIva * factorNormalizacion,
        };
    }

    // Si la suma es menor o igual a 100%, devolver los porcentajes originales
    return {
        ventas: porcentajeVentas,
        desc: porcentajeDesc,
        iva: porcentajeIva,
    };
}