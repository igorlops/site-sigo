import BackToPortfolio from "@/components/ui/items/BackToPortfolio";

export default function LandingPagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <BackToPortfolio />
        </>
    );
}
