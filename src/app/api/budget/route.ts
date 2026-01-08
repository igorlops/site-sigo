import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { first_name, last_name, email, phone, project_type, budget_range, deadline, message } = body;

        // Simple validation
        if (!first_name || !email) {
            return NextResponse.json(
                { message: 'Campos obrigatórios ausentes.' },
                { status: 400 }
            );
        }

        // Format message to include budget details
        const details = `
Tipo de Projeto: ${project_type}
Orçamento Estimado: ${budget_range}
Prazo: ${deadline}

Mensagem Original:
${message}
        `.trim();

        // Insert into Postgres (using contacts table for simplicity as per plan)
        const result = await sql`
            INSERT INTO contacts (first_name, last_name, email, phone, message)
            VALUES (${first_name}, ${last_name}, ${email}, ${phone}, ${details})
        `;

        return NextResponse.json(
            { message: 'Solicitação de orçamento recebida com sucesso!', result },
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
