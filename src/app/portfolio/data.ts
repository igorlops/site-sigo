import React from 'react';
import { Star, Zap, ShieldCheck } from 'lucide-react';

export const sitesSimples = [
    { slug: 'advocacia-empresarial', name: 'Advocacia Empresarial' },
    { slug: 'agencia-marketing', name: 'Agência de Marketing' },
    { slug: 'clinica-estetica', name: 'Clínica de Estética' },
    { slug: 'clinica-odontologica', name: 'Clínica Odontológica' },
    { slug: 'contabilidade', name: 'Escritório de Contabilidade' },
    { slug: 'imobiliaria', name: 'Imobiliária Residencial' },
    { slug: 'psicologo', name: 'Consultório de Psicologia' },
];

export const sitesPremium = [
    { slug: 'advocacia-empresarial', name: 'Advocacia Premium' },
    { slug: 'arquitetura-design-interiores', name: 'Arquitetura & Design' },
    { slug: 'clinica-estetica-avancada', name: 'Estética Avançada' },
    { slug: 'construtora-incorporadora', name: 'Construtora & Incorporadora' },
    { slug: 'consultoria-empresarial', name: 'Consultoria Empresarial' },
    { slug: 'energia-solar', name: 'Energia Solar' },
    { slug: 'joalheria-artesanal-premium', name: 'Joalheria Artesanal' },
];

export const landingPages = [
    { slug: 'personal-trainer', name: 'Personal Trainer' },
    { slug: 'nutricionista-esportivo', name: 'Nutricionista Esportivo' },
    { slug: 'clinica-odontologica', name: 'Odontologia' },
    { slug: 'clinica-estetica', name: 'Estética' },
    { slug: 'psicologo', name: 'Psicologia' },
    { slug: 'advocacia-empresarial', name: 'Advocacia' },
    { slug: 'contabilidade', name: 'Contabilidade' },
    { slug: 'imobiliaria-alto-padrao', name: 'Imobiliária Luxo' },
    { slug: 'corretor-seguros', name: 'Corretor de Seguros' },
    { slug: 'saas-financeiro', name: 'SaaS Financeiro' },
    { slug: 'saas-crm', name: 'CRM SaaS' },
    { slug: 'escola-idiomas', name: 'Escola de Idiomas' },
    { slug: 'curso-online', name: 'Curso Online' },
    { slug: 'agencia-marketing', name: 'Agência Marketing' },
    { slug: 'consultoria-empresarial', name: 'Consultoria' },
    { slug: 'clinica-veterinaria', name: 'Clínica Veterinária' },
    { slug: 'pet-shop-premium', name: 'Pet Shop' },
    { slug: 'ecommerce-nicho', name: 'E-commerce Café' },
    { slug: 'infoprodutor', name: 'Infoprodutor' },
    { slug: 'startup-tecnologia', name: 'Startup Tech' },
];

export const navItems = [
    { label: 'Todos os Projetos', href: '/portfolio', icon: React.createElement(Zap, { className: "w-5 h-5" }) },
    { label: 'Sites Premium', href: '/portfolio/sites-institucionais/premium', icon: React.createElement(Star, { className: "w-5 h-5" }) },
    { label: 'Landing Pages', href: '/portfolio/landing-pages', icon: React.createElement(Zap, { className: "w-5 h-5" }) },
    { label: 'Sites Simples', href: '/portfolio/sites-institucionais/simples', icon: React.createElement(ShieldCheck, { className: "w-5 h-5" }) },
];
