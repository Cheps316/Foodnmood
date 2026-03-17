"use client";

import * as React from "react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "This product has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "StartupXYZ",
    avatar: "https://i.pravatar.cc/150?img=3",
    content:
      "I've tried many similar tools, but this one stands out for its simplicity and effectiveness. It's become an essential part of my daily workflow.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandCo",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "The customer support is exceptional, and the product keeps getting better with each update. Highly recommend for any growing business.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "InnovateTech",
    avatar: "https://i.pravatar.cc/150?img=8",
    content:
      "We've seen a significant ROI since implementing this solution. It's helped us streamline operations and focus on what matters most.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Designer",
    company: "DesignStudio",
    avatar: "https://i.pravatar.cc/150?img=9",
    content:
      "As a designer, I appreciate the attention to detail in the UI. It's refreshing to use a product that's both beautiful and functional.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-4",
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted",
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = React.useState(true);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const stopAutoplay = React.useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!api || !isPlaying) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isPlaying]);

  const handleMouseDown = () => stopAutoplay();
  const handleClick = () => stopAutoplay();

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div> */}

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full "
          onMouseDown={handleMouseDown}
          onClick={handleClick}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <Card className="h-full border border-border bg-card">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <Quote className="size-8 text-primary/20" />
                    <p className="flex-1 text-sm leading-relaxed text-foreground   italic font-serif">
                      "{testimonial.content}"
                    </p>
                    <StarRating rating={testimonial.rating} />
                    <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                      <Avatar className="size-10">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">
                          {testimonial.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" /> */}
        </Carousel>
      </div>
    </section>
  );
}
