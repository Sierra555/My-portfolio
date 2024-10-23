import { useEffect, useState } from "react"

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
        const tabletMediaQuery = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");
        const desktopMediaQuery = window.matchMedia("(min-width: 1025px)");

        setIsMobile(mobileMediaQuery.matches);
        setIsTablet(tabletMediaQuery.matches);
        setIsDesktop(desktopMediaQuery.matches);


        const handleMobileMediaQuery = (e) => setIsMobile(e.matches);
        const handleTabletMediaQuery = (e) => setIsTablet(e.matches);
        const handleDesktoptMediaQuery = (e) => setIsDesktop(e.matches);

        mobileMediaQuery.addEventListener('change', handleMobileMediaQuery);
        tabletMediaQuery.addEventListener('change', handleTabletMediaQuery);
        desktopMediaQuery.addEventListener('change', handleDesktoptMediaQuery);

        return () => {
            mobileMediaQuery.removeEventListener('change', handleMobileMediaQuery);
            tabletMediaQuery.removeEventListener('change', handleTabletMediaQuery);
            desktopMediaQuery.removeEventListener('change', handleDesktoptMediaQuery);
        }
    }, []);
    
    return { isMobile, isTablet, isDesktop };
}

export default useIsMobile;