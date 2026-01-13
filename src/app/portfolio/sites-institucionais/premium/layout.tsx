import BackToPortfolio from "@/components/ui/items/BackToPortfolio";

export default function PremiumSitesLayout({
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
