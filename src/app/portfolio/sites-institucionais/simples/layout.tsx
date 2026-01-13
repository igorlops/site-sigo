import BackToPortfolio from "@/components/ui/items/BackToPortfolio";

export default function SimpleSitesLayout({
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
