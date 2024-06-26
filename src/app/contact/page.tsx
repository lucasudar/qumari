import FormSection from "@/components/views/contact/FormSection";
import { siteConfig } from "@/config/site";

export default function Page() {
    return (
        <div className="bg-[url('https://res.cloudinary.com/de31kmdsm/image/upload/v1719599473/qamari/321_ccsibb.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 opacity-85">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div className="bg-secondary p-6 shadow-lg rounded-lg">
                        <FormSection />
                    </div>
                    <div className="bg-secondary p-6 shadow-lg rounded-lg">
                        <div className="bg-secondary px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h3 className="antialiased font-sans font-medium text-3xl text-foreground leading-8 mb-2">Contact Info</h3>
                            <p className="text-2xl text-foreground py-3">
                                <span className="font-medium">Email: </span>{siteConfig.mailSupport}
                            </p>
                            <p className="text-2xl text-foreground py-3">
                                <span className="font-medium">Phone: </span>{siteConfig.phone}
                            </p>
                            <p className="text-2xl text-foreground py-3">
                                <span className="font-medium">Address: </span>{siteConfig.address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}