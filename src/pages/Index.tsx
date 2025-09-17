import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Худи Exile",
      price: "3,500₽",
      image: "/img/2120dedd-f99e-4e98-9e90-6f84a0f9cff1.jpg",
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "Футболка Креатив",
      price: "1,800₽",
      image: "/img/2120dedd-f99e-4e98-9e90-6f84a0f9cff1.jpg",
      badge: "Новинка"
    },
    {
      id: 3,
      name: "Стикер-пак",
      price: "500₽",
      image: "/img/2120dedd-f99e-4e98-9e90-6f84a0f9cff1.jpg",
      badge: "Лимитка"
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Как я стал блогером",
      views: "1.2M",
      duration: "15:32"
    },
    {
      id: 2,
      title: "Мой день за кадром",
      views: "890K",
      duration: "22:15"
    },
    {
      id: 3,
      title: "Реакция на комментарии",
      views: "756K",
      duration: "18:45"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                ИЛЬЯ EXILE
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
                Контент-криейтор • Видеоблогер • Творец
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Icon name="Play" className="mr-2" />
                  Смотреть видео
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="ShoppingBag" className="mr-2" />
                  Мерч
                </Button>
              </div>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Icon name="Youtube" size={28} />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Icon name="Instagram" size={28} />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Icon name="MessageCircle" size={28} />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="video-border">
                <img 
                  src="/img/d159a036-3e8b-412b-aa7e-4cb2d45fb8c2.jpg" 
                  alt="Илья Exile" 
                  className="w-80 h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Мерч от Exile</h2>
            <p className="text-xl text-muted-foreground">Эксклюзивные товары для настоящих фанатов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="product-card border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mb-4">
                    {product.price}
                  </CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О блогере</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Илья Exile — один из самых ярких представителей российского YouTube. 
                  Начал свой путь в 2019 году и за короткое время собрал многомиллионную аудиторию.
                </p>
                <p>
                  Его контент отличается искренностью, юмором и креативным подходом. 
                  От игровых обзоров до влогов из жизни — каждое видео становится событием для фанатов.
                </p>
                <p>
                  Сегодня Илья не только создает контент, но и развивает собственный бренд, 
                  выпускает мерч и вдохновляет молодых креаторов на творчество.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2.5M</div>
                  <div className="text-muted-foreground">Подписчиков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-muted-foreground">Видео</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">150M</div>
                  <div className="text-muted-foreground">Просмотров</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Золотая кнопка</h3>
                <p className="text-sm text-muted-foreground">YouTube Creator Award</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Mic" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold mb-2">Подкасты</h3>
                <p className="text-sm text-muted-foreground">Еженедельные выпуски</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Комьюнити</h3>
                <p className="text-sm text-muted-foreground">Активное общение</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Креатив</h3>
                <p className="text-sm text-muted-foreground">Уникальный контент</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Последние видео</h2>
            <p className="text-xl text-muted-foreground">Самые популярные ролики канала</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-white" />
                    <Badge className="absolute bottom-4 right-4 bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2 line-clamp-2">{video.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Eye" size={16} />
                    <span>{video.views} просмотров</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Youtube" className="mr-2" />
              Смотреть все видео
            </Button>
          </div>
        </div>
      </section>

      {/* Creative Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Творчество</h2>
            <p className="text-xl text-muted-foreground">Разнообразие контента и проектов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Gamepad2" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Игровой контент</h3>
              <p className="text-sm text-muted-foreground">Обзоры, стримы, летсплеи</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Camera" size={48} className="mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">Влоги</h3>
              <p className="text-sm text-muted-foreground">Жизнь за кадром</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Реакции</h3>
              <p className="text-sm text-muted-foreground">Отклики на тренды</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Lightbulb" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Челленджи</h3>
              <p className="text-sm text-muted-foreground">Креативные вызовы</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">EXILE</h3>
              <p className="text-white/80">
                Контент-криейтор, который меняет игру
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ссылки</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-white transition-colors">YouTube</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">TikTok</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-white/80">По вопросам сотрудничества:</p>
                <a href="mailto:business@exile.ru" className="text-white/80 hover:text-white transition-colors">
                  business@exile.ru
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Илья Exile. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;