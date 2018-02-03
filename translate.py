import spacy
nlp = spacy.load('en')

WORD_ORDER = ["TIME", "DO", "SUB", "VERB"]
WORD_ORDER_IO = ["TIME", "DO", "SUB", "VERB"]
# WORD_ORDER = ["SUB", "VERB", "DO"]
sen_dic = {"SUB": [], "IO": [], "DO": [], "VERB": [], "TIME": []}


def findSub(lefts):
	for l in lefts:
		if l.dep_ == "nsubj":
			sen_dic["SUB"].append(l)

def findRights(rights):
	for r in rights:
		if r.dep_ == "dobj":
			sen_dic["DO"].append(r)
		elif r.dep_ == "dative":
			sen_dic["IO"].append(r)

def findVerb(sentence):
	for word in doc:
		if word.pos_ == "VERB":
			sen_dic["VERB"].append(word.lemma_)
			lefts = word.lefts
			rights = word.rights
			findSub(lefts)
			findRights(rights)


	

	# # print(parsed_text)

	# output = []

	# #get token dependencies
	# for text in parsed_text:
	# 	# text = text.lemma_
	# 	print(text)
	# 	print("Tag: " + text.tag_)
	# 	print("Dep: " + text.dep_)
	# 	if text.dep_ == 'nsubj':
	# 		output.append(str(text).lower())
	# 	elif text.tag_[:2] == 'VB' and text.dep_ == "ROOT":
	# 		output.append(text.lemma_)
	# 	elif text.dep_ == "dobj" or text.dep_ == "oprd":
	# 		output.append(text.lemma_)

	# # for el in sen_dic:
	# # 	if 
	# print(output)
	# return output
	# # print(subject)
	# # print(direct_object)
	# # print(indirect_object)
	# for token in doc:
		# print(token.text, token.dep_, token.head.text, token.head.pos_, [child for child in token.children])

if __name__ == '__main__':
	from sys import argv
	doc = nlp(argv[1])
	findVerb(doc)
	# doc = nlp(argv[1])
	for ent in doc.ents:
		if ent.label_ == "DATE":
			sen_dic["TIME"] = ent
	output = []
	# if (len(sen_dic["IO"]) == 0):
	# 	order = WORD_ORDER
	# else:
	# 	order = WORD_ORDER_IO
	for val in WORD_ORDER:
		for word in sen_dic[val]:
			output.append(str(word).lower())
	print (output)
