import {notFound} from 'next/navigation';

export default function CatchAllPage() {
  // notFound();
	
	return notFound();

	return(
		<div>
			<h1>Catch All Page</h1>
		</div>
	)
}
