import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/index";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
    icon1: React.ReactNode;
    icon2?: React.ReactNode; // Hice el icon2 opcional por si a veces solo quieres uno
    title: string;
    description: string;
    content: string;
    footer?: string;
}

export default function FeaturedCard({ icon1, icon2, title, description, content, footer }: FeaturedCardProps) {
    return (
        <Card className="flex flex-col h-full min-h-[220px] transition-all hover:shadow-md hover:border-primary/50 group overflow-hidden">
            <CardHeader className="flex flex-col items-start gap-3">

                <div className="flex flex-row items-center gap-3 w-full">
                    <div className="flex items-center gap-1.5 text-primary shrink-0">
                        <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            {icon1}
                        </div>
                        {icon2 && (
                            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                {icon2}
                            </div>
                        )}
                    </div>

                    <CardTitle className="text-xl font-bold tracking-tight line-clamp-1">
                        {title}
                    </CardTitle>
                </div>

                <CardDescription className="text-sm font-medium text-muted-foreground/80 line-clamp-2 w-full">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow text-md text-foreground leading-relaxed">
                <p className="line-clamp-3">{content}</p>
            </CardContent>

            {footer && (
                <CardFooter className="pt-0 pb-1 flex justify-end mt-auto">
                    <p className="text-sm italic text-muted-foreground/70 line-clamp-1 pr-1.5">
                        {footer}
                    </p>
                </CardFooter>
            )}
        </Card>
    );
}