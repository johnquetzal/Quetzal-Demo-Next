import { getI18nUtils, useI18n } from "@quetzallabs/i18n";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CreditCard,
  Database,
  ChevronsDown,
  PencilLine,
  FlaskConical,
} from "lucide-react";
import { Terminal } from "./terminal";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import quetzalLogo from "../../images/quetzal.png";
import { useUser } from "@/lib/auth";
import { signOut } from "@/app/(login)/actions";
import { useRouter } from "next/navigation";

import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export default async function HomePage() {
  const { t } = await getI18nUtils();
  //const t = useTranslations();

  const user = null;

  return (
    <main>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              alt={t("Quetzal Logo")}
              src={quetzalLogo}
              width={50}
              height={50}
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              {t("Quetzal")}
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="https://quetzal.mintlify.app"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t("Docs")}
            </Link>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
            >
              <Link href="https://getquetzal.com/signup">{t("Sign Up")}</Link>
            </Button>
          </div>
        </div>
      </header>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                {t("Internationalize <dynamic1>In minutes</dynamic1>", {
                  dynamic1: (chunks: ReactNode) => (
                    <span className="block text-green-500">{chunks}</span>
                  ),
                })}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {t(
                  "Use this demo project to test the experience of developing with Quetzal."
                )}
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <ChevronsDown className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  {t("Step 1: Clone Demo Repo")}
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  {t(
                    "This project has everything you need to test real-time product translation with Quetzal"
                  )}
                </p>
                <a href="https://github.com/QuetzalLabs/Quetzal-Demo-Next">
                  <Button className="bg-white mt-3 hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    {t("Quetzal Demo Repo")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <PencilLine className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  {t("Step 2: Set Quetzal API Key")}
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  {t(
                    "Set your API Key as an environment variable. To do this, make sure you have created a Quetzal project"
                  )}
                </p>
                <a href="https://getquetzal.com/signup">
                  <Button className="bg-white mt-3 hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    {t("Create Project")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="https://getquetzal.com/dashboard/settings/project/0">
                  <Button className="bg-white mt-3 hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    {t("Find Your Quetzal API Key")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <FlaskConical className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  {t("Step 3: Experiment!")}
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  {t(
                    "Edit the files of this demo project (This page is in /app/(dashboard)/page.tsx), and new text will be translated at build time. Change your browser's language settings to see the translated page. We recommend using our VSCode extension for the best experience."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t("Ready to use Quetzal in your own product?")}
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                {t("Use our docs to help you get set up!")}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="https://quetzal.mintlify.app" target="_blank">
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  {t("Quetzal Docs")}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
