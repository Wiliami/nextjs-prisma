import { NextResponse, NextRequest } from "next/server"; 

export async function GET(req: NextRequest) {
    try {
        const response = await fetch('https://serpapi.com/search.json?engine=google_flights&departure_id=MAO&currency=USD&type=2&outbound_date=2026-03-03&arrival_id=FOR')

        if(!response.ok) {
            console.log(`Erro ao buscar dados de voos: ${response.statusText}`)
        }
        const voos = await response.json()
        
        return NextResponse.json(voos)

    } catch (err) {
        console.error('Internal server error:', err)
        return NextResponse.json(
            { err: 'Internal server error' },
            { status: 500 }
        )
    }
}