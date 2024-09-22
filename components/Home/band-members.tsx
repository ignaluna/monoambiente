import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const bandMembers = [
  {
    name: 'Igna Luna',
    role: 'Vocalista',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Nahuel Krecak',
    role: 'Guitarrista',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Julián Menna',
    role: 'Baterista',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Martin Canolick',
    role: 'Bajista',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Luciana Viva',
    role: 'Manager',
    image: '/placeholder.svg?height=200&width=200',
  },
];

export function BandMembers() {
  return (
    <section id='members' className='mb-16'>
      <h2 className='text-2xl font-bold mb-4 text-center'>
        Monitos del ambiente
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {bandMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={member.image}
                alt={member.name}
                className='w-full h-auto rounded-lg'
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
