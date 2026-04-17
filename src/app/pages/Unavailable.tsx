import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';

const EXTERNAL_URL = 'https://mcq-doctor-v2.vercel.app/';

export default function Unavailable() {
	const [countdown, setCountdown] = useState(8);

	useEffect(() => {
		if (countdown <= 0) {
			// open in new tab
			window.open(EXTERNAL_URL, '_blank', 'noopener');
			return;
		}

		const t = setTimeout(() => setCountdown(c => c - 1), 1000);
		return () => clearTimeout(t);
	}, [countdown]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
			<div className="max-w-3xl w-full">
				<header className="mb-6">
					<div className="flex items-center gap-2">
						<Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
							<ArrowLeft className="w-5 h-5" />
							<span>Back to Home</span>
						</Link>
					</div>
				</header>

				<Card className="shadow-xl">
					<CardHeader>
						<CardTitle className="text-2xl">Service Unavailable</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-slate-700">This version of MCQ Doctor is unavailable here. We've moved the live site to a new location.</p>

						<div className="text-center">
							<p className="mb-4 text-slate-600">You'll be redirected to the live site in <strong>{countdown}</strong> seconds.</p>

							<div className="flex flex-col sm:flex-row gap-3 justify-center">
								<a
									href={EXTERNAL_URL}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button size="lg" className="px-6 py-4">Go to MCQ Doctor v2</Button>
								</a>

								<Link to="/">
									<Button variant="outline" size="lg" className="px-6 py-4">Stay on this site</Button>
								</Link>
							</div>

							<p className="mt-4 text-sm text-slate-500">If you're not redirected, click the button above.</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
