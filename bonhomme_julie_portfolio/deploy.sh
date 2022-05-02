APP=bonhomme_julie_portfolio
DEST=/var/$APP
TMPL=bonhomme_julie_portfolio.conf.tmpl

./build.sh
RC=$?
if [[ $RC != 0 ]]; then
	echo "Erreur ($RC) sur le build"
	exit $RC
fi

sudo mkdir -p $DEST 
sudo chmod 777 $DEST 
sudo cp -r dist/$APP/* $DEST/
RC=$?
if [[ $RC != 0 ]]; then
	echo "Erreur ($RC) sur le deploy"
	exit $RC
fi

cat $TMPL | sed "s@#DEST#@$DEST@g" > /tmp/$APP.conf
ls -l /tmp/$APP.conf
sudo cp /tmp/$APP.conf /etc/nginx/conf.d/
