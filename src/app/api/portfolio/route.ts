import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/mysql';

// GET: Fetch all portfolios
export async function GET() {
    try {
        const [rows] = await pool.execute('SELECT * FROM portfolios ORDER BY created_at DESC');
        return NextResponse.json(rows, { status: 200 });
    } catch (error: unknown) {
        console.error('Database Error:', error);
        return NextResponse.json(
            { message: 'Erro ao buscar portfólios.' },
            { status: 500 }
        );
    }
}

// POST: Create a new portfolio item
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, description, image_url, link_url, category } = body;

        // Simple validation
        if (!title || !image_url) {
            return NextResponse.json(
                { message: 'Título e URL da imagem são obrigatórios.' },
                { status: 400 }
            );
        }

        // Insert into MySQL
        const [result] = await pool.execute(
            'INSERT INTO portfolios (title, description, image_url, link_url, category) VALUES (?, ?, ?, ?, ?)',
            [title, description, image_url, link_url, category]
        );

        return NextResponse.json(
            { message: 'Portfólio adicionado com sucesso!', result },
            { status: 201 }
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
