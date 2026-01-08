import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { first_name, last_name, email, phone, message } = body;

        // Simple validation
        if (!first_name || !email || !message) {
            return NextResponse.json(
                { message: 'Campos obrigatórios ausentes.' },
                { status: 400 }
            );
        }

        // Insert into Postgres
        const result = await sql`
            INSERT INTO contacts (first_name, last_name, email, phone, message)
            VALUES (${first_name}, ${last_name}, ${email}, ${phone}, ${message})
        `;

        return NextResponse.json(
            { message: 'Sua mensagem foi enviada com sucesso e salva em nosso banco de dados!', result },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error('Database Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        return NextResponse.json(
            { message: 'Erro ao processar sua solicitação.', error: errorMessage },
            { status: 500 }
        );
    }
}
export async function GET() {
    try {
        const { rows } = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;
        return NextResponse.json(rows, { status: 200 });
    } catch (error: unknown) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { message: 'Erro ao buscar contatos.' },
            { status: 500 }
        );
    }
}