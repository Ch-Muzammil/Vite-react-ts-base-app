import { Link } from "react-router-dom";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  Skeleton,
} from "@/shared/components/ui";

export default function UiShowcasePage() {
  return (
    <div className="default_container py-10 font-primary">
      <p className="default_para_sec mb-2">
        <Link
          to="/"
          className="text-[var(--primary-color)] underline-offset-2 hover:underline"
        >
          ← Home
        </Link>
      </p>
      <h1 className="mb-2">UI primitives</h1>
      <p className="default_para_sec mb-8 max-w-2xl">
        Reusable building blocks from{" "}
        <code className="rounded bg-[var(--light-grey)] px-1.5 py-0.5 text-sm">
          @/shared/components/ui
        </code>
        . Use them inside any module or feature.
      </p>

      <div className="flex flex-col gap-10">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--secondary-text-color)]">
            Card + Badge
          </h2>
          <Card className="max-w-lg">
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle>Project status</CardTitle>
                <CardDescription>
                  Example card using shared primitives only.
                </CardDescription>
              </div>
              <Badge variant="success">Active</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--text-dull)]">
                Badges work inline with headers for status, roles, or counts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary">Footer</Badge>
            </CardFooter>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--secondary-text-color)]">
            Alert
          </h2>
          <Alert className="max-w-lg">
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              Default alert for neutral messages and inline help.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" className="max-w-lg">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              Destructive variant for errors and validation summaries.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--secondary-text-color)]">
            Skeleton
          </h2>
          <div className="flex max-w-lg flex-col gap-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
